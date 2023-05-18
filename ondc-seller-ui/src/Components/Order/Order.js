import React from 'react';
import './Order.css';

function Order() {

  return (
    <div className='order'>
      <h1>Order Details</h1>
      <h4>View and Manage your orders here</h4>
      <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Product Name</th>
          <th>Amount</th>
          <th>Created at</th>
          <th>Payment Mode</th>
          <th>State</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>100010</td>
            <td>Boat Speakers Stone 190DC</td>
            <td>3899</td>
            <td>02-10-2021 10:56</td>
            <td>credit_card</td>
            <td>Pending</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>100009</td>
            <td>Boat Earphones </td>
            <td>899</td>
            <td>02-10-2021 9:59</td>
            <td>UPI</td>
            <td>Cancelled</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>100008</td>
            <td>Boat Headphones</td>
            <td>5999</td>
            <td>02-10-2021 08:13</td>
            <td>debit_card</td>
            <td>Pending</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>100007</td>
            <td>Connector</td>
            <td>399</td>
            <td>01-10-2021 16:46</td>
            <td>UPI</td>
            <td>Delivered</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>100006</td>
            <td>Boat SmartWatch Wave 2100</td>
            <td>6299</td>
            <td>01-10-2021 10:56</td>
            <td>credit_card</td>
            <td>Delivered</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>100005</td>
            <td>Adapter</td>
            <td>399</td>
            <td>01-10-2021 06:46</td>
            <td>UPI</td>
            <td>Delivered</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>100004</td>
            <td>Trimmer Misfit 150</td>
            <td>2499</td>
            <td>02-10-2021 10:56</td>
            <td>credit_card</td>
            <td>Delivered</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>100003</td>
            <td>Trimmer Misfit 200</td>
            <td>2499</td>
            <td>02-10-2021 10:56</td>
            <td>credit_card</td>
            <td>Cancelled</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>100002</td>
            <td>Adapter</td>
            <td>399</td>
            <td>01-10-2021 06:46</td>
            <td>UPI</td>
            <td>Delivered</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>100001</td>
            <td>Dell Laptop </td>
            <td>56899</td>
            <td>02-10-2021 10:56</td>
            <td>credit_card</td>
            <td>Returned</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>100000</td>
            <td>Dell Laptop </td>
            <td>56899</td>
            <td>02-10-2021 10:56</td>
            <td>credit_card</td>
            <td>Returned</td>
            <td><button>Update</button></td>
        </tr>
      </tbody>
    </table>
    
    </div>
  );
}

export default Order;

