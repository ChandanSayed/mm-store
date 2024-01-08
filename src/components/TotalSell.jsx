import React from 'react';

const TotalSell = ({ dark }) => {
  return (
    <div className={`px-4 py-12 ${dark ? 'bg-black' : ''}`}>
      <h2 data-aos="fade-up" className={`text-2xl lg:text-4xl mb-10 font-bold text-center ${dark ? 'text-white' : ''}`}>
        Total Sell
      </h2>
      <div data-aos="fade-up" className={`stats shadow block mx-auto max-w-[199px] ${dark ? 'bg-black border border-white text-white' : ''}`}>
        <div className="stat">
          <div className="stat-value">178,200</div>
          <div className={`stat-desc ${dark ? 'text-white' : ''}`}>21% more than last month</div>
        </div>
      </div>
    </div>
  );
};

export default TotalSell;
