/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const Teams = (props) => {
  const { logo, name } = props;
  return (
    <div>
      <img
        src={logo}
        alt="logo"
      />
      <p>{name}</p>
    </div>
  );
};

Teams.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Teams;
