import React, { useEffect } from 'react';
import Clipboard from 'clipboard';

import './Emoji.module.css';
import { Emoji as EmojiType } from '@/types/Emoji';

const Emoji = ({ slug, character }: EmojiType) => {
  useEffect(() => {
    new Clipboard('.emoji-card');
  }, []);

  return (
    <div className="emoji-card" data-clipboard-text={character}>
      <span className="emoji-char">{character}</span>
      <p className="emoji-slug">{slug}</p>
    </div>
  );
};

export default Emoji;
