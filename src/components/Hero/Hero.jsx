import React, { useState } from 'react';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import MenuIcon from '@mui/icons-material/Menu';

// ✅ import global mobile navbar
import MobileNavbar from "../MobileNavbar"

const Hero = ({ className }) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`${className}`}>
      <div className="hero">
        <div className="hero-section w-full p-5">

          {/* ================= NAVBAR ================= */}
          <nav className="bg-[radial-gradient(farthest-corner_at_20%_20%,#461F80_0%,#2C1458_40%,#1A1852_85%,#2B171F_100%)] rounded-xl p-5">

            <div className="flex justify-between items-start">

              {/* Left Section */}
              <div>
                <div className="flex items-center gap-4">
                  <img src="/assests/expologo.png" alt="logo" className="w-11 h-11" /> 
                  <img src="/assests/logo-name.png" alt="logo-name" className="w-[130px] md:w-40 h-auto" />
                </div>

                <div className="md:flex items-center gap-4 mt-4 text-sm text-white">
                  <div className="flex items-center gap-2">
                    <CalendarMonthTwoToneIcon />
                    <span>23-25 March 2026 |</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LocationOnSharpIcon />
                    <span>Leela Palace, Bangalore, India</span>
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

              {/* Mobile Icon */}
              <button
                className="md:hidden text-white text-3xl"
                onClick={() => setMobileMenuOpen(true)}
              >
                <MenuIcon />
              </button>

            </div>
          </nav>

          {/* ================= HERO CONTENT ================= */}
          <div className="mt-5 flex flex-col items-center text-center">
            <img src="/assests/profile.png" alt="profile" className="my-2" />
            <button className="px-6 py-2 w-full rounded-lg bg-purple-600 text-white hover:bg-purple-700">
              ENQUIRY
            </button>
          </div>

        </div>
      </div>

      {/* 🔥 GLOBAL MOBILE NAVBAR (Portal Based) */}
      <MobileNavbar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

    </div>
  );
};

export default Hero;

