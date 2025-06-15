import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Lawns All Day</h3>
            <p className="text-gray-400">Professional Lawn Care Services</p>
          </div>
          <div className="flex space-x-6">
            <a href="#services" className="hover:text-green-400 transition">Services</a>
            <a href="#about" className="hover:text-green-400 transition">About</a>
            <a href="#contact" className="hover:text-green-400 transition">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 Lawns All Day. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;