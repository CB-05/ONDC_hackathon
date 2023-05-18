import React, {useEffect, useState} from 'react';
import ButtonDark from '../../UI/Button/ButtonDark';
import "./ProductForm.css";

  const ProductForm = ({category}) => {

    const [formData, setFormData] = useState([]);
    const [productFormData, setProductFormData] = useState({});
    // const [showDialog, setShowDialog] = useState(false);
    // const [showErrorDialog, setShowErrorDialog] = useState(false);

    const categoryArray = category.split("/");
    const product = categoryArray.pop();
      
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
      
        const cancellable = document.getElementById("cancellable").value;
        const replaceable = document.getElementById("replaceable").value;
        const image1 = document.getElementById("image1").files[0];
        const image2 = document.getElementById("image2").files[0];
        const image3 = document.getElementById("image3").files[0];
        const image4 = document.getElementById("image4").files[0];
      
        // Create a new FormData object and append the input values
        const data = new FormData();
        // for (const [name, value] of Object.entries(productFormData)) {
        //     data.append(name, value);
        //   }
        
        data.append("Category", product);
        data.append("Cancellable", cancellable || ''); // append empty string if value is falsy
        data.append("Replaceable", replaceable || '');
        data.append("Image 1", image1 || '');
        data.append("Image 2", image2 || '');
        data.append("Image 3", image3 || '');
        data.append("Image 4", image4 || '');
        // for (const [name, value] of Object.entries(productFormData)) {
        //   if (!value ) {data.append(name, '');}
        //   else data.append(name, value);
        // }
        for (const [name, value] of Object.entries(productFormData)) {
          if (value !== undefined && value !== null) {
            data.append(name, value);
          }
          else data.append(name, '');
        }        

          // Convert images to base64 format
        const promises = [];
        if (image1) {
            const promise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(image1);
            });
            promises.push(promise);
        }
        if (image2) {
            const promise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(image2);
            });
            promises.push(promise);
        }
        if (image3) {
            const promise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(image3);
            });
            promises.push(promise);
        }
        if (image4) {
            const promise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(image4);
            });
            promises.push(promise);
        }

        Promise.all(promises).then((base64Images) => {
            // Append the base64-encoded images to the form data
            base64Images.forEach((base64Image, i) => {
            data.append(`Image ${i + 1}`, base64Image);
            });

        console.log(data);
      
        // Make a POST request to the server with the form data
        fetch("http://localhost:8000/api/submit-form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Object.fromEntries(data)),
            })
            .then((response) => {
                response.json()
            if (response.ok) {
                // Show the dialog box on successful submission
                // setShowDialog(true);  
                alert("Your Product has been added!");              
                // Reset the form inputs
                setProductFormData({});

              } else {
                // setShowErrorDialog(true);
                alert("Error submitting the form");  
                console.error('Error submitting the form');
              }
             } )
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
        });
        };
 

    useEffect(() => {
        // Make a request to localhost:8000/fields
        fetch('http://localhost:8000/api/catalog/info')
          .then(response => response.json())
          .then(data => {
            // Find the category you want to create a form for
            const categoryData = data.find(item => item.category === category);
    
            // Set the form data for the category
            setFormData(categoryData.fields);
          })
          .catch(error => console.error(error));
      }, [category]);

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductFormData({ ...productFormData, [name]: value });
      };

  return (
    <div className='product-form'>
    <h2>Add Product Details</h2>
    <h5>{category}</h5>
    <form className='product'>
      {formData.map(field => (
        <div key={field}>
          <label>{field}</label>
          <input type="text" name={field} value={formData[field]} onChange={handleInputChange}/>
        </div>
      ))}
      <label>Cancellable *</label>
      <select id="cancellable" name="cancellable" text="Cancellable"> 
          <option value="">-- Please select --</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label>Replaceable *</label>
      <select id="replaceable" name="replaceable" text="replaceable"> 
          <option value="">-- Please select --</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label htmlFor="images">Images:</label>
        <div className='images'>
        <div>
          <input type="file" id="image1" name="image1" accept="image/*" />
        </div>
        <div>
          <input type="file" id="image2" name="image2" accept="image/*" />
        </div>
        <div>
          <input type="file" id="image3" name="image3" accept="image/*" />
        </div>
        <div>
          <input type="file" id="image4" name="image4" accept="image/*" />
        </div>
      </div>
      <center><ButtonDark text="Submit" onClick={handleSubmit}/></center>
    </form>
    {/* {showDialog && (
        <div className="overlay">
          <div className="dialog-box">
            <p>Your Product has been added!</p>
            <button onClick={() => setShowDialog(false)}>Close</button>
          </div>
        </div>
      )}
      {showErrorDialog && (
        <div className="overlay">
          <div className="dialog-box">
            <p className='error'>Error submitting the form</p>
            <button onClick={() => setShowErrorDialog(false)}>Close</button>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default ProductForm;