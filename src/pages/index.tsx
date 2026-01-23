import Image from "next/image";
import { Inter } from "next/font/google";
import Search from "@/components/Search";
import CategoryList from "@/components/Categories/CategoryList";
import Footer from "@/components/Footer";
import EmojiList from "@/components/Emoji/EmojiGrid";
import { useEffect, useState } from "react";

interface Emoji {
  slug: string;
  character: string;
  unicodeName: string;
}

interface Category {
  slug: string;
  emoji: string;
}

const api = {
  get: async (url: string) => {
    const response = await fetch(`https://emoji-api.com`);
    return response.json();
  },
};

export default function Home() {
  const [allEmojis, setAllEmojis] = useState<Emoji[]>([]);
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [loadingEmoji, setLoadingEmoji] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [resultWasCleared, setResultWasCleared] = useState(false);

  function updateSearch(text: string) {
    const emojiList = allEmojis.filter((emoji) =>
      emoji.unicodeName.toLowerCase().includes(text.toLowerCase()),
    );
    if (text === "") {
      return clearResults();
    }
    setEmojis(emojiList);
  }

  function clearResults() {
    setEmojis([]);
    setResultWasCleared(true);
  }

  useEffect(() => {
    async function loadEmojis() {
      const response = await api.get(
        `/emojis?access_key=${process.env.REACT_APP_EMOJI_API_KEY}`,
      );
      setAllEmojis(response.data);
    }
    loadEmojis();
  }, []);

  async function getFirstEmojiFromFirstSubcategory(slug: string) {
    const firstEmoji = await api.get(
      `/categories/${slug}?access_key=${process.env.REACT_APP_EMOJI_API_KEY}`,
    );
    if (firstEmoji.data) {
      return firstEmoji.data[0].character;
    }
  }

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get(
        `/categories?access_key=${process.env.REACT_APP_EMOJI_API_KEY}`,
      );
      const parse = ({ slug }: { slug: string }) =>
        getFirstEmojiFromFirstSubcategory(slug).then((emoji) => ({
          slug,
          emoji,
        }));

      const categoryList = await Promise.all(response.data.map(parse));
      setCategories(categoryList.filter(({ slug }) => slug !== "component"));
      setLoadingCategories(false);
    }
    loadCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadCategory(category: Category["slug"]) {
    clearResults();
    setLoadingEmoji(true);
    const response = await api.get(
      `/categories/${category}?access_key=${process.env.REACT_APP_EMOJI_API_KEY}`,
    );
    setEmojis(response.data);
    setLoadingEmoji(false);
  }

  return (
    <div className="App">
      <header className="header">
        <img className="logo" src="./emojo.svg" alt="emojo logo" />
        <Search
          updateSearch={updateSearch}
          isLoading={loadingCategories}
          resultWasCleared={resultWasCleared}
          setResultWasCleared={setResultWasCleared}
        />
      </header>
      <EmojiList
        emojiList={emojis}
        isLoading={loadingEmoji}
        clearResults={clearResults}
      />
      <CategoryList
        categories={categories}
        isLoading={loadingCategories}
        loadCategory={loadCategory}
      />
      <Footer />
    </div>

    // return (
    //   <>
    //     <header>
    //       <Image src="/emojo.svg" alt="Emojo Logo" width={72} height={16} />
    //     </header>
    //     <main>
    //       <Search />
    //       <CategoryList />
    //     </main>
    //     <Footer />
    //   </>
    // );
  );
}
