export interface Emoji {
  slug: string;
  character: string;
  unicodeName: string;
}

export interface EmojiList {
  emojiList: Emoji[];
  isLoading: boolean;
  clearResults: () => void;
}