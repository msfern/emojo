import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import EmojiList from './EmojiGrid';
import { axe } from 'vitest-axe';
import { EmojiList as EmojiListType } from '@/types/Emoji';
import { mockEmojis } from '@/utils/emojiMocks';

describe('EmojiList Component', () => {
  const renderComponent = (props: Partial<EmojiListType> = {}) => {
    const defaultProps: EmojiListType = {
      emojiList: [],
      isLoading: false,
      clearResults: () => {},
      ...props,
    };
    return render(<EmojiList {...defaultProps} />);
  };

  test('renders the correct number of emojis based on data', () => {
    // 1. Arrange: Render the component with our mock data
    renderComponent({ emojiList: mockEmojis });

    // 2. Act: Find the emoji items (we use the role we added earlier!)
    const items = screen.getAllByRole('listitem');

    // 3. Assert: Check if the count matches
    expect(items).toHaveLength(2);
  });

  test('shows empty state when no emojis are provided', () => {
    renderComponent({ emojiList: [] });
    const message = screen.getByText(/no emojis found/i);
    expect(message).toBeInTheDocument();
  });

  test('should have no axe violations', async () => {
    const { baseElement } = renderComponent({ emojiList: [] });
    expect(await axe(baseElement)).toHaveNoViolations();
  });
});
