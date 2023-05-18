import os
import pandas as pd
import json
from pymongo import MongoClient



client = MongoClient("mongodb://localhost:27017/")
db=client["test-db"]

data = {}
counter=1

for root, dirs, files in os.walk(r'C:\Users\www.abcom.com\Desktop\ONDC App\ondc-seller-ui\src\Assets', topdown=False):
    for name in files:
        if name.endswith(".xlsm"):
            filepath = os.path.join(root, name)
            category_name = os.path.relpath(root, "")
            
            cname = os.path.relpath(root, r'C:\Users\www.abcom.com\Desktop\ONDC App\ondc-seller-ui\src\Assets')
            cname = cname.replace("\\", "/")
            
            category_name = category_name.replace("\\", "/")  # convert Windows path separator to Unix style
            df = pd.read_excel(filepath)

             # Check if column name needs to be modified
            # fields = df.columns.tolist()
            # fields=[]
            # for col in df.columns:
            #     next_row_val = df[col].iloc[0]  # Get value of the cell in next row
            #     if isinstance(next_row_val, str) and next_row_val in ["MC", "MI"]:
            #         col = col + ' *'  # Add * to column name if condition is met
            #     # Exclude the column if it meets the conditions
            #     fields.append(col)

            fields = []
            for col in df.columns:
                if not col.startswith('Image') and col not in ["Replaceable", "Cancellable"]:
                    next_row_val = df[col].iloc[0]  # Get value of the cell in next row
                    # if isinstance(next_row_val, str) and next_row_val in ["MC", "MI"]:
                    #     col = col + ' *'  # Add * to column name if condition is met
                    fields.append(col)
            
            if category_name not in data:
                data[category_name] = []
                category_id = counter  
                counter += 1
            
            product_category = cname + "/"+ os.path.splitext(name)[0]
            data[category_name].append({"category": product_category, "fields": fields})


json_data = json.dumps(data)

collection=db["catalog-fields-demo"]
for category_name, documents in data.items():
    collection.insert_many(documents)