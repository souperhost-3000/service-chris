// eslint-disable-next-line object-curly-newline
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

// const ModalRatings = lazy(() => import('./ModalRatings'));
// const ModalReviews = lazy(() => import('./ModalReviews'));

// const renderLoader = () => <p>Loading</p>;

function App() {
  const [reviewData, setData] = useState(sampleData);
  const [isShowing, setIsShowing] = useState(false);
  const [close, setClose] = useState(false);
  const [searchClick, setSearchClick] = useState(false);
  const [searchData, setSearchData] = useState(undefined);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    const ranId = Math.floor(Math.random() * 100 + 1);
    axios.get(`/api/reviews/${ranId}`)
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const ratings = average(reviewData);
  function search(value) {
    if (value === '') {
      setSearchData(undefined);
      setIsSearched(false);
      return;
    }
    const data = { user_data: [] };
    for (let i = 0; i < reviewData.user_data.length; i += 1) {
      let tt = '';
      const idx = reviewData.user_data[i].review.toLowerCase().indexOf(value);
      if (idx !== -1 && value !== '') {
        tt += reviewData.user_data[i].review.slice(0, idx);
        tt += `<mark>${reviewData.user_data[i].review.slice(idx, idx + value.length)}</mark>`;
        tt += reviewData.user_data[i].review.slice(idx + value.length);
        const copyData = Object.create(reviewData.user_data[i]);
        copyData.review = tt;
        data.user_data.push(copyData);
      }
    }
    setSearchData(data);
    setIsSearched(true);
  }

  function clickOutside(e) {
    if (e.target.className === 'Modal') {
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
      <div className="Modal" onClick={(e) => { clickOutside(e); }}>
        <div className={`modalSetting ${isShowing ? '' : 'hide'}`} onClick={(e) => { handleSearchClick(e); }}>
          <div className="space">
            <button type="button" className="close" onClick={() => { setIsShowing(false); setClose(true); }}>X</button>
          </div>
          <div className="modalContent">
            {/* <Suspense fallback={renderLoader()}> */}
            <ModalRatings ratings={ratings} totalReview={reviewData.user_data.length} />
            <ModalReviews
              reviews={searchData ? searchData.user_data : reviewData.user_data}
              searchClick={searchClick}
              search={search}
              isSearched={isSearched}
            />
            {/* </Suspense> */}
          </div>
        </div>
      </div>
      )}
      {close && (
      <div className="Modal hide">
        <div className="modalSetting hide">
          <div className="space">
            <button type="button" className="close" onClick={() => { setIsShowing(false); setClose(true); }}>X</button>
          </div>
          <div className="modalContent">
            {/* <Suspense fallback={renderLoader()}> */}
            <ModalRatings ratings={ratings} totalReview={reviewData.user_data.length} />
            <ModalReviews reviews={reviewData.user_data} />
            {/* </Suspense> */}
          </div>
        </div>
      </div>
      )}
      <div id="staticDiv">
        <img id="static1" src="https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/airbnb-map.webp" alt="" />
      </div>
      <div id="staticDiv">
        <img id="static2" src="https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/airbnb-hostedby.webp" alt="" />
      </div>
    </div>
  );
}

export default App;
