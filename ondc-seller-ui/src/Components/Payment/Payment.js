import React from 'react';
import './Payment.css';

function Payment() {

  return (
    <div className='payment'>
      <h1>Payment and Settlement Details</h1>
      <h4>View and Manage your payments and settlements here</h4>
      <table>
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>Status</th>
          <th>Amount</th>
          <th>Settlement Type</th>
          <th>Settlement Counterparty</th>
          <th>Timestamp</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>10001099</td>
            <td>Paid</td>
            <td>3899</td>
            <td>upi</td>
            <td>Buyer app</td>
            <td>02-10-2021 10:56</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10001098</td>
            <td>Not Paid</td>
            <td>899</td>
            <td>COD</td>
            <td>MyBuyerApp</td>
            <td>02-10-2021 09:51</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10001097</td>
            <td>Paid</td>
            <td>3599</td>
            <td>debit_card</td>
            <td>Buyer App Returns</td>
            <td>02-10-2021 09:07</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10001096</td>
            <td>Pending</td>
            <td>6599</td>
            <td>upi</td>
            <td>Buyer App Reprise</td>
            <td>02-10-2021 08:53</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10001095</td>
            <td>Paid</td>
            <td>499</td>
            <td>debit_card</td>
            <td>BuyerAppIsBack </td>
            <td>02-10-2021 07:56</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10001094</td>
            <td>Pending</td>
            <td>3899</td>
            <td>upi</td>
            <td>BuyerAppAgain</td>
            <td>02-10-2021 06:34</td>
            <td><button>Update</button></td>
        </tr>
        <tr>
            <td>10001093</td>
            <td>Not Paid</td>
            <td>3899</td>
            <td>COD</td>
            <td>BuyerAppSaysHi</td>
            <td>02-10-2021 05:56</td>
            <td><button>Update</button></td>
        </tr>
      </tbody>
    </table>
    
    </div>
  );
}

export default Payment;

