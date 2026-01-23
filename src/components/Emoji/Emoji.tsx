import React, { useEffect } from "react";
import Clipboard from "clipboard";

import "./Emoji.module.css";

interface EmojiProps {
  slug: string;
  emoji: string;
}

const Emoji: React.FC<EmojiProps> = ({ slug, emoji }) => {
  useEffect(() => {
    new Clipboard(".emoji-card");
  }, []);

  return (
    <div className="emoji-card" data-clipboard-text={emoji}>
      <span className="emoji-char">{emoji}</span>
      <p className="emoji-slug">{slug}</p>
    </div>
  );
};

export default Emoji;
