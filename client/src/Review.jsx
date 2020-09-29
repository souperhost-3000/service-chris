import React from 'react';

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
            August 2019
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
