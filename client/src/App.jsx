import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import Total from './Total';
import sampleData from '../sampleData';

function App() {
  const [reviewData, setData] = useState(sampleData);
  useEffect(() => {
    const ranId = Math.floor(Math.random() * 100 + 1);
    axios.get(`/api/reviews/${ranId}`)
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="review">
      <Total reviewData={reviewData} />
      <div className="rating">
        {/* <section>
          <p>hello</p>
        </section> */}
      </div>
    </div>
  );
}

export default App;
