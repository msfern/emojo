import React from 'react';

import './style.scss';

function Category({ details }) {

  return (
    <div>
      <p>{details.slug}</p>
      <p>{details.emoji}</p>
    </div>
  );
}

export default Category;