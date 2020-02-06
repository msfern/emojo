import React, { useEffect, useState } from 'react';
import api from './services/api';
import Search from './components/Search/index';
import CategoryList from './components/CategoryList/index';
import EmojiList from './components/EmojiList/index';
import Footer from './components/Footer/index';

import './global.scss';
import './App.scss';

function App() {

  const [allEmojis, setAllEmojis] = useState([]);
  const [emojis, setEmojis] = useState([]);
  const [loadingEmoji, setLoadingEmoji] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [categories, setCategories] = useState({});
  const [resultWasCleared, setResultWasCleared] = useState(false);

  function updateSearch(text) {
    const emojiList =  allEmojis.filter((emoji) => (
      emoji.unicodeName.toLowerCase().includes(text.toLowerCase())));
    if(text === '') {
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
      const response = await api.get('/emojis');
      setAllEmojis(response.data);
    }
    loadEmojis();
  }, []);

  async function getFirstEmojiFromFirstSubcategory(slug) {
    const firstEmoji = await api.get(`/categories/${slug}`);
    if (firstEmoji.data) {
      return firstEmoji.data[0].character
    }
  }

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/categories');
      const parse = ({ slug }) => getFirstEmojiFromFirstSubcategory(slug)
        .then(emoji => ({ slug, emoji }));

      const categoryList = await Promise.all(response.data.map(parse));
      setCategories(categoryList.filter(({ slug }) => slug !== 'component' ));
      setLoadingCategories(false);
    }
    loadCategories();
  },[]);

  async function loadCategory(category) {
    clearResults();
    setLoadingEmoji(true);
    const response = await api.get(`/categories/${category}`);
    setEmojis(response.data);
    setLoadingEmoji(false);

  }

  return (
    <div className="App">
      <header className='header'>
        <img className='logo' src='./emojo.svg' alt='emojo logo' /> 
        <Search updateSearch={updateSearch} isLoading={loadingCategories} resultWasCleared={resultWasCleared} setResultWasCleared={setResultWasCleared} />
      </header>
      <EmojiList emojiList={emojis} isLoading={loadingEmoji} clearResults={clearResults} />
      <CategoryList categories={categories} isLoading={loadingCategories} loadCategory={loadCategory} />
      <Footer />
    </div>
  );
}

export default App;
