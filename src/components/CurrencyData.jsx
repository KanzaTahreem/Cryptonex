import React from 'react';
import PropTypes from 'prop-types';

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
        <p className="symbol">{symbol}</p>
      </div>
      <p className="price">{currentPrice}</p>
      <p className="one_hour_price">{oneHourPriceChange}</p>
      <p className="one_day_price">{oneDayPriceChange}</p>
      <p className="one_week_price">{oneWeekPriceChange}</p>
      <p className="total_volume">{totalVolume}</p>
      <p className="market_cap">{marketCap}</p>
    </div>
  );
};

CurrencyData.propTypes = {
  rank: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  currentPrice: PropTypes.string.isRequired,
  oneHourPriceChange: PropTypes.string.isRequired,
  oneDayPriceChange: PropTypes.string.isRequired,
  oneWeekPriceChange: PropTypes.string.isRequired,
  totalVolume: PropTypes.string.isRequired,
  marketCap: PropTypes.string.isRequired,
};

export default CurrencyData;
