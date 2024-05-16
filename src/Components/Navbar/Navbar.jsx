
import React from 'react'
import logo from '../../assets/logo.png'
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
  const handleLinkClick = () => {
    // Close the menu when a NavLink is clicked
    window.scrollTo({ top: 0 });
    setToggleMenu(false);
  };
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const toTop = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="app">
      <marquee behavior="" direction="" className='fixed bg-[#0a1122] z-20 top-0'>
        <ul className="z-20 flex gap-4 py-2 text-white list-disc">
          <li className='pr-4'>Admission are open from Class one to Eight. </li>
          <li className='pr-4'>Admission are open from Class one to Eight. </li>
          <li className='pr-4'>Admission are open from Class one to Eight. </li>
          <li className='pr-4'>Admission are open from Class one to Eight. </li>
          <li className='pr-4'>Admission are open from Class one to Eight. </li>
         
        </ul>
      </marquee>
      <nav>
        <div className="text-white">
          <div className="flex justify-between w-full px-[5%] fixed top-[40px] bg-[#162545] z-20">
            {/* Primary Menu and Logo */}
            <div className="flex items-center gap-12">
              {/* logo */}
              <div>
                <Link className='flex items-center gap-1 font-bold text-white hover:text-white' to='/Home'>
                  <img className='w-20 h-20' src={logo} alt="Logo" />
                  <span>Shree Annapurna Vidhya Mandir</span>
                </Link>
              </div>
              {/* primary */}
              <div className="hidden gap-8 lg:flex ">
                <NavLink onClick={toTop} to="/Home">Home</NavLink>
                <NavLink onClick={toTop} to="/Admission">Admission</NavLink>
                <NavLink onClick={toTop} to="/Faculty">Faculty</NavLink>
                <NavLink onClick={toTop} to="/Eca">ECA</NavLink>
                <NavLink onClick={toTop} to="/Notice">Notice</NavLink>
                <NavLink onClick={toTop} to="/About">About</NavLink>
              </div>
            </div>
            {/* Secondary Menu*/}
            <div className={`flex gap-6`}>
              <div className="items-center hidden gap-10 sm:flex">
                <div className="items-center hidden gap-2 lg:flex">
                  <MoonIcon className={`h-6 w-6  'text-black' : 'text-black'}`} onClick={toggleMode} />
                  <SunIcon className={`h-6 w-6  'text-black' : 'text-black'}`} onClick={toggleMode} />
                </div>
                <div>
                  <NavLink to="/Signup">
                    <button className={`rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100 ${darkMode ? 'dark:bg-gray-800 dark:text-white' : ''}`}>
                      Contact
                    </button>
                  </NavLink>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="flex items-center lg:hidden">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed mt-[120px] z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"
            }`}
        >
          <div className="px-8 py-6">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <NavLink to="/Home" onClick={handleLinkClick}>Home</NavLink>
              <NavLink to="/Admission" onClick={handleLinkClick}>Admission</NavLink>
              <NavLink to="/Faculty" onClick={handleLinkClick}>Faculty</NavLink>
              <NavLink to="/Eca" onClick={handleLinkClick}>ECA</NavLink>
              <NavLink to="/Notice" onClick={handleLinkClick}>Notice</NavLink>
              <NavLink to="/About" onClick={handleLinkClick}>About</NavLink>
              <NavLink to="/Signup" onClick={handleLinkClick}>Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar