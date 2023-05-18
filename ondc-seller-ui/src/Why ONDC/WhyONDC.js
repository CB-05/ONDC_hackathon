import React from 'react';
import Navbar from '../Navigation bars/NavbarLogin';
import './WhyONDC.css';

function WhyONDC() {
  return (    
    <div>  
    <Navbar/>
    <div className='benefits'>
      <h2>Why ONDC?</h2>
      <p>
        <ul>
            <li>ONDC is a collaborative platform that connects buyers and sellers across various e-commerce platforms, marketplaces, and online retailers.</li>
            <br></br>
            <li>By joining ONDC as sellers , Sellers will get  access to a wider customer base. 
            ONDC provides a platform that eliminates the need for multiple integrations and allows sellers 
            to manage their orders, inventory, and payments from a single interface.</li>
            <br></br>
            <li>ONDC provides sellers with tools and services to help them manage their business more 
            efficiently. These include analytics and insights to track sales and inventory, automated 
            order processing, and streamlined payment processing in turn improving the efficiency and 
            productivity,  and providing a much better customer experience.</li>
        </ul>
      </p>
      </div>
    </div>
  );
}

export default WhyONDC;
