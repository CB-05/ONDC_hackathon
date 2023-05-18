import React, {useState} from 'react';
import ButtonLight from '../../UI/Button/ButtonLight';
import CatUpload from './CatUpload';
import "./BulkUpload.css";
import BulkCategories from './BulkCategories';

  const BulkUpload = () => {

    const [showcatalog, setShowcatalog] = useState(false);

    const handleClick = () => {
      setShowcatalog(true);
    };

  return (
    <div>
    { !showcatalog ? (
    <div className='bulk-upload'>
      <h1>Bulk Catalog Uploads</h1>
      <h4>Have unique products to sell? Add them here</h4>
      <h3> Select your Category to download Excel template for uploading catalogs</h3>
      <BulkCategories />
      <div className='discard-btn'>
        <ButtonLight text="Discard Catalog" onClick={handleClick}/>
      </div>
    </div>) : (<CatUpload/>)}
    </div>
  );
}

export default BulkUpload;