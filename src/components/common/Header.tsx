import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <RouterLink to="/" className="flex items-center">
              <FlightTakeoffIcon className="h-10 w-10 text-primary-main" />
              <span className="ml-2 text-xl font-bold tracking-wider text-primary-main hidden md:block">
                TRAVEL COMPANION
              </span>
            </RouterLink>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-6">
            <RouterLink 
              to="/" 
              className="text-gray-700 hover:text-primary-main px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </RouterLink>
            <RouterLink 
              to="/about" 
              className="text-gray-700 hover:text-primary-main px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About Us
            </RouterLink>
            <RouterLink 
              to="/profile" 
              className="text-gray-700 hover:text-primary-main px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Create Profile
            </RouterLink>
            <RouterLink 
              to="/dashboard" 
              className="text-gray-700 hover:text-primary-main px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Find Companions
            </RouterLink>
            <RouterLink 
              to="/travel-form" 
              className="btn-primary"
            >
              Plan Trip
            </RouterLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button"
              className="text-gray-500 hover:text-primary-main focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-light"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <CloseIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <RouterLink
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-main hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </RouterLink>
            <RouterLink
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-main hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </RouterLink>
            <RouterLink
              to="/profile"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-main hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Create Profile
            </RouterLink>
            <RouterLink
              to="/dashboard"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-main hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Companions
            </RouterLink>
            <RouterLink
              to="/travel-form"
              className="block px-3 py-2 text-base font-medium bg-primary-main text-white hover:bg-primary-dark rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Plan Trip
            </RouterLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
