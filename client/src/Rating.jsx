import React from 'react';
import PropTypes from 'prop-types';

function Rating({ section, rate }) {
  let percentage = rate / 5;
  percentage *= 100;
  percentage += '%';
  const style = {
    width: percentage,
  };

  return (
    <div className="rate">
      <div className="rateName">{section.charAt(0).toUpperCase() + section.slice(1)}</div>
      <div className="bar">
        <div className="barRating">
          <span className="fill" style={style}> </span>
        </div>
        <span className="barRatingNum">
          {rate}
        </span>
      </div>
    </div>
  );
}

Rating.propTypes = {
  section: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
};
export default Rating;
