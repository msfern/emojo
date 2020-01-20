import React, { useEffect, useState } from 'react';

import './style.scss';

function Search({ updateSearch }) {

  return (
    <div className='search-container'>
      <input className='search-input' placeholder='Search emoji...' onChange={e => updateSearch(e.target.value)} />
      <img className='search-icon' src='./search.svg' alt='Search icon' />
    </div>
  );
}

export default Search;