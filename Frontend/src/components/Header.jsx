import { Link } from "react-router-dom";
import { IoSunnyOutline, IoSunnySharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [moon, setMoon] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMoon = () => {
    setMoon(!moon);
    // localStorage logic commented out
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`p-4 px-4 z-10 md:px-24 transition-transform duration-300 ${
        isScroll ? "sticky top-0 shadow-md bg-gray-100" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">BookStore</h1>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="hover:text-pink-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/books" className="hover:text-pink-500">
                    Books
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-pink-500">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-pink-500">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
            <div>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search..."
                className="p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>

          <div className="flex space-x-4 items-center">
            <div>
              {!moon ? (
                <IoSunnyOutline
                  className="text-2xl cursor-pointer"
                  onClick={handleMoon}
                />
              ) : (
                <IoSunnySharp
                  className="text-2xl cursor-pointer"
                  onClick={handleMoon}
                />
              )}
            </div>
            <div>
              <Link
                to="/login"
                className="border-2 border-pink-500 rounded-xl px-2"
              >
                Login
              </Link>
            </div>

            <div className="md:hidden">
              <FaBars
                className="cursor-pointer text-2xl"
                onClick={toggleMenu}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-gray-800 text-white z-50 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center mt-10">
          <FaTimes
            className=" text-3xl absolute top-4 right-4 cursor-pointer"
            onClick={toggleMenu}
          />
          <nav className="mt-10">
            <ul className="space-y-4">
              <li>
                <Link to="/" className=" text-2xl" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className=" text-2xl" onClick={toggleMenu}>
                  Course
                </Link>
              </li>
              <li>
                <Link to="/" className=" text-2xl" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className=" text-2xl" onClick={toggleMenu}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              name="search"
              id="mobile-search"
              placeholder="Search..."
              className="p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button className="rounded-md bg-white text-black h-10">
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
