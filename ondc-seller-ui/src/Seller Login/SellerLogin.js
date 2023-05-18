import React from 'react';
import LoginForm from '../Login Form/LoginForm';
import Navbar from '../Navigation bars/NavbarLogin'; 
import { Link } from 'react-router-dom';
import './SellerLogin.css';

function SellerLogin() {
  return (
    <div>
      <Navbar />
      <LoginForm />
      <div className='loginpage'>        
        <Link to="/benefits">
        <div className="loginpage-links">
          Why ONDC?
        </div>
        </Link>        
        <h4> Not Registered? <br></br><Link to="/registration">Get Started with ONDC here</Link></h4>
      </div>
    </div>
  );
}

export default SellerLogin;
