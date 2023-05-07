import React from 'react';
import PropTypes from 'prop-types';

const TrendingData = (props) => {
  const {
    rank, name, thumb, symbol, score,
  } = props;
  return (
    <div className="inner_card">
      <p className="rank">{rank}</p>
      <div>
        <img
          src={thumb}
          alt={`${thumb}-logo`}
          className="img"
        />
        <p className="name">{name}</p>
      </div>
      <p className="symbol">{symbol}</p>
      <p className="symbol">{score}</p>
    </div>
  );
};

TrendingData.propTypes = {
  rank: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,

};

export default TrendingData;
