import React from 'react';
import './ButtonDark.css';

const ButtonDark= ({ text, onClick }) => {
  return (
    <button className='button-dark' onClick={onClick}>{text}</button>
  );
};

export default ButtonDark;
