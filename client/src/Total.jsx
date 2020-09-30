import React from 'react';

function Total({ ratings, totalReview }) {
  return (
    <div className="general">
      <section>
        <h2>
          <span>
            <img className="star" src="https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/star.png" alt="" />
          </span>
          <span>
            {` ${ratings.totalAvg} (${totalReview} reviews)`}
          </span>
        </h2>
      </section>
    </div>
  );
}

export default Total;
