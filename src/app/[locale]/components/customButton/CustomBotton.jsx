import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({ buttonText, width, onClick }) => {
  const buttonStyle = {
    width: width,
    padding: '10px 20px',
    backgroundColor: '#049AEE',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
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