import React from 'react';

import './style.scss';

function Category({ details }) {
  const formatCategoryTitle = (title) => {
    const formattedTitle = title.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ');
    return formattedTitle;
  }

  return (
    <div className='category'>
      <span className='category-emoji'>{details.emoji}</span>
      <p className='category-name'>{formatCategoryTitle(details.slug)}</p>
    </div>
  );
}

export default Category;