import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css";

function LoginForm() {
  // React States
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/auth')
      .then(response => response.json())
      .then(data => { setData(data); console.log(data);})
      .catch(error => console.log(error));
  }, []);

  const database = data;

  const errors = {
    email: "Invalid Username",
    pass: "Invalid Password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { email, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.email === email.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="email" name="email" placeholder="Enter Email" required />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" placeholder="Enter Password" required />
          {renderErrorMessage("pass")}
        </div>
        <br></br>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="LoginForm">
      <div className="login-form">
        <div className="title"> <center>SELLER DASHBOARD</center></div>
        {isSubmitted ?  navigate('/dashboard') : renderForm}
      </div>
    </div>
  );
}

export default LoginForm;