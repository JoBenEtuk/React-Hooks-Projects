import React from 'react';

const Categories = ({ filter, items }) => {
  return (
    <div className='btn-container'>
      {items.map((category, index) => {
        return <button type="button" key={index} className="filter-btn" onClick={() => filter(category)}>
          {category}
        </button>
      })}
    </div>
  )
};

export default Categories;
