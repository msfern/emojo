import { Category as CategoryType } from '@/types/Category';

import './Category.module.css';

const Category = ({ details, loadCategory }: CategoryType) => {
  const formatCategoryTitle = (title: string) => {
    const formattedTitle = title
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' & ');
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
