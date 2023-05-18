import React, { useState } from 'react';
import Navbar from '../Navigation bars/NavbarLogin';
import './RegistrationForm.css';
import ButtonTag from '../UI/Button/ButtonTag';
import ButtonLight from '../UI/Button/ButtonLight';
import {Link} from 'react-router-dom'; 

function RegistrationForm() {
  const [activeTab, setActiveTab] = useState('BasicDetails');

  const [formData, setFormData] = useState({
    companyName: '',
    legalCompanyName: '',
    businessContactNumber: '',
    businessEmail: '',
    primaryBusinessAddress: '',
    country: '',
    domain: '',
    citiesDeliveringTo: '',
    bankAccountNumber: '',
    primaryContactName: '',
    primaryContactNumber: '',
    primaryContactEmail: '',
    operationsContactNumber: '',
    operationsEmail: '',
    operationsAddress: '',
    pincode: '',
    companyPANNumber:'',
    companyGSTNumber:'',
    businessLogoUpload: '',
    panUpload:'',
    gstUpload:'',
    signatureUpload:''
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextClick = () => {
    setActiveTab('BusinessDetails');
  };

  const handleFinalClick = () => {
    setActiveTab('KYCDetails');
  };

  const handleBackClick = () => {
    setActiveTab('BasicDetails');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/reg-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Your Registration is completed. You will be contacted soon for further procedure.");
        // formData.reset();
        setActiveTab('BasicDetails');
      } 
      else {
        alert("Form submission failed.");
      }
    } catch (error) {
      console.error(error);
      // alert("Form submission failed.");
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "BasicDetails":
        return (
          <form className='basicdetails'>
            <div className="form-column">
              <label htmlFor="companyName">Company Name:</label>
              <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleInputChange} />
              <label htmlFor="legalCompanyName">Legal Company Name:</label>
              <input type="text" id="legalCompanyName" name="legalCompanyName" value={formData.legalCompanyName} onChange={handleInputChange} />
            </div>
            <div className='form-column'>
            <label htmlFor="businessContactNumber">Business Contact Number:</label>
              <input type="text" id="businessContactNumber" name="businessContactNumber" value={formData.businessContactNumber} onChange={handleInputChange} />
              <label htmlFor="businessEmail">Business Email:</label>
              <input type="text" id="businessEmail" name="businessEmail" value={formData.businessEmail} onChange={handleInputChange} />
            </div>
            <div className="form-column">
              <label htmlFor="primaryBusinessAddress">Primary Business Address:</label>
              <input type="text" id="primaryBusinessAddress" name="primaryBusinessAddress" value={formData.primaryBusinessAddress} onChange={handleInputChange} />
              <label htmlFor="country">Country:</label>
              <input type="text" id="country" name="country" value={formData.country} onChange={handleInputChange} />
            </div>
            <div className="form-column">  
              <label htmlFor="domain">Domain:</label>
              <select id="domain" name="domain" value={formData.domain} onChange={handleInputChange} >
                <option value="">-- Select Domain --</option>
                <option value="retail">Retail</option>
                <option value="logistics">Logistics</option>
              </select>
              <label htmlFor="citiesDeliveringTo">Cities Delivering To:</label>
              <select id="citiesDeliveringTo" name="citiesDeliveringTo" value={formData.citiesDeliveringTo} onChange={handleInputChange} >
                <option value="">-- Select Cities --</option>
                <option value="All">All</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Pune">Pune</option>
                <option value="Delhi">Delhi</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
              </select>
            </div>
            <div className='reg-buttons'>
            <Link  to='/'><ButtonLight text="Cancel"/></Link>
            <ButtonTag onClick={handleNextClick} text="Next" />
            </div>
          </form>
        );
      case "BusinessDetails":
        return (
        <form className='businessdetails'>
        <div className="form-column">
          <label htmlFor="bankAccountNumber">Bank Account Number:</label>
          <input type="text" id="bankAccountNumber" name="bankAccountNumber" value={formData.bankAccountNumber} onChange={handleInputChange} />
          <label htmlFor="operationsContactNumber">Operations Contact Number:</label>
          <input type="text" id="operationsContactNumber" name="operationsContactNumber" value={formData.operationsContactNumber} onChange={handleInputChange} />
        </div>
        <div className='form-column'>
        <label htmlFor="primaryContactName">Primary Contact Name:</label>
          <input type="text" id="primaryContactName" name="primaryContactName" value={formData.primaryContactName} onChange={handleInputChange} />
          <label htmlFor="operationsEmail">Operations Email:</label>
          <input type="text" id="operationsEmail" name="operationsEmail" value={formData.operationsEmail} onChange={handleInputChange} />
        </div>
        <div className="form-column">
          <label htmlFor="primaryContactNumber">Primary Contact Number:</label>
          <input type="text" id="primaryContactNumber" name="primaryContactNumber" value={formData.primaryContactNumber} onChange={handleInputChange} />
          <label htmlFor="operationsAddress">Operations Address:</label>
          <input type="text" id="operationsAddress" name="operationsAddress" value={formData.operationsAddress} onChange={handleInputChange} />
        </div>
        <div className="form-column">
          <label htmlFor="primaryContactEmail">Primary Contact Email:</label>
          <input type="text" id="primaryContactEmail" name="primaryContactEmail" value={formData.primaryContactEmail} onChange={handleInputChange} />
          <label htmlFor="pincode">Pincode:</label>
          <input type="text" id="pincode" name="pincode" value={formData.pincode} maxlegth="6" onChange={handleInputChange} />
        </div>
        <div className='reg-buttons'>
        <Link  to='/'><ButtonLight text="Cancel"/></Link>
        <ButtonLight text="Back" onClick={handleBackClick} />
        <ButtonTag onClick={handleFinalClick} text="Next" />
        </div>
      </form>);
      case "KYCDetails":
        return (
          <form className='kycdetails'>
          <div className="form-column">
          <label htmlFor="companyPANNumber">Company PAN Number:</label>
          <input type="text" id="companyPANNumber" name="companyPANNumber" value={formData.companyPANNumber} onChange={handleInputChange} />
          <label htmlFor="companyGSTNumber">Company GST Number:</label>
          <input type="text" id="companyGSTNumber" name="companyGSTNumber" value={formData.companyGSTNumber} onChange={handleInputChange} />
        </div>
        <div className='form-column'>
        <label htmlFor="businessLogoUpload">Business Logo Upload:</label>
          <input type="file" id="businessLogoUpload" name="businessLogoUpload" value={formData.businessLogoUpload} onChange={handleInputChange} />
          <label htmlFor="panUpload">PAN Upload:</label>
          <input type="file" id="panUpload" name="panUpload" value={formData.panUpload} onChange={handleInputChange} />
        </div>
        <div className="form-column">
          <label htmlFor="gstUpload">GST Upload:</label>
          <input type="file" id="gstUpload" name="gstUpload" value={formData.gstUpload} onChange={handleInputChange} />
          <label htmlFor="signatureUpload">Signature Upload:</label>
          <input type="file" id="signatureUpload" name="signatureUpload" value={formData.signatureUpload} onChange={handleInputChange} />
        </div>
        <div className='reg-buttons'>
        <Link  to='/'><ButtonLight text="Cancel"/></Link>
        <ButtonLight text="Back" onClick={handleNextClick} />
        <ButtonTag text="Submit" onClick={handleSubmit} />
        </div>
        </form>
        );
      }
      };

  return (
    
    <div className='registration'>
    <Navbar/>
    <center>
    <h3>Fill in the form with accurate and appropriate information to start your journey with ONDC as a Seller</h3>
    <div className="regform">
       <div className="topbar">
        <div className={`topbar-item ${activeTab === 'BasicDetails' ? 'active' : ''}`} onClick={() => handleTabClick('BasicDetails')}>
          Basic Details
        </div>
        <div className={`topbar-item ${activeTab === 'BusinessDetails' ? 'active' : ''}`} onClick={() => handleTabClick('BusinessDetails')}>
          Business Details
        </div>
        <div className={`topbar-item ${activeTab === 'KYCDetails' ? 'active' : ''}`} onClick={() => handleTabClick('KYCDetails')}>
          KYC Details
        </div>
       </div> 
      <div className="form-content">
        {renderContent()}
      </div>
      </div>
      </center>
    </div>
  );
}

export default RegistrationForm;
