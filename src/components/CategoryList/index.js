import React from 'react';

import Category from '../Category/index';

import './style.scss';

function CategoryList({ categories }) {

  return (
    <div className='category-list'>
      { categories.map((cat) => (
        <Category key={cat.slug} slug={cat.slug} />
      )) }
    </div>
  );
}

export default CategoryList;