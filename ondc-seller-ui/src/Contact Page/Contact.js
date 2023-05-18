import React from 'react';
import Navbar from '../Navigation bars/NavbarLogin';
import './Contact.css';

function Contact() {
  return (
    
    <div>  
    <Navbar/>
    <div className='contact'>
      <h2>Contact Us:</h2>
      <p>
        <ul>
            <li>Rimi Jain</li>
            <li>Harnil Pandya</li>
            <li>Pankaj Tekade</li>            
            <li>Chandni Beniwal</li> 
            <li>Jidnyasa Badwaik</li>
            <li>Lawkesh Dhurwey</li>
            <li>Darshan Jagannath Alhate</li> 
            <li>Kailas Ramanujdas Chandak</li>
        </ul>
      </p>
    </div>
    </div>
  );
}

export default Contact;
