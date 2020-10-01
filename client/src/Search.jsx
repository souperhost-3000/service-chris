import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={`searchBar ${isClicked ? 'clicked' : ''}`}>
      <div className={`searchIcon ${isClicked ? 'clicked' : ''}`}>
        <SearchIcon />
      </div>
      <div className="searchReview">
        <input type="text" onClick={() => { setIsClicked(true); }} placeholder="Search reviews" />
      </div>
    </div>
  );
}

export default Search;
