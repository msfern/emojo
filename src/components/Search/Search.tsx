import React, { useEffect } from 'react';

import './Search.module.css';
import { Search as SearchType } from '@/types/Search';

const Search: React.FC<SearchType> = ({
  updateSearch,
  isLoading,
  resultWasCleared,
  setResultWasCleared,
}) => {
  const searchRef = React.createRef<HTMLInputElement>();

  useEffect(() => {
    if (resultWasCleared) {
      if (searchRef.current) {
        searchRef.current.value = '';
      }
    }
    setResultWasCleared(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchRef]);

  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Search emoji..."
        onChange={(e) => updateSearch(e.target.value)}
        disabled={isLoading}
        ref={searchRef}
      />
      <i className="search-icon fas fa-search"></i>
    </div>
  );
};

export default Search;
