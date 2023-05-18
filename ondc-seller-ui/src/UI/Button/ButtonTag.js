import React from 'react';
import './ButtonTag.css';

const ButtonDark= ({ text, onClick }) => {
  return (
    <button className='button-tag' onClick={onClick}>{text}</button>
  );
};

export default ButtonDark;
