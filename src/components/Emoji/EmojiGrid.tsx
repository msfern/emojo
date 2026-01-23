import React from "react";
import Emoji from "../Emoji/Emoji";

import "./EmojiGrid.module.css";

interface EmojiListProps {
  emojiList: Array<{ slug: string; character: string }>;
  isLoading: boolean;
  clearResults: () => void;
}

const EmojiList: React.FC<EmojiListProps> = ({
  emojiList,
  isLoading,
  clearResults,
}) => {
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
          <Emoji key={emoji.slug} slug={emoji.slug} emoji={emoji.character} />
        ))}
      </div>
    </section>
  );
};

export default EmojiList;
