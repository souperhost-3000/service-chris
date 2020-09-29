/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import average from '../utils/average';

function Total({ reviewData }) {
  const rate = average(reviewData);
  return (
    <div className="general">
      <section>
        <h2>
          <span>
            <img className="star" src="https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/star.png" alt="" />
          </span>
          <span>
            {rate.totalAvg}
            {' ('}
            {reviewData.user_data.length}
            {' reviews)'}
          </span>
        </h2>
      </section>
    </div>
  );
}

export default Total;
