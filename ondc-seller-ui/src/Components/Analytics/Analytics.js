import React, {useState} from 'react';
import './Analytics.css';

function Analytics() {

    const [selectedOption, setSelectedOption] = useState('statewise-products');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    }

  return (
    <div className="analytics">
        <h1>Order Analytics</h1>
        <h4>Analyze Order Reports and Sales Trends</h4>
        <div className="sale-numbers">
            <div className="number-card">
                <h3>1000</h3>
                <h5>Total Orders Placed</h5>
            </div>
            <div className="number-card">
                <h3>5.09L</h3>
                <h5>Current Month Sales</h5>
            </div>
            <div className="number-card">
                <h3>20.68L</h3>
                <h5>Total Sales</h5>
            </div>
            <div className="number-card">
                <h3>18</h3>
                <h5>Cities Covered</h5>
            </div>           
            <div className="number-card">
                <h3>458</h3>
                <h5>Customers Served</h5>
            </div>
            </div>
    <div className='reports'>
    <div className='dropdwn'>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="statewise-products">Statewise Product Penetration</option>
        <option value="productwise-revenue">Productwise Revenue</option>
        <option value="order-status-analysis">Order Status Analysis</option>
        <option value="productwise-ratings">Productwise Ratings</option>
        <option value="monthly-analysis">Monthly Analysis</option>
      </select>
      </div>
      {selectedOption && (
        <div>
          {selectedOption === 'statewise-products' && <iframe src="./Product_Penetration_by_States.html" />}
          {selectedOption === 'productwise-revenue' && <iframe src="./productwise-revenue.html" />}
          {selectedOption === 'order-status-analysis' && <iframe src="./order-status-analysis.html" />}
          {selectedOption === 'productwise-ratings' && <iframe src="./productwise-rating.html" />}
          {selectedOption === 'monthly-analysis' && <iframe src="./Monthly_Analysis.html" />}
        </div>
      )}
    </div>
      </div>
  );
}

export default Analytics;


