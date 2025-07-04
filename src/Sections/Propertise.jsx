import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "../components/DarkModeContext";
import { property } from "../components/export";
// Icons
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaPlus,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
  FaHeart,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

function Properties() {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <div
      id="properties"
      className={`${darkMode ? "dark bg-black" : "light bg-gray-100"} py-20 `}
    >
      <section className="lg:w-[90%] m-auto lg:px-20 px-6 py-10 w-full flex flex-col justify-center items-start gap-10">
        {/* Header */}
        <div className="flex flex-col justify-center items-start gap-4">
          <h1
            data-aos="zoom-in"
            className="text-red-500 dark:text-white uppercase"
          >
            Properties
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-4xl font-semibold dark:text-white"
          >
            Explore the Latest
          </h1>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {property.map((item) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              data-aos-delay="100"
              className={` rounded-lg overflow-hidden transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 shadow-lg shadow-gray-900/50"
                  : "bg-white shadow-lg shadow-gray-300/20"
              }`}
            >
              {/* Image Section */}
              <div className="relative w-full h-48 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />

                {/* Top Left Badge - Featured */}
                <div className="absolute top-3 left-3">
                  <span className="bg-red-500 hover:bg-white hover:text-black text-white px-2 py-1 rounded text-xs font-medium cursor-pointer">
                    Featured
                  </span>
                </div>

                {/* Top Right Badges - Sales and Active */}
                <div className="absolute top-3 right-3 flex gap-1">
                  <span className="bg-red-500  hover:bg-white hover:text-black text-white px-2 py-1 rounded text-xs font-medium cursor-pointer">
                    Sales
                  </span>
                  <span className="bg-red-500  hover:bg-white hover:text-black text-white px-2 py-1 rounded text-xs font-medium cursor-pointer">
                    Active
                  </span>
                </div>

                {/* Bottom Left Address with Map Icon */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1">
                  <FaMapMarkerAlt className="w-3 h-3 text-white" />
                  <span className="text-white text-xs font-medium">
                    {item.address}
                  </span>
                </div>

                {/* Bottom Right Icons */}
                <div className="absolute bottom-3 right-3 flex gap-1">
                  <div className="w-6 h-6 rounded flex items-center justify-center">
                    <FaVideo className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-6 h-6  rounded flex items-center justify-center">
                    <FaCamera className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-4 py-4">
                {/* Title */}
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Price */}
                <div className="mb-3">
                  <span
                    className={`${
                      darkMode ? "text-white" : "text-gray-900"
                    } text-xl font-bold`}
                  >
                    $ {item.price}
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`text-sm mb-4 leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>

                {/* Property Details */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4  rounded flex items-center justify-center">
                      <FaBath className="text-red-500" size={18} />
                    </div>
                    <span
                      className={`text-xs ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.baths}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-4  rounded flex items-center justify-center">
                      <FaBed className="text-red-500" size={18} />
                    </div>
                    <span
                      className={`text-xs ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.beds}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 rounded flex items-center justify-center">
                      <MdSpaceDashboard className="text-red-500" size={18} />
                    </div>
                    <span
                      className={`text-xs ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.area} sq ft
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Section  */}
              <div className="flex justify-center py-1">
                <div
                  className={`w-[90%] h-[1px] justify-center ${
                    darkMode ? "bg-white" : "bg-gray-500"
                  }`}
                ></div>
              </div>

              <div
                className={`flex items-center justify-between px-4 py-3  ${
                  darkMode ? "border-white" : "border-gray-600"
                }`}
              >
                {/* Agent Info */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <FaUserCircle size={14} className="text-white" />
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-800"
                    }`}
                  >
                    {item.agent}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    className={`w-7 h-7 border rounded flex items-center justify-center hover:scale-125 transition-transform duration-300  ${
                      darkMode
                        ? "border-white hover:bg-gray-700"
                        : "border-gray-300 hover:bg-gray-300"
                    }`}
                  >
                    <FaShareAlt
                      className={`w-3 h-3 ${
                        darkMode ? "text-red-400" : "text-red-500"
                      }`}
                    />
                  </button>
                  <button
                    className={`w-7 h-7 border rounded flex items-center justify-center hover:scale-125 transition-transform duration-300 ${
                      darkMode
                        ? "border-white hover:bg-gray-700 hover:text-red-900"
                        : "border-gray-300 hover:bg-gray-300"
                    }`}
                  >
                    <FaHeart
                      className={`w-3 h-3 ${
                        darkMode ? "text-red-400" : "text-red-500"
                      }`}
                    />
                  </button>
                  <button
                    className={`w-7 h-7 border rounded flex items-center justify-center hover:scale-125 transition-transform duration-300 ${
                      darkMode
                        ? "border-white hover:bg-gray-700"
                        : "border-gray-300 hover:bg-gray-300"
                    }`}
                  >
                    <FaPlus
                      className={`w-3 h-3 ${
                        darkMode ? "text-red-400" : "text-red-500"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="flex justify-center items-center">
        <button
          data-aos="zoom-in"
          data-aos-delay="50"
          className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 text-white transform hover:scale-110 font-semibold rounded-xl cursor-pointer transition-transform duration-300"
        >
          LOAD MORE
        </button>
      </div>
    </div>
  );
}

export default Properties;
