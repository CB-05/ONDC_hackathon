import React from 'react';
import './Catalog.css';
import { useEffect, useState} from 'react';
import ButtonDark from '../../UI/Button/ButtonDark';
import ButtonLight from '../../UI/Button/ButtonLight';

function Catalog() {

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productInfo, setProductInfo] = useState({});
  // const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      fetch(`http://localhost:8000/api/catalog/${selectedProduct.ID}`)
        .then(response => response.json())
        .then(data => setProductInfo(data))
        .catch(error => console.error(error));
    }
  }, [selectedProduct]);
  

  function editProduct(product) {
    setSelectedProduct(product);
  }

  function cancel() {
    // Call API to save changes to the product
    setSelectedProduct(null);
  }

  useEffect(() => {
    fetch('http://localhost:8000/api/catalog')
      .then(response => response.json())
      .then(data => setProducts(data.reverse()))
      .catch(error => console.error(error));
  }, []);

  function deleteProduct(productId) {
    fetch(`http://localhost:8000/api/catalog/${productId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        alert("Failed to delete product. Please try again.");
        // throw new Error('Failed to delete product.');
      }
      else {
        alert("Your product has been deleted");
        // setShowDialog(true);
      }
      // Remove the product from the products state array
      setProducts(products.filter(product => product.ID !== productId));
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <div className='catalog'>
      <h1>Product Catalog</h1>
      <h4>Have a glimpse of your products here</h4>
      {selectedProduct && (
        <div className='edit-product'>
          <h2>Edit Product</h2>
          {Object.entries(productInfo).map(([key, value]) => (
      <div key={key}>
        <label htmlFor={key}>{key}</label>
        <input id={key} type="text" defaultValue={value} />
          
        </div>
      ))}
      <div className='btns'>
      <ButtonDark text="Save" />
      <ButtonLight text="Cancel" onClick={cancel} />
      </div>
    </div>
      )}
      <table className='cat-products'>
      <thead>
        <tr>
          <th>Image</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Date Uploaded</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.ID}>
            <td>
            <div className="thumbnail">
                <img src={product["Image 1"]} alt={product['Item Name']} />
            </div>
            </td>
            <td>{product['Item Name']}</td>
            <td>{product['Selling Price']}</td>
            <td>{product['Category']}</td>
            <td>{product['Timestamp']}</td>
            <td>
              <button onClick={() => editProduct(product)}>Edit</button> <br></br>
              <button onClick={() => deleteProduct(product.ID)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
    </div>
  );
}

export default Catalog;

