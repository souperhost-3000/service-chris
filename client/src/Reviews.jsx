import React from 'react';
import Review from './Review';

function Reviews({ reviews }) {
  return (
    <div className="section">
      {reviews.slice(0, 6).map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
}

export default Reviews;
