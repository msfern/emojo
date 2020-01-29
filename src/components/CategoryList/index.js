import React from 'react';

import Category from '../Category/index';

import './style.scss';

function CategoryList({ categories }) {

  return (
    <>
      <h2 className='category-title'>Categories</h2>
      <div className='category-list'>
        { Object.keys(categories).map((category) => (
          <Category key={category} details={categories[category]} />
        ))}
      </div>
    </>
  );
}

export default CategoryList;