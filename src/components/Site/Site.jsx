


import React from "react";

const Site = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="hero1 px-4 sm:px-10 md:px-20 py-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 mx-auto max-w-6xl">
          
          {/* Image Section with Circle */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            {/* Circle Background */}
            <img
              src="/assests/circle.png"
              alt="circle"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%]  md:max-w-[380px] z-0"
            />
            
            {/* Main Person Image */}
            <img
              src="/assests/site-person.png"
              className="relative w-3/4 md:w-4/5 lg:w-[300px] h-auto z-10"
              alt="site-person"
            />
          </div>

          {/* Description Section with Border */}
          <div className="w-full md:w-1/2 flex flex-col justify-center md:px-5 border-l-2 border-white">
            <h2 className="title1 text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left border-b-2 border-white pb-4">
              Welcome to Site
            </h2>
            <p className="text-base px-4 sm:text-lg text-white text-left md:text-left mt-4">
              At ExpoPlato, we're driven by innovation and a passion for
              problem-solving. With a team of dedicated enthusiasts, we're
              committed to pioneering solutions that transform the landscape of
              Event registration. We are focusing on one scalable platform for
              Exhibitions/Tradefairs/Conferences, encompassing Digital
              Registrations, Attendees badges, Footfall analytics, and
              Exhibitor's app for streamlined prospects data collection.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Site;
