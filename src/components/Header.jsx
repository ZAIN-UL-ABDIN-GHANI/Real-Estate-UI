import React, { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";
import { useDarkMode } from "../components/DarkModeContext";

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "properties", path: "properties" },
    { link: "Services", path: "services" },
    { link: "Testimonial", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];
  const handleScroll = (path) => {
    closeMenu();

    if (path === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setTimeout(() => {
      const element = document.getElementById(path);
      if (element) {
        const elementTop = element.offsetTop;
        const headerHeight = 40;
        const desiredGap = 30;
        const scrollToPosition = elementTop - headerHeight - desiredGap;
        window.scrollTo({
          top: Math.max(0, scrollToPosition),
          behavior: "smooth",
        });
      }
    }, 100);
  };
  return (
    <nav
      className={`${
        darkMode ? "dark bg-black text-white" : "light bg-white text-black"
      } w-full justify-between gap-4 top-0 px-4 sticky pb-[12px] left-0 z-30 uppercase`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Real Estate Logo"
              className="lg:w-[150px] w-[120px] dark:invert"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden uppercase gap-8 md:block">
            <div className="ml-10 flex items-baseline space-x-4 rounded-lg cursor-pointer">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleScroll(item.path)}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#F9AD3A] dark:hover:bg-[#034FC3] cursor-pointer transition-colors"
                >
                  {item.link}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4 cursor-pointer">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-[#F9AD3A] dark:text-[#034FC3]" />
              <span className="text-sm font-medium">888-908-9102</span>
            </div>
            <FaUserCircle className="text-2xl text-[#F9AD3A] dark:text-[#034FC3]" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md cursor-pointer dark:hover:bg-[#034FC3] hover:bg-[#F9AD3A] transition-colors"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700 cursor-pointer">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleScroll(item.path)}
                  className="block px-3 py-2 rounded-md text-lg font-medium dark:hover:bg-[#034FC3] hover:bg-[#F9AD3A] cursor-pointer transition-colors"
                >
                  {item.link}
                </div>
              ))}
              <div className="flex items-center px-3 py-2 border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                <FaPhoneAlt className="text-[#F9AD3A] dark:text-[#034FC3]" />
                <span className="text-sm font-medium ml-2">888-908-9102</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
