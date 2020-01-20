import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './style.scss';

function Category({ slug }) {
  const [char, setChar] = useState([]);

  useEffect(() => {
    async function getFirstEmojiFromFirstSubcategory() {
      const firstEmoji = await api.get(`/categories/${slug}`);
      if (firstEmoji.data) {
        setChar(firstEmoji.data[0].character);
      }
    }
    getFirstEmojiFromFirstSubcategory();
  },); 

  return (
    <div>
      <p>{slug}</p>
      <p>{char}</p>
    </div>
  );
}

export default Category;