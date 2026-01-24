import Emoji from '../Emoji/Emoji';
import { EmojiList as EmojiListType } from '@/types/Emoji';

import './EmojiGrid.module.css';

const EmojiList = ({ emojiList, clearResults }: EmojiListType) => {
  return (
    <section className="result-container">
      {emojiList.length > 0 && (
        <button className="clear-results" onClick={() => clearResults()}>
          Clear results
        </button>
      )}
      <div className="emoji-list" role="list" aria-label="Emoji search results">
        {emojiList.length > 0 ? (
          emojiList.map((emoji) => <Emoji key={emoji.slug} {...emoji} />)
        ) : (
          <div className="emoji-list__empty-state">
            <p>No emojis found for that search. Try something else!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmojiList;
