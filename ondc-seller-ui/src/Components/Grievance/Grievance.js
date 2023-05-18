import React from 'react';
import './Grievance.css';

function Grievance() {

  return (
    <div className='grievance'>
      <h1>Grievance Management</h1>
      <h4>Solve your Customer Grievances here</h4>
      <table>
      <thead>
        <tr>
          <th>Ticket ID</th>
          <th>Issue</th>
          <th>Assigned Representative</th>
          <th>Status</th>
          <th>Timestamp</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>10001069</td>
            <td>Payment not issued for ....</td>
            <td>Meghna Jain</td>
            <td>Open</td>
            <td>02-10-2021 10:55</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10001068</td>
            <td>Item not Delivered at....</td>
            <td>Meghna Jain</td>
            <td>Open</td>
            <td>02-10-2021 08:55</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10001067</td>
            <td>Cancellation request for product....</td>
            <td>Arun Prajapati</td>
            <td>Closed</td>
            <td>02-10-2021 05:25</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10001066</td>
            <td>Payment not issued for ....</td>
            <td>Jayant Nagpal</td>
            <td>In Progress</td>
            <td>02-10-2021 04:52</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10001069</td>
            <td>Product quality is very....</td>
            <td>Arihant Niranjan</td>
            <td>Closed</td>
            <td>02-10-2021 04:04</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10001069</td>
            <td>Payment deducted but order....</td>
            <td>Ranveer Agarwal</td>
            <td>Closed</td>
            <td>02-10-2021 03:51</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10001069</td>
            <td>Payment not issued for ....</td>
            <td>Meghna Jain</td>
            <td>Open</td>
            <td>02-10-2021 02:55</td>
            <td><button>Update</button></td>
        </tr>
      </tbody>
    </table>
    
    </div>
  );
}

export default Grievance;

