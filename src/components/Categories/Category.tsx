import React from "react";

import "./Category.module.css";

interface CategoryProps {
  details: {
    slug: string;
    emoji: string;
  };
  loadCategory: (slug: string) => void;
}

const Category: React.FC<CategoryProps> = ({ details, loadCategory }) => {
  const formatCategoryTitle = (title: string) => {
    const formattedTitle = title
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" & ");
    return formattedTitle;
  };

  return (
    <div className="category" onClick={() => loadCategory(details.slug)}>
      <span className="category-emoji">{details.emoji}</span>
      <p className="category-name">{formatCategoryTitle(details.slug)}</p>
    </div>
  );
};

export default Category;
