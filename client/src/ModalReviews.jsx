import React from 'react';
import ModalReview from './ModalReview';

function ModalReviews({ reviews }) {
  return (
    <div className="modalRight">
      {reviews.map((review) => (
        <ModalReview review={review} />
      ))}
    </div>
  );
}

export default ModalReviews;
