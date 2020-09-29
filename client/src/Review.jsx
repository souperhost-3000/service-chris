import React from 'react';
import moment from 'moment';

function Review({ review }) {
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
        {review.review}
      </div>
    </div>
  );
}

export default Review;
