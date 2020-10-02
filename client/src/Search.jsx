import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';

function Search({ searchClick, search }) {
  const [isClicked, setIsClicked] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (searchClick) {
      setIsClicked(false);
    }
  }, [searchClick]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(value);
    return false;
  }

  return (
    <div className={isClicked ? 'searchBar clicked' : 'searchBar'}>
      <div className={isClicked ? 'searchIcon clicked' : 'searchIcon'}>
        <SearchIcon />
      </div>
      <div className="searchReview">
        <form onSubmit={(event) => { handleSubmit(event); }}>
          <input type="text" onClick={() => { setIsClicked(true); }} onChange={handleChange} placeholder="Search reviews" />
        </form>
      </div>
    </div>
  );
}

export default Search;
