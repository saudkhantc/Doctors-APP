import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({ buttonText, width }) => {
  const buttonStyle = {
    width: width,
    padding: '10px 20px',
    backgroundColor: '#31A598',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <button style={buttonStyle}>
      {buttonText}
    </button>
  );
};

CustomButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  width: PropTypes.string,
};

CustomButton.defaultProps = {
  width: 'auto',
};

export default CustomButton;