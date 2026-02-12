const SectionWrapper = ({ children }) => {
  return (
    <div className="relative  w-full overflow-hidden 
      bg-[radial-gradient(ellipse_at_top_left,_#461F80_0%,_#2C1458_40%,_#1A1852_75%,_#2B171F_100%)]">

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* LEFT BLUR LINE / CARD GLOW */}
      <div className="blur-line-top"></div>
      <div className="blur-line-bottom"></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;

