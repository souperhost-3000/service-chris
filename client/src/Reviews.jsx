/* eslint-disable react/no-array-index-key */
import React from 'react';
import Review from './Review';

function Reviews({ reviews }) {
  return (
    <div className="section">
      {reviews.slice(0, 6).map((review, idx) => (
        <Review key={review.username + idx} review={review} />
      ))}
    </div>
  );
}

export default Reviews;
