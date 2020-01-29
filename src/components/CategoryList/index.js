import React from 'react';

import Category from '../Category/index';

import './style.scss';

function CategoryList({ categories }) {

  return (
    <div className='category-list'>
      { Object.keys(categories).map((category) => (
        <Category key={category} details={categories[category]} />
      ))}
    </div>
  );
}

export default CategoryList;