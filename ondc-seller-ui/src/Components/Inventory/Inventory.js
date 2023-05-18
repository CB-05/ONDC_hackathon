import React from 'react';
import ButtonDark from '../../UI/Button/ButtonDark';
import ButtonLight from '../../UI/Button/ButtonLight';
import './Inventory.css';

function Inventory() {

  return (
    <div className='inventory'>
      <h1>Inventory Details</h1>
      <h4>Manage your Product Inventory here</h4>
      <div className='header'>
      <ButtonDark text="Add Inventory"/>
      <ButtonLight text="Remove Inventory" />
      </div>
      <table className='stock'>
      <thead>
        <tr>
          <th>ProductID</th>
          <th>Category</th>
          <th>ProductName</th>
          <th>StoreID</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>10001</td>
            <td>Wireless Buds</td>
            <td>Airdopes 131</td>
            <td>1003</td>
            <td>456</td>
            <td>999</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10002</td>
            <td>Earphones</td>
            <td>Rockerz 131</td>
            <td>1005</td>
            <td>678</td>
            <td>699</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10003</td>
            <td>Smartwatch</td>
            <td>Wave 345</td>
            <td>1007</td>
            <td>788</td>
            <td>2999</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10004</td>
            <td>Speakers</td>
            <td>Boat Speakers 67T</td>
            <td>1001</td>
            <td>500</td>
            <td>3999</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10005</td>
            <td>Cables</td>
            <td>Micro USB 55</td>
            <td>1002</td>
            <td>1198</td>
            <td>199</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10006</td>
            <td>Adapters</td>
            <td>Boat Adapter</td>
            <td>1008</td>
            <td>458</td>
            <td>599</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10007</td>
            <td>Power banks</td>
            <td>Power Bank 78GD</td>
            <td>1004</td>
            <td>877</td>
            <td>2599</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10008</td>
            <td>Trimmers</td>
            <td>Trimmer 87Y</td>
            <td>1006</td>
            <td>345</td>
            <td>1599</td>
            <td><button>Update</button></td>
        </tr>
      </tbody>
    </table>
    
    </div>
  );
}

export default Inventory;

