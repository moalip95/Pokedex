import React from 'react';

function DetailsButton({ onClick }) {
  return (
    <button className="details-btn" onClick={onClick}>
      Details
    </button>
  );
}

export default DetailsButton;
