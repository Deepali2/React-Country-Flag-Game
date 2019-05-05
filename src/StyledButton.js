import React from 'react';

const StyledButton = ({text, onClick, type}) => (
  <button
    type={type || 'button'}
    onClick={onClick}
    style={{
      backgroundColor: '#6b93d6',
      borderRadius: "4px",
      border: "none",
      padding: "4px 10px",
      fontSize: "1em",
      textAlign: "center",
      color: "white",
      textDecoration: "none",
    }}
  >
    {text}

  </button>
)

export default StyledButton;