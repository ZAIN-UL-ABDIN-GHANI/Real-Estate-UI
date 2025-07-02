import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "../components/DarkModeContext";
import { service } from "../components/export";

function Services() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: "ease-in-sine",
      delay: 90,
    });
    AOS.refresh();
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "bg-gray-600" : " light bg-red-200"}`}>
      <section
        id="services"
        className={`${
          darkMode ? "bg-gray-600" : "bg-red-200"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-700 dark:text-white">
            OUR SERVICES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black dark:text-white text-[40px] font-semibold leading-10"
          >
            Top Real Estate <br />
            Services Available
          </h1>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 px-6 pb-20">
        {service.map((item, index) => (
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            key={index}
            className="bg-white dark:bg-gray-800 hover:bg-gradient-to-br hover:from-red-300 hover:to-orange-200 dark:hover:from-gray-700 dark:hover:to-red-900/20 gap-4 items-start justify-center h-[350px] px-8 py-16 flex flex-col rounded-xl border-b-[5px] border-red-600 hover:border-red-500 dark:hover:border-red-400 cursor-pointer transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-red-500/20 dark:hover:shadow-red-900/30 hover:-translate-y-2 group"
          >
            <div className="p-6 rounded-full bg-red-200 dark:bg-red-800/30 group-hover:bg-red-300 dark:group-hover:bg-red-700/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/30">
              <item.icon
                size={28}
                className="text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transform hover:scale-150 transition-all duration-300 cursor-pointer"
              />
            </div>
            <h1 className="text-black text-[20px] font-semibold dark:text-white group-hover:text-red-700 dark:group-hover:text-red-300 transform hover:scale-125 transition-all duration-300 cursor-pointer">
              {item.title}
            </h1>

            <p className="text-lg text-slate-700 dark:text-gray-300 group-hover:text-slate-800 dark:group-hover:text-gray-200 transition-colors duration-300">
              {item.desc}
            </p>
            <button className="border-b-2 border-red-600 dark:border-red-400 hover:border-red-700 dark:hover:border-red-300 font-semibold p-0 text-black dark:text-white hover:text-red-700 dark:hover:text-red-300 transform hover:scale-125 transition-all duration-300 cursor-pointer group-hover:bg-red-50 dark:group-hover:bg-red-900/20 px-2 py-1 rounded">
              READ MORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
