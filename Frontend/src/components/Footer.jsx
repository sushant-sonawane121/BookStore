import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <hr />
      <footer className="w-full shadow-md p-4">
        <div className="flex flex-col items-center space-y-8">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-pink-500">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-pink-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-pink-500">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-pink-500">
                  Press Kit
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex space-x-4">
            <Link to="/">
              <FaTwitter className="text-2xl" />
            </Link>
            <Link to="/">
              <FaYoutube className="text-2xl" />
            </Link>
            <Link to="/">
              <FaInstagram className="text-2xl" />
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <p>
              Developed and Design with ❤️ By -
              <a href="#" className="text-green-500 hover:text-pink-500">
                Sushant Sonawane
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
