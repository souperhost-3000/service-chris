import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import Total from './Total';
import Ratings from './Ratings';
import sampleData from '../sampleData';
import average from '../utils/average';

function App() {
  const [reviewData, setData] = useState(sampleData);
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
    </div>
  );
}

export default App;
