
import React from "react";

const Service = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="hero">
        <div className="flex flex-col items-center px-4 sm:px-10 md:px-20 lg:px-40 py-12">
          <h2 className="title mb-8 text-2xl sm:text-3xl md:text-4xl font-bold">
            Service
          </h2>
          
          {/* Grid layout for 3 in line */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            
            {/* Digital Registration */}
            <div className="flex flex-col items-center justify-around">
              <div className="flex items-center justify-center bg-gradient-to-b from-[#6D2CFF] to-[#461F80] w-21 h-21 p-4 rounded-3xl">
                <img
                  src="/assests/digital.png"
                  alt="digital"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h4 className="font-gilroy font-semibold text-center mt-4 text-sm sm:text-base md:text-lg">
                Digital Registration
              </h4>
            </div>

            {/* Footfall Reports */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-gradient-to-b from-[#6D2CFF] to-[#461F80] w-21 h-21 p-4 rounded-3xl">
                <img
                  src="/assests/football.png"
                  alt="footfall"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h4 className="font-gilroy font-semibold text-center mt-4 text-sm sm:text-base md:text-lg">
                Footfall Reports and Analytics
              </h4>
            </div>

            {/* Data Collection */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-gradient-to-b from-[#6D2CFF] to-[#461F80] w-21 h-21 p-4 rounded-3xl">
                <img
                  src="/assests/data-graph.png"
                  alt="data"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h4 className="font-gilroy font-semibold text-center mt-4 text-sm sm:text-base md:text-lg">
                Prospects Data Collection App for Exhibitors
              </h4>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
