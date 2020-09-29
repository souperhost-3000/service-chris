import React from 'react';
import Rating from './Rating';

const sections = ['cleanliness', 'accuracy', 'communication', 'location', 'checkin', 'value'];

function Ratings(rate) {
  const { ratings } = rate;
  return (
    <div className="section">
      {sections.map((section) => (
        <Rating key={section + ratings[section]} section={section} rate={ratings[section]} />
      ))}
    </div>
  );
}

export default Ratings;
