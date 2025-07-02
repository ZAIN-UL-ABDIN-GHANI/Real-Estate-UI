import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import area1 from "../assets/images/area1.jpg";
import area2 from "../assets/images/area2.jpg";
import area3 from "../assets/images/area3.jpg";
import { useDarkMode } from "../components/DarkModeContext";

function PopularArea() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
      <section
        id="popularArea"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } w-full max-w-[1440px] m-auto bg-cover bg-center rounded-xl flex flex-col items-start lg:px-20 px-6 py-20 gap-12`}
      >
        {/* Title and Image Section */}
        <div className="w-full flex flex-col lg:flex-row gap-10">
          {/* Left Text */}
          <div className="lg:w-1/3 w-full flex flex-col justify-center">
            <h1
              data-aos="zoom-in"
              className="text-red-500 dark:text-white uppercase"
            >
              Popular Areas
            </h1>
            <h1
              data-aos="zoom-in"
              className="text-black text-[40px] font-semibold leading-10 dark:text-white mt-4"
            >
              Explore most <br /> popular areas
            </h1>
          </div>

          {/* Right Images and animations on hover */}
       <div className="lg:w-2/3 w-full flex flex-col lg:flex-row gap-6">
  {[area1, area2, area3].map((area, idx) => (
    <div
      key={idx}
      data-aos="zoom-in"
      style={{
        backgroundImage: `url(${area})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[300px] lg:h-[400px] rounded-xl relative overflow-hidden cursor-pointer group transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-black/30"
    >

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
   
      <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-110 group-hover:animate-ping opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
      
    
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
  
   <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
 <div className="text-white">
  <h3 className="text-xl font-bold mb-2">
    {idx === 0 && "Malam Jabba"}
    {idx === 1 && "Bani Gala"}
    {idx === 2 && "Clifton"}
  </h3>
  <p className="text-sm opacity-90">
    {idx === 0 &&
      "Discover Malam Jabba's breathtaking mountain landscapes and serene wilderness that will captivate your adventurous spirit."}
    {idx === 1 &&
      "Experience Bani Gala's pristine beauty with clear waters and lush forest trails perfect for peaceful exploration."}
    {idx === 2 &&
      "Explore Clifton's urban charm where sea views meet luxury, telling a story of elegance and style."}
  </p>
</div>

</div>
 </div>
  ))}
</div>
        </div>
        {/* Stats Section */}
        <div
          id="bottom"
          className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 text-center lg:text-left md:pl-52"
        >
          {/* 5K Block */}
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex flex-col items-center lg:items-start justify-center gap-2 w-full"
          >
            <h1 className="text-black text-7xl font-semibold dark:text-white">
              15K
            </h1>
            <h1 className="text-base text-gray-700 dark:text-gray-300">
              ONGOING
              <br />
              PROJECTS
            </h1>
          </div>

          {/* 17K Block */}
          <div
            data-aos="slide-up"
            data-aos-delay="300"
            className="flex flex-col items-center lg:items-start justify-center gap-2 w-full"
          >
            <h1 className="text-black text-7xl font-semibold dark:text-white">
              17K
            </h1>
            <h1 className="text-base text-gray-700 dark:text-gray-300">
                  PROPERTIES
              <br />
              SOLD
            </h1>
          </div>

          {/* 28K Block */}
          <div
            data-aos="slide-up"
            data-aos-delay="400"
            className="flex flex-col items-center lg:items-start justify-center gap-2 w-full"
          >
            <h1 className="text-black text-7xl font-semibold dark:text-white">
              28K
            </h1>
            <h1 className="text-base text-gray-700 dark:text-gray-300">
              HAPPY
              <br />
              CLIENT`S
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PopularArea;
