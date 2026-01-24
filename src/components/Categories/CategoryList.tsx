import React from 'react';

import Category from './Category';

import './CategoryList.module.css';
import { CategoryList as CategoryListType } from '@/types/Category';

const CategoryList: React.FC<CategoryListType> = ({
  categories,
  isLoading,
  loadCategory,
}) => {
  return (
    <>
      <h2 className="category-title">Categories</h2>
      <div className="category-list">
        {/* {isLoading && <Loading />} */}
        {categories.map((category) => (
          <Category
            key={category.details.slug}
            details={category.details}
            loadCategory={loadCategory}
          />
        ))}
      </div>
    </>
  );
};

export default CategoryList;
