import { useEffect, createRef } from 'react';
import { Search as SearchType } from '@/types/Search';

import './Search.module.css';

const Search = ({
  updateSearch,
  resultWasCleared,
  setResultWasCleared,
}: SearchType) => {
  const searchRef = createRef<HTMLInputElement>();

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
        type="text"
        name="search-field"
        className="search-input"
        placeholder="Search emoji..."
        // onChange={(e) => updateSearch(e.target.value)}
        ref={searchRef}
      />
      <i className="search-icon fas fa-search"></i>
    </div>
  );
};

export default Search;
