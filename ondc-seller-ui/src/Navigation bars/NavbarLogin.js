import React from 'react';
import './NavbarLogin.css';
import {Link} from 'react-router-dom'; 
// import handshake from "./handshake.png"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-heading">
        <Link  to='/'>
         CITI FUSION
        </Link>
        {/* <img src={handshake}/> */}
      </div>
      <div className="navbar-links">
        <h6 align="right"> 
          <Link to="/contact">
            Contact Us
          </Link>        
        </h6>
      </div>
    </div>
  );
}

export default Navbar;