import React from 'react';

function Works({ data }) {
  return (
    <div className="img-column">
      <div className="container">
        <div className="row">
          {data.images.slice(1, 3).map((imgSrc, index) => (
            <div key={index} className="col-lg-6">
              <div className="img md-mb30">
                <img src={imgSrc} alt={`Project Image ${index + 2}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;