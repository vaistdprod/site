import React from 'react';

function Works2({ data }) {
  return (
    <div className="section-padding pt-0">
      <div className="container">
        {data.images[3] && (
          <div className="img">
            <img src={data.images[3]} alt="Další foto projektu" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Works2;