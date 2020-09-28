import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function App() {
  const [reviewData, setData] = useState({ user_data: [0] });
  useEffect(() => {
    const ranId = Math.floor(Math.random() * 100 + 1);
    axios.get(`/api/reviews/${ranId}`)
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="review">
      <div className="general">
        <section>
          <h2>
            <span>
              <img className="star" src="https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/star.png" alt="" />
            </span>
            <span>
              4.89 (
              {reviewData.user_data.length}
              {' '}
              reviews)
            </span>
          </h2>
        </section>
      </div>
      <div className="rating">
        <section>
          <p>hello</p>
        </section>
      </div>
    </div>
  );
}

export default App;
