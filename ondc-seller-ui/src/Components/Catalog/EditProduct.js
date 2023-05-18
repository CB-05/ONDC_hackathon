import React, {useState, useEffect} from 'react';
import './EditProduct.css';


  const EditProduct = ({product}) => {
    const [productInfo, setProductInfo] = useState({});

    function saveProduct() {
        // Call API to save changes to the product

      }

    useEffect(() => {
          fetch(`http://localhost:8000/api/catalog/${product.ID}`)
            .then(response => response.json())
            .then(data => setProductInfo(data))
            .catch(error => console.error(error));
      }, [product]);

  return (
    <div>
        <div className='edit-product'>
          <h2>Edit Product</h2>
          {Object.keys(productInfo).map(key => (
        <div key={key}>
          <label htmlFor={key}>{key}</label>
          <input id={key} type="text" defaultValue={productInfo[key]} />
        </div>
      ))}
      <button>Save</button>
    </div>
    </div>
  );
}

export default EditProduct;