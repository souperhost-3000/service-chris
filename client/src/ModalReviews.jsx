import React from 'react';
import ModalReview from './ModalReview';
import Search from './Search';

function ModalReviews({ reviews, searchClick, search }) {
  return (
    <div className="modalRight">
      <div className="search">
        <Search searchClick={searchClick} search={search} />
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
