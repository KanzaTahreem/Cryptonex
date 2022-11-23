import React from 'react';
import PropTypes from 'prop-types';

const CoinsData = (props) => {
  const { image, name } = props;
  return (
    <div>
      <img
        src={image}
        alt={`${image}-logo`}
      />
      <p>{name}</p>
    </div>
  );
};

CoinsData.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CoinsData;
