/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import api from './services/api';
import Search from './components/Search/index';
// import CategoryList from './components/CategoryList/index';
import EmojiList from './components/EmojiList/index';
import Footer from './components/Footer/index';

import './global.scss';
import './App.scss';

function App() {

  const [allEmojis, setAllEmojis] = useState([]);
  const [emojis, setEmojis] = useState([]);
  // const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');

  
  function updateSearch(text) {
    setSearch(text);
    console.log(search, text)
    const emojiList =  allEmojis.filter((text) => (
      text.unicodeName.toLowerCase().indexOf(search.toLowerCase()) !== -1
    ));
    setEmojis(emojiList);
  }
  
  useEffect(() => {
    async function loadEmojis() {
      const response = await api.get('/emojis');
      setAllEmojis(response.data);
    }
    loadEmojis();
  }, []);

  // useEffect(() => {
  //   async function loadEmojisFromCategory() {
  //     const response = await api.get('/emojis');
  //     console.log(response.data);
  //     // setEmojis(response.data);
  //   }
  //   loadEmojisFromCategory();
  // }, []);

  // useEffect(() => {
  //   async function loadCategories() {
  //     const response = await api.get('/categories');
  //     setCategories(response.data);
  //   }
  //   loadCategories();
  // },[]);  

  return (
    <div className="App">
      <header className='header'>
        <img className='logo' src='./emojo.svg' alt='emojo logo' />
        <Search updateSearch={updateSearch} />
      </header>
      <EmojiList emojiList={emojis} />
      {/* <CategoryList categories={categories} /> */}
      <Footer />
    </div>
  );
}

export default App;
