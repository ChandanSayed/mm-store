import React from 'react';

const OurJourney = ({ dark }) => {
  return (
    <div className={`px-4 py-12 ${dark ? 'bg-black' : ''}`}>
      <h2 className={`text-2xl lg:text-4xl mb-10 font-bold text-center ${dark ? 'text-white' : ''}`}>Our Journey</h2>
      <ul className="timeline timeline-vertical max-w-[392px] my-10 mx-auto px-4">
        <li>
          <div className={`timeline-start ${dark ? 'text-white' : ''}`}>2015</div>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className={`timeline-end timeline-box ${dark ? 'bg-black text-white' : ''}`}>We thought</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className={`timeline-start ${dark ? 'text-white' : ''}`}>2016</div>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className={`timeline-end timeline-box ${dark ? 'bg-black text-white' : ''}`}>We Planned</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className={`timeline-start ${dark ? 'text-white' : ''}`}>2018</div>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className={`timeline-end timeline-box ${dark ? 'bg-black text-white' : ''}`}>We Started</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className={`timeline-start ${dark ? 'text-white' : ''}`}>2019</div>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className={`timeline-end timeline-box ${dark ? 'bg-black text-white' : ''}`}>Sold 2000 items</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className={`timeline-start ${dark ? 'text-white' : ''}`}>2023</div>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className={`timeline-end timeline-box ${dark ? 'bg-black text-white' : ''}`}>We became one of the best!</div>
        </li>
      </ul>
    </div>
  );
};

export default OurJourney;
