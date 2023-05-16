import React from 'react';

const CurrencyData = (props) => {
  const {
    rank, image, name, symbol, currentPrice,
    oneHourPriceChange, oneDayPriceChange, oneWeekPriceChange,
    totalVolume, marketCap,
  } = props;
  return (
    <div className="inner_card">
      <p className="rank">{rank}</p>
      <div>
        <img
          src={image}
          alt={`${image}-logo`}
          className="img"
        />
        <p className="name">{name}</p>
      </div>
      <p className="symbol">{symbol}</p>
      <p className="price">
        <span>Price:</span>
        {currentPrice}
      </p>
      <p className="one_hour_price">
        <span>1h Price:</span>
        {oneHourPriceChange}
      </p>
      <p className="one_day_price">
        <span>1d Price:</span>
        {oneDayPriceChange}
      </p>
      <p className="one_week_price">
        <span>1w Price:</span>
        {oneWeekPriceChange}
      </p>
      <p className="total_volume">
        <span>Volume:</span>
        {totalVolume}
      </p>
      <p className="market_cap">
        <span>Mkt Cap:</span>
        {marketCap}
      </p>
    </div>
  );
};

export default CurrencyData;
