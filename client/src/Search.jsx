import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';

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

  function handleSubmit(event, goBack) {
    event.preventDefault();
    if (goBack) {
      search('');
    } else {
      search(value);
    }
    return false;
  }

  return (
    <div className={isClicked ? 'searchBar clicked' : 'searchBar'}>
      <div className={isClicked ? 'searchIcon clicked' : 'searchIcon'}>
        <SearchIcon />
      </div>
      <div className="searchReview">
        <form onSubmit={(event) => { handleSubmit(event); }}>
          <input id="search" type="text" onClick={() => { setIsClicked(true); }} onChange={handleChange} value={value} placeholder="Search reviews" />
        </form>
      </div>
      <div className="deleteIcon" onClick={(event) => { setValue(''); handleSubmit(event, true); }}><CancelIcon /></div>
    </div>
  );
}

export default Search;
