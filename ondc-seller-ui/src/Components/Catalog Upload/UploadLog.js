import React, { useEffect, useState } from 'react';
import './UploadLog.css';

function UploadLog() {
  const [activeTab, setActiveTab] = useState('Bulk Uploads');
  const [bulkLogs, setBulkLogs] = useState([]);
  const [singleLogs, setSingleLogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/catalog/bulk')
      .then(response => response.json())
      .then(data => setBulkLogs(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/api/catalog/single')
      .then(response => response.json())
      .then(data => setSingleLogs(data))
      .catch(error => console.error(error));
  }, []);


  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTable = () => {
    if (activeTab === 'Bulk Uploads') {
      return (
        <table>
          <thead>
            <tr>
              <th>S.no.</th>
              <th>Category</th>
              <th>Filename</th>
              <th>Date Created</th>
              <th>Rows</th>
            </tr>
          </thead>
          <tbody>
        {bulkLogs.map(bulkLog => (
          <tr key={bulkLog.ID}>
           <td>{bulkLog['sno']}</td>
            <td>{bulkLog['category']}</td>
            <td>{bulkLog['filename']}</td>
            <td>{bulkLog['date_created']}</td>
            <td>{bulkLog['num_rows']}</td>
          </tr>
        ))}
      </tbody>
        </table>
      );
    } else {
      return (
        <table>
          <thead>
            <tr>
              <th>S.no.</th>
              <th>Category</th>
              <th>Product name</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
          {singleLogs.map(singleLog => (
          <tr key={singleLog.ID}>
           <td>{singleLog['sno']}</td>
            <td>{singleLog['category']}</td>
            <td>{singleLog['itemname']}</td>
            <td>{singleLog['date_created']}</td>
          </tr>
        ))}
          </tbody>
        </table>
      );
    }
  };

  return (
    <div className="UploadLog">
    <div className='tabs'>
      <div className={`tab ${activeTab === 'Bulk Uploads' ? 'active' : ''}`} 
      onClick={() => handleTabClick('Bulk Uploads')}>
        Bulk Uploads
      </div>
      <div className={`tab ${activeTab === 'Single Uploads' ? 'active' : ''}`}
      onClick={() => handleTabClick('Single Uploads')}>
        Single Uploads
        </div>
      </div>
      <div className="table-container">
      {renderTable()}
      </div>
    </div>
  );
}

export default UploadLog;