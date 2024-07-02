import { Link } from 'react-router-dom';
import style from '../styles/layout.module.css';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-4">R-dev</h2>
            <p className="mb-4 text-lg">Crafting digital experiences beyond imagination.</p>
            <div className="flex gap-4">
              <a href="#" className="text-xl hover:text-gray-300 transition duration-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-xl hover:text-gray-300 transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-xl hover:text-gray-300 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-xl hover:text-gray-300 transition duration-300">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-1 text-right">
            <p className="mb-4">&copy; 2024 <Link to="/" className="underline">R-dev</Link>. All Rights Reserved.</p>
            {/* <p className="mb-4">Designed with <span role="img" aria-label="Love">❤️</span> by R-dev</p> */}
          </div>
        </div>

        {/* Separator */}
        <hr className="border-gray-300 my-8" />

        {/* Additional Info */}
        <div className="text-center text-sm">
          <p className="mb-2">Contact: info@r-dev.com | Phone: +1-123-456-7890</p>
          <p className="mb-2">Address: 123 Main Street, City, Country</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
