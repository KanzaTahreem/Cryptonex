import React from 'react';

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

export default TrendingData;
