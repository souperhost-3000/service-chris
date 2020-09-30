import React, { useState, useEffect } from 'react';
import moment from 'moment';

function ModalReview(review) {
  const body = review.review;
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="userReview">
      <div className="userReviewTop">
        <div className="profile">
          <img src={review.image} alt="" />
        </div>
        <div className="username">
          {review.username}
          <div className="date">
            {moment(review.createdAt).format('MMMM YYYY')}
          </div>
        </div>
      </div>
      <div className="userReviewBottom">

      </div>
    </div>
  );
}

export default ModalReview;
