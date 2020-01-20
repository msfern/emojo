import React, { useEffect, useState } from 'react';
import Emoji from '../Emoji/index';

import './style.scss';

function EmojiList({ emojiList }) {

  return (
    <div className='emoji-list'>
      { emojiList.map((emoji) => (
        <Emoji key={emoji.slug} slug={emoji.slug} emoji={emoji.character} />
      )) }
    </div>
  );
}

export default EmojiList;