import React from 'react';
import './Home.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const result = await axios.get('http://localhost:8000/api/users');
      const user = result.data.find(u => u.userid === '00002');
      setUser(user);
    }
    fetchUser();
  }, [])


  return (
    <div className='home'>
      <h1>Welcome to ONDC!</h1>
      <h4>Manage your business profile here</h4>
      <div className='user'>
      <div className='userdata'>
        <label>Company Name:</label>
        <input type="text" id="companyName" name="companyName" value={user.companyName} />
        <label>Primary Contact Name:</label>
        <input type="text" id="primaryContactName" name="primaryContactName" value={user.primaryContactName} />
        <label>Business Email:</label>
        <input type="text" id="businessEmail" name="businessEmail" value={user.businessEmail} />
        <label>Operations Contact Number:</label>
        <input type="text" id="operationsContactNumber" name="operationsContactNumber" value={user.operationsContactNumber} />
        <label>Domain:</label>
        <input type="text" id="domain" name="domain" value={user.domain} />
        <label>Bank Account Number:</label>
        <input type="text" id="bankAccountNumber" name="bankAccountNumber" value={user.bankAccountNumber} />
    </div>
    <div className='userdata'>
        <label>Legal Company Name:</label>
        <input type="text" id="legalCompanyName" name="legalCompanyName" value={user.legalCompanyName} />
        <label>Primary Contact Email:</label>
        <input type="text" id="primaryContactEmail" name="primaryContactEmail" value={user.primaryContactEmail} />
        <label>Business Contact Number:</label>
        <input type="text" id="businessContactNumber" name="businessContactNumber" value={user.businessContactNumber} />
        <label>Operations Email:</label>
        <input type="text" id="operationsEmail" name="operationsEmail" value={user.operationsEmail} />
        <label>Cities Delivering To:</label>
        <input type="text" id="citiesDeliveringTo" name="citiesDeliveringTo" value={user.citiesDeliveringTo} />
        <label>Company PAN number: </label>
        <input type="text" id="companyPANNumber" name="companyPANNumber" value={user.companyPANNumber} />
    </div>
    <div className='userdata'>
        <label>Country:</label>
        <input type="text" id="country" name="country" value={user.country} />
        <label>Primary Contact Number:</label>
        <input type="text" id="primaryContactNumber" name="primaryContactNumber" value={user.primaryContactNumber} />
        <label>Primary Business Address:</label>
        <input type="text" id="primaryBusinessAddress" name="primaryBusinessAddress" value={user.primaryBusinessAddress} />
        <label>Operations Address:</label>
        <input type="text" id="operationsAddress" name="operationsAddress" value={user.operationsAddress} />
        <label>Pincode:</label>
        <input type="text" id="pincode" name="pincode" value={user.pincode} />
        <label>Company GST Number:</label>
        <input type="text" id="companyGSTNumber" name="companyGSTNumber" value={user.companyGSTNumber} />
    </div>
    </div>
    </div>
  );
}

export default Home;