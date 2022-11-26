import React from 'react';
import PropTypes from 'prop-types';

const CoinsData = (props) => {
  const {
    rank, name, image, currentPrice,
  } = props;
  return (
    <div className="inner-card">
      <p className="card-name">
        {rank}
        {'. '}
        {name}
      </p>
      <img
        src={image}
        alt={`${image}-logo`}
        className="card-img"
      />
      <p className="price">{`Price: ${currentPrice}`}</p>
    </div>
  );
};

CoinsData.propTypes = {
  rank: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
};

export default CoinsData;
