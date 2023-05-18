import React from 'react';
import './ButtonLight.css';

const ButtonLight = ({ text, onClick }) => {
  return (
    <button className='button-light' onClick={onClick}>{text}</button>
  );
};

export default ButtonLight;
