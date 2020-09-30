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
  useEffect(() => {
    const ranId = Math.floor(Math.random() * 100 + 1);
    axios.get(`/api/reviews/${ranId}`)
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const ratings = average(reviewData);
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
        <button type="button" className="modalButton" onClick={() => { setIsShowing(true); }}>{`Show all ${reviewData.user_data.length} reviews`}</button>
      </div>
      {isShowing
        ? (
          <div className="modal">
            <div className="modalSetting">
              <div className="space">
                <button type="button" className="close" onClick={() => { setIsShowing(false); }}>X</button>
              </div>
              <div className="modalContent">
                <ModalRatings ratings={ratings} totalReview={reviewData.user_data.length} />
                <ModalReviews reviews={reviewData.user_data} />
              </div>
            </div>
          </div>
        )
        : null}

    </div>
  );
}

export default App;
