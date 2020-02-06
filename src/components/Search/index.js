import React, { useEffect } from 'react';

import './style.scss';

function Search({ updateSearch, isLoading, resultWasCleared, setResultWasCleared }) {
  const searchRef = React.createRef();

  useEffect(() => {
    if(resultWasCleared) {
      searchRef.current.value = '';
    }
    setResultWasCleared(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchRef]);

  return (
    <div className='search-container'>
      <input className='search-input' placeholder='Search emoji...' onChange={e => updateSearch(e.target.value)} disabled={isLoading} ref={searchRef}/>
      <img className='search-icon' src='./search.svg' alt='Search icon' />
    </div>
  );
}

export default Search;