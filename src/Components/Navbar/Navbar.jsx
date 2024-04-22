import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };
  return (
    <div className="app">
    <nav>
      <div className="max-w-8xl mx-auto bg-[#162545] text-white ">
        <div className="flex mx-auto justify-between w-5/6  ">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16 my-12">
            {/* logo */}
            <div>
              <Link className='flex gap-1 font-bold text-white items-center' to='/Home'> 
              <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                <span>School</span>
              </Link>
              {/* <a
                href="/"
                className="flex gap-1 font-bold text-gray-700 items-center "
              >
                <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                <span>School</span>
              </a> */}
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-8 ">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/Admission">Admission</NavLink>
            <NavLink to="/Faculty">Faculty</NavLink>
            <NavLink to="/Eca">ECA</NavLink>
            <NavLink to="/Notice">Notice</NavLink>
            </div>
          </div>
          {/* secondary */}
          <div className={`flex gap-6 ${darkMode ? 'dark' : ''}`}>
            <div className="hidden sm:flex items-center gap-10">
              <div className="hidden lg:flex items-center gap-2">
              <MoonIcon className={`h-6 w-6 ${darkMode ? 'text-black' : 'text-black'}`} onClick={toggleMode} />
              <SunIcon className={`h-6 w-6 ${darkMode ? 'text-black' : 'text-black'}`} onClick={toggleMode} />
              </div>
              <div>
                <NavLink to ="/Signup">
              <button className={`rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100 ${darkMode ? 'dark:bg-gray-800 dark:text-white' : ''}`}>
            Sign In
          </button>
          </NavLink>
              </div>
            </div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            <a href="#" className="border-l-4 border-gray-600">
              Our School
            </a>
            <a href="#">Results</a>
            <a href="#">Fee</a>
            <a href="#">Class</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
);
}

export default Navbar