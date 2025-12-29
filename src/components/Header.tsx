import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/web_logo.png';  
const Header: React.FC = () => {
  return (
    <header className="relative z-10 px-2 py-2 bg-white/10 backdrop-blur-sm shadow-lg ">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-20 w-auto object-contain max-w-none"/>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-lightText/80 hover:text-accent transition-colors duration-300">Home</a>
           <Link to={"/about"}>
            <a href="" className="text-lightText/80 hover:text-accent transition-colors duration-300">About</a></Link>
            <Link to={"/service"}>
            <a href="" className="text-lightText/80 hover:text-accent transition-colors duration-300">Service</a></Link>
          <Link to={"/course"}>
            <a href="" className="text-lightText/80 hover:text-accent transition-colors duration-300">Course</a></Link>

          <a href="#blog" className="text-lightText/80 hover:text-accent transition-colors duration-300">Blog</a>
          <Link to={"/contact"}>
            <a href="" className="text-lightText/80 hover:text-accent transition-colors duration-300">Contact</a></Link>
        </div>
             
      </nav>
    </header>
  );
};

export default Header;