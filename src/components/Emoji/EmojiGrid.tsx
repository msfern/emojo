import React from 'react';
import Emoji from '../Emoji/Emoji';

import './EmojiGrid.module.css';
import { EmojiList as EmojiListType } from '@/types/Emoji';

const EmojiList = ({ emojiList, isLoading, clearResults }: EmojiListType) => {
  return (
    <section className="result-container">
      {emojiList.length > 0 && (
        <button className="clear-results" onClick={() => clearResults()}>
          Clear results
        </button>
      )}
      <div className="emoji-list">
        {/* {isLoading && <Loading />} */}
        {emojiList.map((emoji) => (
          <Emoji
            key={emoji.slug}
            slug={emoji.slug}
            character={emoji.character}
            unicodeName={emoji.unicodeName}
          />
        ))}
      </div>
    </section>
  );
};

export default EmojiList;
