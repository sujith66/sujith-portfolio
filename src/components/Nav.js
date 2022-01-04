import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  return (
    <header className="bg-slate-100">
      <div className="container mx-auto flex justify-around">
        <nav className="flex">
          <NavLink  to="/"  className='inline-flex items-center mr-3 px-3 py-6 text-black hover:text-yellow-500'>
            Home
          </NavLink>
          <NavLink to="/about"     className='inline-flex items-center mr-3 px-3  py-6 text-black hover:text-yellow-500'>About</NavLink>
          <NavLink to="/project" className='inline-flex items-center mr-3 px-3 py-6 text-black hover:text-yellow-500'>Projects</NavLink>
          <NavLink to="/post" className='inline-flex items-center mr-3 px-3 py-6 text-black hover:text-yellow-500'>Blog Posts</NavLink>
          <NavLink to="/contact" className='inline-flex items-center mr-3 px-3 py-6 text-black hover:text-yellow-500'>Contact</NavLink>
        </nav>
        <div className="py-2 px-2 my-6">
        <SocialIcon className='mr-4' target='_blank' fgColor="#fff"    style={{ height: 25, width: 25 }} url='https://www.youtube.com/channel/UCA0DFzfW3C4KQxpDR7rIMSA'/>
        <SocialIcon className='mr-4' target='_blank' fgColor="#fff"    style={{ height: 25, width: 25 }} url='https://twitter.com/sujj066'/>
        <SocialIcon className='mr-4' target='_blank' fgColor="#fff"    style={{ height: 25, width: 25 }} url='https://www.youtube.com/channel/UCA0DFzfW3C4KQxpDR7rIMSA'/>

        </div>
      </div>
    </header>
  );
};

export default NavBar;
