import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-black">
      <div className="container mx-5 flex justify-between">
        <nav className="flex">
          <NavLink  to="/" exact activeClassName="text-yellow-100" className='inflex-flex items-center py-6 text-white'>
            Sujith
          </NavLink>
          <NavLink to="/post" className='inflex-flex items-center mr-3 px-3 py-6 text-white' activeClassName="text-yellow-100">Blog Posts</NavLink>
          <NavLink to="/about" className='inflex-flex items-center mr-3 px-3  py-6 text-white' activeClassName="text-yellow-100">About</NavLink>
          <NavLink to="/project" className='inflex-flex items-center mr-3 px-3 py-6 text-white' activeClassName="text-yellow-100">Projects</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
