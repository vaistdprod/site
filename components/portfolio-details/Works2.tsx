import React from 'react';

import { PortfolioDetailProps } from '@/types/portfolio';

function Works2({ data }: PortfolioDetailProps) {
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
