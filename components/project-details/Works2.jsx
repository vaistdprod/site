import React from 'react';

function Works2({ data }) {
  // Assuming Works2 displays the fourth image if available
  return (
    <div className="section-padding pt-0">
      <div className="container">
        {data.images[3] && (
          <div className="img">
            <img src={data.images[3]} alt="Project Additional Image" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Works2;