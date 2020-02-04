import React from 'react';

import './style.scss';

function Search({ updateSearch,isLoading }) {

  return (
    <div className='search-container'>
      <input className='search-input' placeholder='Search emoji...' onChange={e => updateSearch(e.target.value)} disabled={isLoading} />
      <img className='search-icon' src='./search.svg' alt='Search icon' />
    </div>
  );
}

export default Search;