import React, { useState, useEffect } from 'react';

function widthBar(rating) {
  const [width, setWidth] = useState({ width: '0%' });
  useEffect(() => {
    let percentage = rating / 5;
    percentage *= 100;
    percentage += '%';

    setWidth({ width: percentage });
  }, [rating]);
  return width;
}

function ModalRatings({ ratings, totalReview }) {
  return (
    <div className="modalLeft">
      <div className="modalGeneral">
        <h1>
          <span>
            <img className="star2" src="https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/star.png" alt="" />
          </span>
          <span>
            {` ${ratings.totalAvg} (${totalReview} reviews)`}
          </span>
        </h1>
      </div>
      <div className="modalRatings">
        {Object.keys(ratings).slice(0, 6).map((rating) => (
          <div className="modalRate" key={rating + ratings[rating]}>
            <div className="rateName">
              {rating.charAt(0).toUpperCase() + rating.slice(1)}
            </div>
            <div className="modalBar">
              <div className="barRating">
                <span className="fill" style={widthBar(ratings[rating])}> </span>
              </div>
              <span className="barRatingNum">
                {ratings[rating]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModalRatings;
