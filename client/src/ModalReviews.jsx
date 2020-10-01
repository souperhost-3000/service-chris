import React from 'react';
import ModalReview from './ModalReview';
import Search from './Search';

function ModalReviews({ reviews }) {
  return (
    <div className="modalRight">
      <div className="search">
        <Search />
      </div>
      <div>
        {reviews.map((review) => (
          <ModalReview review={review} />
        ))}
      </div>
    </div>
  );
}

export default ModalReviews;
