import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "../components/DarkModeContext";
import { client } from "../components/export";
import { FaStar } from "react-icons/fa";
function Client() {
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
    <div className={`${darkMode ? "bg-black" : " light bg-transparent"}`}>
      <section
        id="testimonials"
        className={`
        } lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
            OUR CLIENT
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black dark:text-white text-[40px]  font-samibold leading-10 "
          >
            What Our Clients<br></br> Saying About Us{" "}
          </h1>
        </div>
        <div
          id="clientsbox"
          className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full"
        >
          {client.map((item, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              key={index}
              className="bg-white dark:bg-gray-900 gap-6 items-start justify-center  p-12 flex flex-col rounded-xl  hover:bg-red-100 dark:hover:bg-red-200 cursor-pointer"
            >
              <div className="flex justify-start items-center w-full gap-4">
                <img
                  src={item.image}
                  alt="clientsimages"
                  className="w-[70px] transform hover:scale-110  transition-transform duration-300"
                />
                <div className="flex justify-center items-start gap-1 ">
                  <h1 className="  text-xl text-black font-samibold dark:text-white ">
                    {item.name}
                  </h1>
                  <h1 className="text-slate-600 dark:text-white">
                    {item.text}
                  </h1>
                </div>
              </div>
              <p className="text--md text-justify items-start gap-2 dark:text-white w-full ">
                {item.feedback}
              </p>
              <div className="flex justify-start items-center gap-2 w-full ">
                <FaStar size={18} className="text-yellow-500" />
                <FaStar size={18} className="text-yellow-500" />
                <FaStar size={18} className="text-yellow-500" />
                <FaStar size={18} className="text-yellow-500" />
                <FaStar size={18} className="text-yellow-500" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Client;
