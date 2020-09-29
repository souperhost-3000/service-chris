import React from 'react';

function ModalRatings({ ratings, totalReview }) {
  return (
    <div className="modalLeft">
      <div className="modalGeneral">
        <h2>
          <span>
            <img className="star" src="https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/star.png" alt="" />
          </span>
          <span>
            {`${ratings.totalAvg} (${totalReview} reviews)`}
          </span>
        </h2>
      </div>
      <div className="modalRatings">

      </div>
    </div>
  );
}

export default ModalRatings;
