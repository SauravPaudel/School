import React from 'react'
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

const Footer = () => {

  const routeTo = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <footer className="mt-24 pt-12 pb-4 bg-gray-900 px-[5%] gap-12 flex flex-col w-full">
      <div className='flex flex-col justify-between w-full gap-8 md:gap-24 md:flex-row'>
        <div className="flex flex-col justify-start md:gap-28 md:flex-row">
          <div className="mb-8 md:mb-0">
            <h2 className="mb-4 text-2xl font-bold text-white">About Us</h2>
            <nav className="text-gray-400">
              <ul>
                <li className="mb-2">
                  <Link onClick={routeTo} to="/Home" className="transition duration-300 hover:text-red-800">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link onClick={routeTo} to="/About " className="transition duration-300 hover:text-red-800">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link onClick={routeTo} to="/Admission" className="transition duration-300 hover:text-red-800">
                    Admission
                  </Link></li>
                <li className="mb-2">
                  <Link onClick={routeTo} to="/Faculty" className="transition duration-300 hover:text-red-800">
                    Faculty
                  </Link></li>
                <li className="mb-2">
                  <Link onClick={routeTo} to="/Eca" className="transition duration-300 hover:text-red-800">
                    Eca
                  </Link></li>
                <li className="mb-2">
                  <Link onClick={routeTo} to="/Notice" className="transition duration-300 hover:text-red-800">
                    Notice
                  </Link></li>
              </ul>
            </nav>
          </div>
          <div className="mb-8 md:mb-0">
            <h2 className="mb-4 text-2xl font-bold text-white">Contact</h2>
            <div className="text-gray-400">
              <p className="mb-2 transition duration-300 hover:text-red-800">Banganga 05, kapilvastu</p>
              <p className="mb-2 transition duration-300 hover:text-red-800">GPO Box. 8975, EPC 1477,</p>
              <p className="mb-2 transition duration-300 hover:text-red-800">Phone: +977-985-7055181</p>
              <p className="mb-2 transition duration-300 hover:text-red-800">Email:avm2058@gmail.com</p>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-white">Follow</h2>
            <nav className="text-gray-400">
              <ul>
                <li className="flex items-center mb-2 transition duration-300 hover:text-red-800">
                  <i className="mr-2 fab fa-facebook"></i>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
                <li className="flex items-center mb-2 transition duration-300 hover:text-red-800">
                  <i className="mr-2 fab fa-instagram"></i>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li className="flex items-center mb-2 transition duration-300 hover:text-red-800">
                  <i className="mr-2 fab fa-twitter"></i>
                  <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
                <li className="flex items-center mb-2 transition duration-300 hover:text-red-800">
                  <i className="mr-2 fab fa-youtube"></i>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    Youtube
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='flex items-center justify-center py-8 md"py-0'>
          <h5 className='text-3xl font-semibold text-center text-white'>Social Transformation Through Quality Education</h5>
        </div>
      </div>
      <p className='flex flex-col items-center justify-center w-full text-center text-white md:flex-row'>
        <p className='flex items-center'>Copyright ©2024 All rights reserved <span className='hidden px-2 md:block'>|</span> </p>
        <p className='flex items-center pl-1'>This Website is made with <span className='px-2'> <FaHeart /> </span> by ANTARIKSHYA</p>
      </p>
    </footer>
  )
}

export default Footer