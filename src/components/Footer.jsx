// Footer.jsx
import React from 'react';
import { SectionWrapper } from '../hoc';
import { leetcode } from '../assets';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl mb-6">Follow Me</h1>
        <div className="flex justify-center gap-8 space-x-6">
          <a href="https://www.snapchat.com/add/rachitsnp.10?share_id=2ywlOGDSJtc&locale=en-US" className="group">
            <i className="fab fa-snapchat text-3xl group-hover:text-yellow-200"></i>
          </a>
          <a href="https://www.instagram.com/rachitsig.10/" className="group">
            <i className="fab fa-instagram text-3xl group-hover:text-pink-500"></i>
          </a>
          <a href="https://leetcode.com/u/tanzirou/" className="group">
            <img
              src={leetcode}
              alt='leetcode' 

              className='h-8 w-8 group-hover:color-yellow-500' 
            />
          </a>
          <a href="https://github.com/rachitsgh" className="group">
            <i className="fab fa-github text-3xl group-hover:text-gray-300"></i>
          </a>
          <a href="https://www.linkedin.com/in/rachit-pathak-977228236/" className="group">
            <i className="fab fa-linkedin-in text-3xl group-hover:text-blue-600"></i>
          </a>
        </div>
        <p className="mt-6 text-gray-400">© 2024 rachit.life . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer," ") ;
