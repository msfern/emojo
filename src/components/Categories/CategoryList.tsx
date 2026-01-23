import React from "react";

import Category from "./Category";

import "./CategoryList.module.css";

interface CategoryListProps {
  categories: Array<{ slug: string; emoji: string }>;
  isLoading: boolean;
  loadCategory: (slug: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
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
            key={category.slug}
            details={category}
            loadCategory={loadCategory}
          />
        ))}
      </div>
    </>
  );
};

export default CategoryList;
