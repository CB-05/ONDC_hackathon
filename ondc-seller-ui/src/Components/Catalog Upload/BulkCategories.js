import React, { useState } from 'react';
import categoriesData from '../../Constants/Categories.json';
import "./BulkCategories.css";
import ButtonDark from '../../UI/Button/ButtonDark';
import UploadFile from './UploadFile';

function BulkCategories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSub1category, setSelectedSub1category] = useState(null);
  const [selectedSub2category, setSelectedSub2category] = useState(null);
  const [selectedCategory1String, setSelectedCategory1String] = useState('');
  const [selectedCategory2String, setSelectedCategory2String] = useState('');
  const [selectedCategory3String, setSelectedCategory3String] = useState('');
  const [selectedCategory4String, setSelectedCategory4String] = useState('');


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setSelectedSub1category (null);
    setSelectedSub2category (null);
    setSelectedCategory1String (`${category.name}/`);
    setSelectedCategory2String ('');
    setSelectedCategory3String ('');
    setSelectedCategory4String ('');
  }
  
  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setSelectedSub1category (null);
    setSelectedSub2category (null);
    setSelectedCategory2String (`${subcategory.name}/`);
    setSelectedCategory3String ('');
    setSelectedCategory4String ('');
  }

  const handleSub1categoryClick = (subcategory) => {
    setSelectedSub1category(subcategory);
    setSelectedSub2category (null);
    setSelectedCategory3String (`${subcategory.name}/`);
    setSelectedCategory4String ('');
  }

  const handleSub2categoryClick = (subcategory) => {
    setSelectedSub2category(subcategory);
    setSelectedCategory4String (`${subcategory.name}`);
  }

  const selectedCategoryString = selectedCategory1String + selectedCategory2String + selectedCategory3String + selectedCategory4String;


  return (
    <div>
    <h5>{selectedCategoryString}</h5>
    <div className='categories'>
      <div className='subcategories'>
      <ul>
        {categoriesData.categories.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            {category.name}
          </li>
        ))}
        <li>Fashion</li>
        <li>Home & Decor</li>
        <li>Electrical Appliances</li>
        <li>Beauty & Personal Care</li>
        <li>Food & Beverages</li>
        <li>Grocery</li>
      </ul>
      </div>
      {selectedCategory && (
        <div className='subcategories'>
          <ul>
            {selectedCategory.subcategories.map((subcategory) => (
              <li key={subcategory.id} onClick={() => handleSubcategoryClick(subcategory)}>
                {subcategory.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedSubcategory && (
        <div className='subcategories'>
          <ul>
          {selectedSubcategory.subcategories.map((subcategory) => (
              <li key={subcategory.id} onClick={() => handleSub1categoryClick(subcategory)}>
                {subcategory.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedSub1category && (
        <div className='subcategories'>
          <ul>
          {selectedSub1category.subcategories.map((subcategory) => (
              <li key={subcategory.id} onClick={() => handleSub2categoryClick(subcategory)}>
                {subcategory.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedSub2category && (
        <div className='templates'>
          <ul>
            <li><UploadFile category={selectedCategory4String}/></li>
            <li>Don't have {selectedCategory4String} template? <br></br><br></br>
            <a href={require(`../../Assets/${selectedCategoryString}.xlsm`)} download={selectedCategory4String}>
            <ButtonDark text="Download Template"/>
            </a>
            </li>
            <p>Catalog Uploading Instructions</p>
          </ul>
        </div>
      )}
    </div>
    </div>
  );
}

export default BulkCategories;


