import React, {useState} from 'react';
import './SingleUpload.css';
import ButtonLight from '../../UI/Button/ButtonLight';
import CatUpload from './CatUpload';
import SingleCategories from './SingleCategories';

  const SingleUpload = () => {

    const [showcatalog, setShowcatalog] = useState(false);

    const handleClick = () => {
      setShowcatalog(true);
    };

  return (
    <div>
    { !showcatalog ? (
    <div className='single-upload'>
      <h1>Single Catalog Uploads</h1>
      <h4>Have unique products to sell? Add them here</h4>
      <SingleCategories/>
      <div className='discard-btn'>
        <ButtonLight text="Discard Catalog" onClick={handleClick}/>
      </div>
    </div>) : (<CatUpload/>)}
    </div>
  );
}

export default SingleUpload;