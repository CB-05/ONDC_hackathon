import React from 'react';
import { Routes } from 'react-router-dom';
import { BrowserRouter, Route}  from 'react-router-dom';
import Contact from './Contact Page/Contact';
import WhyONDC from './Why ONDC/WhyONDC';
import Dashboard from './Dashboard/Dashboard';
import SellerLogin from './Seller Login/SellerLogin';
import './index.css';
import RegistrationForm from './Registration Form/RegistrationForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={SellerLogin} />
      <Route path="/contact" Component={Contact} />
      <Route path="/benefits" Component={WhyONDC} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/registration" Component={RegistrationForm} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
