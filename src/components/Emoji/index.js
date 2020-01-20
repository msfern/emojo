import React, { useEffect, useState } from 'react';

import './style.scss';

function Emoji({ slug, emoji }) {
  return (
    <div className='emoji-card'>
      <span className='emoji-char'>{emoji}</span>
      <p className='emoji-slug'>{slug}</p>
    </div>
  );
}

export default Emoji;