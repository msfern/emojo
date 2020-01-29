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
  const [categories, setCategories] = useState({});

  function updateSearch(text) {
    const emojiList =  allEmojis.filter((emoji) => (
      emoji.unicodeName.toLowerCase().indexOf(text.toLowerCase()) !== -1
    ));
    if(text === '') {
      return setEmojis([]);
    }
    setEmojis(emojiList);
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
    }
    loadCategories();
  },[]);

  return (
    <div className="App">
      <header className='header'>
        <img className='logo' src='./emojo.svg' alt='emojo logo' />
        <Search updateSearch={updateSearch} />
      </header>
      <EmojiList emojiList={emojis} />
      <CategoryList categories={categories} />
      <Footer />
    </div>
  );
}

export default App;
