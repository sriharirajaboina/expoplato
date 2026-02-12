import React, { useState, useRef } from "react";

const Works = ({ className }) => {
  const data = [
    { id: 1, name: "Sri", description: "This is the description for Sri's work.", image: "/assests/person1.png" },
    { id: 2, name: "Raja", description: "This is the description for Raja's work.", image: "/assests/person2.png" },
    { id: 3, name: "Hari", description: "This is the description for Hari's work.", image: "/assests/person3.png" },
    { id: 4, name: "Anu", description: "This is the description for Anu's work.", image: "/assests/person4.png" },
    { id: 5, name: "Sri", description: "This is the description for Sri's work.", image: "/assests/person1.png" },
    { id: 6, name: "Raja", description: "This is the description for Raja's work.", image: "/assests/person2.png" },
    { id: 7, name: "Hari", description: "This is the description for Hari's work.", image: "/assests/person3.png" },
    { id: 8, name: "Anu", description: "This is the description for Anu's work.", image: "/assests/person4.png" },
  ];

  const [selectedWork, setSelectedWork] = useState(data[0]);
  const containerRef = useRef(null);

  // Unified scroll and select function
  const scrollToImage = (id) => {
    const container = containerRef.current;
    const item = document.getElementById(`work-${id}`);
    if (container && item) {
      const scrollLeft =
        item.offsetLeft -
        container.offsetLeft -
        container.clientWidth / 2 +
        item.clientWidth / 2;

      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
    setSelectedWork(data.find((d) => d.id === id));
  };

  return (
    <div className={`${className}`}>
      <div className="hero py-10">
        <h2 className="title text-center mb-10">Recent work</h2>
        <div className="flex justify-center items-center m-10"> 
            <div className="flex-1 h-px bg-gray-300"></div> 
            <div className="mx-6 p-2 flex-shrink-0 bg-white rounded-full flex items-center justify-center"> 
                <svg width="50" height="50" viewBox="0 0 62 58" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0027 0.595303C9.47973 4.42938 3.0781 13.1021 0.950733 23.6975C0.11861 27.8414 0.115973 27.9005 0.056126 43.4604L0 58H11.7147H23.4292V45.1366V32.2732H17.8265H12.2237L12.3304 30.597C12.7305 24.3098 14.566 18.6371 17.4396 14.8057C19.2506 12.391 22.2132 9.9488 24.4276 9.04493L25.2713 8.70051L22.3872 4.34908C20.8009 1.95587 19.462 -0.00124677 19.4117 5.95923e-07C19.3616 0.00140388 18.7275 0.269274 18.0027 0.595303ZM55.0543 0.513758C46.7133 4.17648 40.3959 12.3553 38.0676 22.5058C37.0004 27.1576 37.0201 26.7908 36.9576 43.1486L36.9009 58H48.6154H60.3298V45.1366V32.2732H54.7243H49.1187L49.2156 30.3631C49.4381 25.9768 50.698 21.0375 52.4106 17.8379C53.5463 15.7163 54.5142 14.4073 56.214 12.6949C57.8886 11.0077 59.2679 10.0123 61.3012 9.02389C61.7074 8.82649 62.0213 8.61678 61.9989 8.55815C61.9041 8.31149 56.3694 0.00530238 56.2987 0.00343134C56.256 0.00233989 55.696 0.23201 55.0543 0.513758Z" fill="black"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0027 0.595303C9.47973 4.42938 3.0781 13.1021 0.950733 23.6975C0.11861 27.8414 0.115973 27.9005 0.056126 43.4604L0 58H11.7147H23.4292V45.1366V32.2732H17.8265H12.2237L12.3304 30.597C12.7305 24.3098 14.566 18.6371 17.4396 14.8057C19.2506 12.391 22.2132 9.9488 24.4276 9.04493L25.2713 8.70051L22.3872 4.34908C20.8009 1.95587 19.462 -0.00124677 19.4117 5.95923e-07C19.3616 0.00140388 18.7275 0.269274 18.0027 0.595303ZM55.0543 0.513758C46.7133 4.17648 40.3959 12.3553 38.0676 22.5058C37.0004 27.1576 37.0201 26.7908 36.9576 43.1486L36.9009 58H48.6154H60.3298V45.1366V32.2732H54.7243H49.1187L49.2156 30.3631C49.4381 25.9768 50.698 21.0375 52.4106 17.8379C53.5463 15.7163 54.5142 14.4073 56.214 12.6949C57.8886 11.0077 59.2679 10.0123 61.3012 9.02389C61.7074 8.82649 62.0213 8.61678 61.9989 8.55815C61.9041 8.31149 56.3694 0.00530238 56.2987 0.00343134C56.256 0.00233989 55.696 0.23201 55.0543 0.513758Z" 
                fill="url(#paint0_linear_224_608)"/> <defs> 
                    <linearGradient id="paint0_linear_224_608" x1="31" y1="0" x2="31" y2="101.5" gradientUnits="userSpaceOnUse">
                         <stop stop-color="#6D2CFF"/> <stop offset="1" stop-color="#461F80"/> </linearGradient> </defs> </svg> 
            </div> 
            <div className="flex-1 h-px bg-gray-300"></div> 
        </div>
        {/* Selected Work Description */}
        <div className="mb-8 p-6 bg-white rounded-xl text-center">
          <h2 className="font-bold text-xl mb-2">{selectedWork.name}</h2>
          <p className="text-gray-600">{selectedWork.description}</p>
        </div>
       

        {/* Circle Images */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-hidden justify-start items-center"
          style={{
            maxWidth: "calc(5 * 48px + 4 * 24px)", // 5 images + gaps
            margin: "0 auto",
            height: "64px",
          }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              id={`work-${item.id}`}
              className={`cursor-pointer border-2 rounded-full flex-shrink-0 transition-transform duration-300 transform origin-center ${
                selectedWork.id === item.id
                  ? "border-purple-600 scale-110"
                  : "border-gray-200 scale-100"
              }`}
              style={{ width: "48px", height: "48px" }}
              onClick={() => scrollToImage(item.id)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
