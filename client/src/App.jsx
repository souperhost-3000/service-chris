import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style.css';
import Total from './Total';
import Ratings from './Ratings';
import Reviews from './Reviews';
import ModalRatings from './ModalRatings';
import ModalReviews from './ModalReviews';
import sampleData from '../sampleData';
import average from '../utils/average';

function App() {
  const [reviewData, setData] = useState(sampleData);
  const [isShowing, setIsShowing] = useState(false);
  const [close, setClose] = useState(false);
  const [searchClick, setSearchClick] = useState(false);
  const [searchData, setSearchData] = useState(undefined);

  useEffect(() => {
    const ranId = Math.floor(Math.random() * 100 + 1);
    axios.get(`/api/reviews/${ranId}`)
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const ratings = average(reviewData);
  const search = (value) => {
    const data = { user_data: [] };
    for (let i = 0; i < reviewData.user_data.length; i += 1) {
      if (reviewData.user_data[i].review.includes(value)) {
        data.user_data.push(reviewData.user_data[i]);
      }
    }
    setSearchData(data);
  };

  function clickOutside(e) {
    if (e.target.className === 'modal') {
      setIsShowing(false);
      setClose(true);
    }
  }

  function handleSearchClick(e) {
    if (e.target.nodeName !== 'INPUT') {
      setSearchClick(true);
    } else {
      setSearchClick(false);
    }
  }

  return (
    <div className="review">
      <Total ratings={ratings} totalReview={reviewData.user_data.length} />
      <div className="ratings">
        <Ratings ratings={ratings} />
      </div>
      <div className="userReviews">
        <Reviews reviews={reviewData.user_data} />
      </div>
      <div>
        <button type="button" className="modalButton" onClick={() => { setIsShowing(true); setClose(false); }}>{`Show all ${reviewData.user_data.length} reviews`}</button>
      </div>
      {isShowing && (
      <div className="modal" onClick={(e) => { clickOutside(e); }}>
        <div className={`modalSetting ${isShowing ? '' : 'hide'}`} onClick={(e) => { handleSearchClick(e); }}>
          <div className="space">
            <button type="button" className="close" onClick={() => { setIsShowing(false); setClose(true); }}>X</button>
          </div>
          <div className="modalContent">
            <ModalRatings ratings={ratings} totalReview={reviewData.user_data.length} />
            <ModalReviews
              reviews={searchData ? searchData.user_data : reviewData.user_data}
              searchClick={searchClick}
              search={search}
            />
          </div>
        </div>
      </div>
      )}
      {close && (
      <div className="modal hide">
        <div className="modalSetting hide">
          <div className="space">
            <button type="button" className="close" onClick={() => { setIsShowing(false); setClose(true); }}>X</button>
          </div>
          <div className="modalContent">
            <ModalRatings ratings={ratings} totalReview={reviewData.user_data.length} />
            <ModalReviews reviews={reviewData.user_data} />
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
