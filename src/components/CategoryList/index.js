import React from 'react';

import Category from '../Category/index';
import Loading from '../Utils/Loading';

import './style.scss';

function CategoryList({ categories, isLoading, loadCategory }) {

  return (
    <>
        <h2 className='category-title'>Categories</h2>
        <div className='category-list'>
          {isLoading && <Loading />}
          { Object.keys(categories).map((category) => (
            <Category key={category} details={categories[category]} loadCategory={loadCategory} />
          ))}
        </div>
      </>
  );
}

export default CategoryList;