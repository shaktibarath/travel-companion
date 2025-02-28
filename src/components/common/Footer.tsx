import React from 'react';
import { Link } from 'react-router-dom';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Footer = () => {
  return (
    <footer className="bg-primary-main text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-4">
              <FlightTakeoffIcon className="h-8 w-8" />
              <span className="ml-2 text-lg font-bold tracking-wider">TRAVEL COMPANION</span>
            </div>
            <p className="text-sm text-gray-100 mt-2 max-w-md">
              Find travel buddies for your next adventure to South Asia. Connect with like-minded travelers and explore beautiful destinations together.
            </p>
          </div>
          
          {/* Destinations */}
          <div>
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase mb-4">
              Destinations
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-base text-gray-200 hover:text-white transition-colors duration-200">
                  India
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-200 hover:text-white transition-colors duration-200">
                  Pakistan
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-200 hover:text-white transition-colors duration-200">
                  Bangladesh
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-200 hover:text-white transition-colors duration-200">
                  Sri Lanka
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-200 hover:text-white transition-colors duration-200">
                  Nepal
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-base text-gray-200 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-base text-gray-200 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-200 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-200 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="border-t border-gray-200/20 mt-8 pt-8">
          <p className="text-center text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Travel Companion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
