from flask import Flask, request, jsonify
import os
from pymongo import MongoClient
from flask_cors import CORS
import pandas as pd
import datetime
import json
import pymongo


client = MongoClient("mongodb://localhost:27017/")
db=client["test-db"]
app = Flask(__name__)
CORS(app)
# cors = CORS(app, resources={r"/*": {"origins":"*"}})
# CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
CORS(app, origins=['http://localhost:3000'])
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/api/auth")
def get_login_data():
    data = list(db["Auth-credentials"].find({}, {'_id': 0}))
    return jsonify(data)

@app.route("/api/catalog")
def get_catalog_data():
    data = list(db["Catalogs"].find({},{'_id': 0}))
    return jsonify(data)

@app.route("/api/catalog/bulk")
def get_bulk_catalog_logs():
    data = list(db["bulk-upload-logs"].find({},{'_id': 0}))
    return jsonify(data)

@app.route("/api/catalog/single")
def get_single_catalog_logs():
    data = list(db["single-upload-logs"].find({},{'_id': 0}))
    return jsonify(data)

@app.route("/api/catalog/info")
def get_catalog_fields():
    data = list(db["catalog-fields-demo"].find({},{'_id': 0}))
    return jsonify(data)

@app.route("/api/users")
def get_user_info():
    data = list(db["user-data"].find({},{'_id': 0}))
    return jsonify(data)

@app.route('/api/users/<userid>')
def get_user_data(userid):
    user_data = db["user-data"].find_one({'userid': userid}, {'_id': 0})
    if user_data is None:
        return jsonify({'error': 'User not found'}), 404
    return jsonify(user_data)

@app.route('/api/catalog/<productid>')
def get_product_data(productid):
    product_data = db["Catalogs"].find_one({'ID': productid}, {'_id': 0})
    if product_data is None:
        return jsonify({'error': 'Product not found'}), 404
    return jsonify(product_data)



@app.route('/api/catalog/<string:product_id>', methods=['DELETE'])
def delete_product(product_id):
    result = db["Catalogs"].delete_one({'ID': product_id})
    if result.deleted_count == 1:
        return jsonify({'success': True}), 200
    else:
        return jsonify({'success': False, 'message': 'Product not found.'}), 404



@app.route("/api/reg-form", methods=["POST"])
def handle_reg_form():
    # retrieve the form data from the request body
    form_data = request.json
    collection=db['user-data']
    last_document = collection.find_one({}, sort=[("userid", pymongo.DESCENDING)])
    # set the initial category_id to 1 if the collection is empty, else increment the last category_id
    user_id = str(int(last_document["userid"]) + 1).zfill(5) if last_document else "00001"
    # add the category_id to the form data
    form_data["userid"] = user_id
    # add timestamp to the form data
    form_data["Timestamp"] = datetime.datetime.now().strftime("%d:%m:%y %H:%M:%S")
    # insert the form data into the MongoDB collection
    collection.insert_one(form_data)
    return jsonify({"message": "File uploaded successfully"}), 200



@app.route("/api/upload", methods=["POST"])
def handle_upload():
    file = request.files["file"]
    category = json.loads(request.form.get('category'))
    print(category)
    category_name = category['category']

    if not allowed_file(file.filename):
       return jsonify({"message": "File must be an Excel file"}), 400
    
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    unique_file_path = get_unique_filename(file_path)
    file.save(unique_file_path)

    insert_excel_data(unique_file_path, category_name)
    insert_upload_logs(category_name, file.filename, file_path)

    return jsonify({"message": "File uploaded successfully"}), 200



@app.route("/api/submit-form", methods=["POST"])
def handle_form():
    # retrieve the form data from the request body
    form_data = request.json
    collection = db["Catalogs"]
    last_document = collection.find_one({}, sort=[("ID", pymongo.DESCENDING)])
    # set the initial category_id to 1 if the collection is empty, else increment the last category_id
    category_id = str(int(last_document["ID"]) + 1).zfill(5) if last_document else "00001"
    # add the category_id to the form data
    form_data["ID"] = category_id
    # add timestamp to the form data
    form_data["Timestamp"] = datetime.datetime.now().strftime("%d:%m:%y %H:%M:%S")
    # insert the form data into the MongoDB collection
    collection.insert_one(form_data)
    insert_single_logs(form_data["Category"], form_data["Item Name"])
    return jsonify({"message": "File uploaded successfully"}), 200


def insert_excel_data(file_path, category):
    
    collection = db["Catalogs"]
    df = pd.read_excel(file_path, skiprows=[1])
    df['Category'] = category
    now = datetime.datetime.now().strftime('%d:%m:%y %H:%M:%S')
    df['Timestamp'] = now
    last_record = collection.find().sort([('_id', pymongo.DESCENDING)]).limit(1)
    last_id = last_record[0]['ID']
    df['ID'] = [f'{int(last_id) + i + 1:05}' for i in range(len(df))]
    data = df.to_dict('records')
    data = df.fillna(value='').to_dict('records')
    collection.insert_many(data)


def insert_upload_logs ( category, filename, filepath):
    date_created = datetime.datetime.now().strftime('%d:%m:%y %H:%M:%S')
    sno = db["bulk-upload-logs"].count_documents({}) + 1
    excel_file = pd.read_excel(filepath)
    num_rows = (excel_file.shape[0] - 1)   
    document = { 'sno': sno,
    'category': category,
    'filename': filename,
    'date_created': date_created,
    'num_rows': num_rows}
    collection=db["bulk-upload-logs"]
    collection.insert_one(document)


def insert_single_logs ( category, itemname):
    date_created = datetime.datetime.now().strftime('%d:%m:%y %H:%M:%S')
    sno = db["single-upload-logs"].count_documents({}) + 1   
    document = { 'sno': sno,
    'category': category,
    'itemname': itemname,
    'date_created': date_created,}
    collection=db["single-upload-logs"]
    collection.insert_one(document)


def get_unique_filename(file_path):
    """
    Returns a unique filename by adding a number suffix to the filename
    if the file already exists at the given path.
    """
    if not os.path.exists(file_path):
        return file_path
    file_name, file_ext = os.path.splitext(file_path)
    i = 1
    while True:
        new_file_path = f"{file_name}({i}){file_ext}"
        if not os.path.exists(new_file_path):
            return new_file_path
        i += 1  



def allowed_file(filename):
    """
    Returns True if the file extension is allowed, False otherwise.
    """
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in {'xls', 'xlsx', 'xlsm'}


if __name__ == "__main__":
    app.config['UPLOAD_FOLDER'] = 'C:/Users/www.abcom.com/Desktop/ONDC App/ondc-seller-backend/Catalogs'
    app.run(debug=True, port=8000)