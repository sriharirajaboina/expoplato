import React from 'react';

const Registration = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="hero">
        <div className="px-5 py-5 md:px-20 lg:px-40 md:py-10 text-center">
          <h2 className="title text-2xl md:text-4xl font-bold">Registration Pattern</h2>

          <div className="flex flex-row items-center justify-center md:justify-around  gap-6">
            <img
              src="/assests/onsemi.png"
              alt="image1"
              className="w-40 md:w-80 h-40 object-contain"
            />
            <img
              src="/assests/circuit.png"
              alt="image2"
              className="w-40 md:w-80 h-40 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
