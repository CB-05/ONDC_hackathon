import React, { useState } from 'react';
import Home from '../Components/Home/Home';
import Navbar from '../Navigation bars/NavbarLogin';
import './Dashboard.css';
import CatUpload from '../Components/Catalog Upload/CatUpload';
import Catalog from '../Components/Catalog/Catalog';
import Analytics from '../Components/Analytics/Analytics';
import Order from '../Components/Order/Order';
import Storefront from '../Components/Storefront/Storefront';
import Inventory from '../Components/Inventory/Inventory';
import Payment from '../Components/Payment/Payment';
import Grievance from '../Components/Grievance/Grievance';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  // JSX code for dashboard content based on current tab
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (<Home />);
      case "catalog":
        return (<Catalog />); 
      case "catalog-upload":
        return (<CatUpload />);
      case "orders":
        return (<Order/>);
      case "analytics":
        return (<Analytics />);
      case "payment":
        return (<Payment/>);
      case "storefront":
        return (<Storefront />);
      case "grievance":
          return (<Grievance/>);
      case "inventory":
        return (<Inventory />);
      default:
        return (<Home />);
    }
  };

  return (
    
    <div>
    <Navbar/>
    <div className="dashboard">
       <div className="sidebar">
        <div className={`sidebar-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')}>
          Home
        </div>
        <div className={`sidebar-item ${activeTab === 'catalog' ? 'active' : ''}`} onClick={() => handleTabClick('catalog')}>
          Catalog
        </div>
        <div className={`sidebar-item ${activeTab === 'catalog-upload' ? 'active' : ''}`} onClick={() => handleTabClick('catalog-upload')}>
          Catalog Upload
        </div>
        <div className={`sidebar-item ${activeTab === 'storefront' ? 'active' : ''}`} onClick={() => handleTabClick('storefront')}>
          Storefront
        </div>
        <div className={`sidebar-item ${activeTab === 'inventory' ? 'active' : ''}`} onClick={() => handleTabClick('inventory')}>
          Inventory
        </div>  
        <div className={`sidebar-item ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => handleTabClick('orders')}>
          Orders
        </div>
        <div className={`sidebar-item ${activeTab === 'payment' ? 'active' : ''}`} onClick={() => handleTabClick('payment')}>
          Payment & Settlements
        </div> 
        <div className={`sidebar-item ${activeTab === 'grievance' ? 'active' : ''}`} onClick={() => handleTabClick('grievance')}>
          Grievance Management
        </div> 
        <div className={`sidebar-item ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => handleTabClick('analytics')}>
          Analytics
        </div> 
       </div> 
      <div className="content">
        {renderContent()}
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
