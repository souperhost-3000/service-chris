/* eslint-disable react/no-array-index-key */
/* eslint-disable object-curly-newline */
import React from 'react';
import ModalReview from './ModalReview';
import Search from './Search';

function ModalReviews({ reviews, searchClick, isSearched, search }) {
  return (
    <div className="modalRight">
      <div className="search">
        <Search searchClick={searchClick} search={search} />
      </div>
      <div>
        {reviews.map((review, idx) => (
          <ModalReview
            key={review.username + idx}
            review={review}
            isSearched={isSearched}
          />
        ))}
      </div>
    </div>
  );
}

export default ModalReviews;
