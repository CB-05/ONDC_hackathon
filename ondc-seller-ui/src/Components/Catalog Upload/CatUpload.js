import React, {useState, useEffect} from 'react';
import './CatUpload.css';
import ButtonLight from '../../UI/Button/ButtonLight';
import ButtonDark from '../../UI/Button/ButtonDark';
import UploadLog from './UploadLog';
import BulkUpload from './BulkUpload';
import SingleUpload from './SingleUpload';


  const CatUpload = () => {

    const [showcatalogPage, setShowcatalogPage] = useState("welcome");
    const [bulkRecords, setBulkRecords] = useState(0);
    const [singleRecords, setSingleRecords] = useState(0);
    const totalRecords = singleRecords + bulkRecords;

    useEffect(() => {
      fetch("http://localhost:8000/api/catalog/bulk")
        .then((response) => response.json())
        .then((data) => {
          const count = data.length;
          setBulkRecords(count);
        })
        .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
      fetch("http://localhost:8000/api/catalog/single")
        .then((response) => response.json())
        .then((data) => {
          const count = data.length;
          setSingleRecords(count);
        })
        .catch((error) => console.error(error));
    }, []);

    const handleBulkUploadClick = () => {
      setShowcatalogPage("bulk");
    };

    const handleSingleUploadClick = () => {
      setShowcatalogPage("single");
    };

    const renderContent = () => {
      switch (showcatalogPage) {
        case "bulk":
          return (<BulkUpload />);
        case "single":
          return (<SingleUpload/>); 
        case "welcome":
          return (<div><h1>Catalog Uploads</h1>
          <h4>Have unique products to sell? Add them here</h4>
          <div className='upload-btn'>
            <ButtonDark text="Add Catalog in Bulk" onClick={handleBulkUploadClick}/>
            <ButtonLight text="Add Single Product" onClick={handleSingleUploadClick}/>
          </div>
          <div className= 'records'>
          <table>
          <tbody>
            <tr>
              <th>{totalRecords}</th>
              <th>{bulkRecords}</th>
              <th>{singleRecords}</th>
            </tr>
            <tr>
              <td>Total Uploads Done</td>
              <td>Using Bulk Uploads</td>
              <td>Using Single Uploads</td>
            </tr>
          </tbody>
        </table>
          </div>
          <UploadLog/></div>); }}


  return (
    <div className='cat-upload'>
      {renderContent()}
    </div>
  );
}

export default CatUpload;