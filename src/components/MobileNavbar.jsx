import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "@mui/icons-material/Close";

const MobileNavbar = ({ isOpen, onClose }) => {

  // 🔒 lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999999] md:hidden">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-4/5 bg-[#2C1458] p-5 shadow-2xl">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
         <img src="/assests/expologo.png" alt="logo" className="w-8 h-8" />
                  <img src="/assests/logo-name.png" alt="logo-name" className="w-[115px] h-auto" />
          <button onClick={onClose}>
            <CloseIcon className="text-white text-3xl" />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col gap-6 text-white text-lg font-semibold">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Ticket Category</span>
          <span className="cursor-pointer">Partners</span>
          <span className="cursor-pointer">Contact Us</span>
        </div>

      </div>
    </div>,
    document.body   // 🔥 THIS makes it global and always on top
  );
};

export default MobileNavbar;
