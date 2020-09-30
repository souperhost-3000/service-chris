import React, { useState, useEffect } from 'react';
import moment from 'moment';

function ModalReview({ review }) {
  const body = review.review;
  const [readMore, setReadMore] = useState(false);
  useEffect(() => {
    if (body.length > 180) {
      setReadMore(true);
    }
  }, [review]);

  return (
    <div className="modalUserReview">
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
        {readMore
          ? (
            <div>
              {`${body.slice(0, 180)}... `}
              <button type="button" className="readMore" onClick={() => setReadMore(false)}>
                read more
              </button>
            </div>
          )
          : body}
      </div>
    </div>
  );
}

export default ModalReview;
