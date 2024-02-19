import React from 'react';
import Emoji from '../Emoji/index';
import Loading from '../Utils/Loading';

import './style.scss';

function EmojiList({ emojiList, isLoading, clearResults }) {

  return (
    <section className='result-container'>
      { emojiList.length > 0 && 
        <button className='clear-results' onClick={() => clearResults()}>Clear results</button>
      }
      <div className='emoji-list'>
        { isLoading && <Loading /> }
        { emojiList.map((emoji) => (
          <Emoji key={emoji.slug} slug={emoji.slug} emoji={emoji.character} />
        )) }
      </div>
    </section>
  );
}

export default EmojiList;