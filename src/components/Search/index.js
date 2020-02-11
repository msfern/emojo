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
      <i className="fas fa-search"></i>
    </div>
  );
}

export default Search;