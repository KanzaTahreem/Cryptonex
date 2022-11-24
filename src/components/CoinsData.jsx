import React from 'react';
import PropTypes from 'prop-types';

const CoinsData = (props) => {
  const { image, name } = props;
  return (
    <div className="inner-card">
      <img
        src={image}
        alt={`${image}-logo`}
        className="card-img"
      />
      <p className="card-name">{name}</p>
    </div>
  );
};

CoinsData.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CoinsData;
