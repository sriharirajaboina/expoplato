

import React, { useState } from 'react';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Hero = ({ className }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className={`${className}`}>
      <div className="hero">
        <div className="hero-section w-full p-5">
          {/* Navbar */}
          <nav className="bg-[radial-gradient(farthest-corner_at_20%_20%,#461F80_0%,#2C1458_40%,#1A1852_85%,#2B171F_100%)] rounded-xl p-5">
            <div className="flex justify-between items-start">
              {/* Left Section: Logo + Logo-name */}
              <div  >
                <div className="flex items-center gap-4">
                  <img src="/assests/expologo.png" alt="logo" className="w-11 h-11" />
                  <img src="/assests/logo-name.png" alt="logo-name" className="w-[130px] md:w-40 h-auto" />
                </div>
                <div className="md:flex items-center flex-row gap-4 mt-4 text-sm text-white">
                  <div className="mt-2 flex items-center gap-2">
                    <CalendarMonthTwoToneIcon className="text-base" />
                    <span>23-25 March 2026 | </span>
                  </div>
                  <div className="mt-3 md:flex items-center gap-2">
                    <LocationOnSharpIcon className="text-base" />
                    <span>Leela Palace, Indira Nagar, Bangalore, India</span>
                  </div>
                </div>
              </div>

              {/* Desktop Menu */}
              <ul className="hidden md:flex items-center text-white gap-10 font-semibold text-base">
                <li className="underline underline-offset-8">Home</li>
                <li>Ticket Category</li>
                <li>Partners</li>
                <li>Contact Us</li>
              </ul>

              {/* Mobile Hamburger */}
              {!mobileMenuOpen && (
                <button
                  className="md:hidden text-white text-3xl focus:outline-none"
                  onClick={toggleMobileMenu}
                >
                  <MenuIcon />
                </button>
              )}
            </div>

            {/* Mobile Menu Slide */}
            <div
              className={`fixed top-0 right-0 h-full w-4/5 bg-[#2C1458] z-50 transform transition-transform duration-300 ${
                mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              } md:hidden`}
            >
              {/* Close Button Inside Mobile Menu */}
              <div className="flex justify-between py-3">
                <div className="flex flex-row items-start gap-4 px-4 py-3">
                  <img src="/assests/expologo.png" alt="logo" className="w-8 h-8" />
                  <img src="/assests/logo-name.png" alt="logo-name" className="w-[115px] h-auto" />
                </div>
                <button
                  className="text-white text-3xl font-bold focus:outline-none px-5"
                  onClick={toggleMobileMenu}
                >
                  <CloseIcon />
                </button>
                
              </div>
              
              <div className="px-5 py-2 flex flex-col gap-4 text-white font-semibold text-base">
                <li className="cursor-pointer list-none">Home</li>
                <li className="cursor-pointer list-none">Ticket Category</li>
                <li className="cursor-pointer list-none">Partners</li>
                <li className="cursor-pointer list-none">Contact Us</li>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="mt-5 flex flex-col items-center text-center">
            <img src="/assests/profile.png" alt="profile" className="my-5" />
            <button className="btn-expo text-xs md:text-lg font-gilroy px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
              ENQUIRY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
