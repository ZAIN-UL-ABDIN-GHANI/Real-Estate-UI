import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroing from "../assets/images/hero1.webp";
import { useDarkMode } from "../components/DarkModeContext";

function Hero() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: "ease-in-sine",
      delay: 50,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div className={`${darkMode ? "dark bg-black" : "bg-white"}`}>
        <section
          id="home"
          className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${heroing})` }}
        >
          <h1
            data-aos="zoom-in"
            className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[60px]"
          >
            Find your next Home in Islamabad
          </h1>
          <p
            data-aos="zoom-in"
            className="text-white text-xl lg:pr-[500px] pr-0"
          >
            Find luxury homes, exclusive deals, prime locations, trusted agents,
            seamless buying, and personalized service — your perfect property
            awaits today!
          </p>
        </section>
      </div>

      {/* form start from here */}
      <div className={`${darkMode ? "dark bg-black" : "bg-transparent"} z-10`}>
        <div
          data-aos="zoom-in"
          id="form"
          className={`${
            darkMode ? "dark bg-gray-800" : "bg-white"
          } lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-end gap-6 p-8 rounded-xl -mt-14`}
        >
          {/* LOCATION */}
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              LOCATION
            </h1>
            <input
              type="text"
              placeholder="Enter an address, state, city or pincode"
              className="bg-white w-full mt-2 border-b border-[#c9c7c1] p-2"
            />
          </div>

          {/* TYPE */}
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">TYPE</h1>
            <select
              name="selectType"
              id="selectType"
              className="bg-white w-full mt-2 border-b border-[#c9c7c1] p-2 text-gray-500"
            >
              <option value="" disabled selected>
                Select property
              </option>
              <option value="rentals">Rentals</option>
              <option value="sales">Sales</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          {/* CATEGORY */}
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              CATEGORY
            </h1>
            <select
              name="selectCategory"
              id="selectCategory"
              className="bg-white w-full mt-2 border-b border-[#c9c7c1] p-3 text-gray-500"
            >
              <option value="" disabled selected>
                Property Category
              </option>
              <option value="option3">Condo 1</option>
              <option value="option4">Condo 2</option>
              <option value="option5">Condo 3</option>
            </select>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="w-full">
            <button
              className="bg-red-600 dark:bg-red-700 
             hover:bg-black dark:hover:bg-white 
             text-white dark:hover:text-black 
             text-lg p-3 w-full font-semibold rounded-xl 
             transform hover:scale-110 
             cursor-pointer transition-all duration-300"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
