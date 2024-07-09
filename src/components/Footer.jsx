// Footer.jsx
import React from 'react';
import { SectionWrapper } from '../hoc';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl mb-6">Follow Us</h1>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" className="group">
            <i className="fab fa-facebook-f text-3xl group-hover:text-blue-500"></i>
          </a>
          <a href="https://instagram.com" className="group">
            <i className="fab fa-instagram text-3xl group-hover:text-pink-500"></i>
          </a>
          <a href="https://twitter.com" className="group">
            <i className="fab fa-twitter text-3xl group-hover:text-blue-400"></i>
          </a>
          <a href="https://github.com" className="group">
            <i className="fab fa-github text-3xl group-hover:text-gray-300"></i>
          </a>
          <a href="https://linkedin.com" className="group">
            <i className="fab fa-linkedin-in text-3xl group-hover:text-blue-600"></i>
          </a>
        </div>
        <p className="mt-6 text-gray-400">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer," ") ;
