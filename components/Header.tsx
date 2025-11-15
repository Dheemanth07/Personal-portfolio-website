
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const activeLinkStyle = {
    color: '#1d4ed8',
    textDecoration: 'underline',
    textUnderlineOffset: '6px',
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <ul className="flex space-x-6 md:space-x-8">
          <li>
            <NavLink 
              to="/" 
              className="text-lg font-medium text-gray-600 hover:text-blue-700 transition-colors"
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/bio" 
              className="text-lg font-medium text-gray-600 hover:text-blue-700 transition-colors"
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
            >
              Bio-data
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
