import React, { useState, useEffect } from 'react';
import moment from 'moment';
import DOMPurify from 'dompurify';

function ModalReview({ review, isSearched }) {
  const body = review.review;
  const [readMore, setReadMore] = useState(false);
  function makeHtml(data) {
    return { __html: DOMPurify.sanitize(data) };
  }

  useEffect(() => {
    if (body.length > 180) {
      setReadMore(true);
    }
  }, [review]);

  return (
    <div className="modalUserReview">
      <div className="userReviewTop">
        <div className="profile">
          <img id="profile" src={review.image} alt="" />
        </div>
        <div className="username">
          {review.username}
          <div className="date">
            {moment(review.createdAt).format('MMMM YYYY')}
          </div>
        </div>
      </div>
      <div className="userReviewBottom">
        {isSearched && <div dangerouslySetInnerHTML={makeHtml(body)} />}
        {!isSearched && (readMore ? (
          <div>
            {`${body.slice(0, 180)}... `}
            <button type="button" className="readMore" onClick={() => setReadMore(false)}>
              read more
            </button>
          </div>
        ) : body)}
      </div>
    </div>
  );
}

export default ModalReview;
