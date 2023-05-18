import React from 'react';
import ButtonDark from '../../UI/Button/ButtonDark';
import ButtonLight from '../../UI/Button/ButtonLight';
import './Storefront.css';

function Storefront() {

  return (
    <div className='storefront'>
      <h1>Storefront Details</h1>
      <h4>Manage your Storefront and Warehouse Details here</h4>
      <div className='header'>
      <ButtonDark text="Add Store"/>
      <ButtonLight text="Remove Store" />
      </div>
      <table className='store'>
      <thead>
        <tr>
          <th>StoreID</th>
          <th>Address</th>
          <th>Pincode</th>
          <th>City</th>
          <th>Manager Name</th>
          <th>Manager Contact</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>1001</td>
            <td>56, Boat Warehouse</td>
            <td>560003</td>
            <td>Bengaluru</td>
            <td>Srinath B.</td>
            <td>6786787878</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>1002</td>
            <td>Boat Store, Phoenix mall</td>
            <td>411014</td>
            <td>Pune</td>
            <td>Ajinkya Pandey</td>
            <td>7867878786</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>1003</td>
            <td>Boat Warehouse, Karol Bagh</td>
            <td>110001</td>
            <td>Delhi</td>
            <td>Adarsh Chowdhary</td>
            <td>8678787854</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>1005</td>
            <td>Boat Showroom, Jawhar Nagar</td>
            <td>302039</td>
            <td>Jaipur</td>
            <td>Neeta Agarwal</td>
            <td>9078676789</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>1006</td>
            <td>89, Boat Store</td>
            <td>380003</td>
            <td>Ahmedabad</td>
            <td>Aman Jain</td>
            <td>8097809676</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>1007</td>
            <td>Boat Showroom, Axis Mall</td>
            <td>700003</td>
            <td>Kolkata</td>
            <td>Anand Sharma</td>
            <td>6543678956</td>
            <td><button>Update</button></td>
        </tr>
      </tbody>
    </table>
    
    </div>
  );
}

export default Storefront;

