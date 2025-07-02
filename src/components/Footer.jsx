import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "../components/DarkModeContext";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";

// Icons
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-scroll";

function Footer() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });

    const handleScroll = () => {
      const homeHeight = document.getElementById("home")?.offsetHeight || 0;
      const scrollY = window.scrollY;
      setIsVisible(scrollY > homeHeight / 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer
        className={`${
          darkMode ? "dark bg-black" : "light bg-gray-800"
        } w-full px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10`}
      >
        {/* About Us */}
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-lg md:text-2xl font-semibold">
            About Us
          </h1>
          <p className="text-slate-200 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
            placerat! Odit aliquam maiores dignissim perspiciatis cupiditate
            dolorum sit repellendus nulla?
          </p>
          <div className="flex gap-2 mt-2">
            <div className="p-2 rounded-lg bg-white hover:bg-[#1877F2] hover:text-white cursor-pointer transform hover:scale-110 transition-all duration-300">
              <FaFacebook size={14} />
            </div>
            <div className="p-2 rounded-lg bg-white hover:bg-[#E4405F] hover:text-white cursor-pointer transform hover:scale-110 transition-all duration-300">
              <FaInstagram size={14} />
            </div>
            <div className="p-2 rounded-lg bg-white hover:bg-[#1DA1F2] hover:text-white cursor-pointer transform hover:scale-110 transition-all duration-300">
              <FaTwitter size={14} />
            </div>
            <div className="p-2 rounded-lg bg-white hover:bg-[#FF0000] hover:text-white cursor-pointer transform hover:scale-110 transition-all duration-300">
              <FaYoutube size={14} />
            </div>
          </div>
          <p className="text-white text-xs mt-3">
            © Real Estate. All Rights Reserved.
          </p>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-lg md:text-2xl font-semibold">
            Contact Us
          </h1>
          <div className="flex gap-2 items-start">
            <FaBuilding className="text-white mt-1 flex-shrink-0" size={18} />
            <p className="text-slate-200 text-sm leading-relaxed">
              10845 Griffith Peak Dr, Las Vegas, NV 89135
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <FaMobile className="text-white flex-shrink-0" size={18} />
            <p className="text-slate-200 text-sm">+91 879 098 8001</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaFax className="text-white flex-shrink-0" size={18} />
            <p className="text-slate-200 text-sm">+91 123 678 0912</p>
          </div>
          <div className="flex gap-2 items-center">
            <IoMdMail className="text-white flex-shrink-0" size={18} />
            <p className="text-slate-200 text-sm">office52@gmail.com</p>
          </div>
        </div>

        {/* Latest Properties */}
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-lg md:text-2xl font-semibold">
            Latest Properties
          </h1>
          <div className="flex items-center gap-3">
            <img
              src={prop7}
              alt="Villa with amazing view"
              className="w-12 h-10 md:w-20 md:h-16 rounded-md object-cover flex-shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <div className="flex flex-col gap-0.5">
              <h3 className="text-white text-sm font-medium leading-tight">
                Villa with amazing view
              </h3>
              <p className="text-slate-300 text-xs">$ 278.98</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={prop8}
              alt="Sea View Villa"
              className="w-12 h-10 md:w-20 md:h-16 rounded-md object-cover flex-shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <div className="flex flex-col gap-0.5">
              <h3 className="text-white text-sm font-medium leading-tight">
                Sea View Villa
              </h3>
              <p className="text-slate-300 text-xs">$ 789.23</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isVisible && (
        <Link to="home" spy={true} smooth={true} offset={-100}>
          <button
            className="fixed bottom-4 right-6 p-4 bg-red-600 text-white rounded-full shadow-lg dark:hover:bg-white dark:hover:text-black hover:bg-black lg:bottom-12 transition-colors duration-300 z-50"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={20} />
          </button>
        </Link>
      )}

      {/* Dark Mode Toggle */}
      <div className="fixed top-20 right-6 z-50">
        <button
          onClick={toggleDarkMode}
          className={`flex items-center p-3 rounded-full duration-300 transition-colors shadow-md ${
            darkMode ? "bg-red-500" : "bg-red-600"
          }`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <FaMoon size={25} className="text-white" />
          ) : (
            <FaSun size={25} className="text-[#F9AD3A]" />
          )}
        </button>
      </div>
    </>
  );
}

export default Footer;
