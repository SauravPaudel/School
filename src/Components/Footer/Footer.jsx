import React from 'react'
import { Link} from 'react-router-dom';
import { FaHeart } from "react-icons/fa";





const Footer = () => {
  const routeTo = () => {
    window.scrollTo({
      top:0,
  
    })
  }
  return (
    <footer className="bg-gray-900 mt-[180px] py-12 ">
    <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
      <div className="mb-8 md:mb-0">
        <h2 className="text-white text-2xl font-bold mb-4">About Us</h2>
        <nav className="text-gray-400">
          <ul>
          <li className="mb-2">
  <Link onClick={routeTo} to="/Home" className="hover:text-red-800 transition duration-300">
    Home
  </Link>
</li>
            <li className="mb-2">
              
  <Link onClick={routeTo} to="/About " className="hover:text-red-800 transition duration-300">
About Us
  </ Link>
              </li>

            <li className="mb-2">
            <Link onClick={routeTo} to="/Admission" className="hover:text-red-800 transition duration-300">
             Admission
              </Link></li>

            <li className="mb-2">
            <Link onClick={routeTo} to="/Faculty" className="hover:text-red-800 transition duration-300">
             Faculty
              </Link></li>
            <li className="mb-2">
            <Link onClick={routeTo} to="/Eca" className="hover:text-red-800 transition duration-300">
              Eca
              </Link></li>
            <li className="mb-2">
            <Link onClick={routeTo} to="/Notice" className="hover:text-red-800 transition duration-300">
            Notice
              </Link></li>
          </ul>
        </nav>
      </div>
      <div className="mb-8 md:mb-0">
        <h2 className="text-white text-2xl font-bold mb-4">Contact</h2>
        <div className="text-gray-400">
          <p className="mb-2 hover:text-red-800 transition duration-300">Banganga 05, kapilvastu</p>
          <p className="mb-2 hover:text-red-800 transition duration-300">GPO Box. 8975, EPC 1477,</p>
          <p className="mb-2 hover:text-red-800 transition duration-300">Phone: 977-1-5678906</p>
          <p className="mb-2 hover:text-red-800 transition duration-300">Fax: 977-1-3456789</p>
          <p className="mb-2 hover:text-red-800 transition duration-300">Email: info@abc.edu.np</p>
        </div>
      </div>
      <div>
        <h2 className="text-white text-2xl font-bold mb-4">Follow</h2>
        <nav className="text-gray-400">
          <ul>
           <li className="mb-2 flex items-center hover:text-red-800 transition duration-300">
       <i className="fab fa-facebook mr-2"></i>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
           Facebook
            </a>
            </li>

            <li className="mb-2 flex items-center hover:text-red-800 transition duration-300">
  <i className="fab fa-instagram mr-2"></i>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    Instagram
  </a>
</li>

<li className="mb-2 flex items-center hover:text-red-800 transition duration-300">
  <i className="fab fa-twitter mr-2"></i>
  <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
    Twitter
  </a>
</li>
<li className="mb-2 flex items-center hover:text-red-800 transition duration-300">
  <i className="fab fa-youtube mr-2"></i>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
  Youtube
  </a>
</li>



          </ul>

        </nav>
      </div>
     
    </div>
<<<<<<< HEAD
    <p className=' text-white  mt-8 pt-12 h-8 w-auto flex items-center ml-[450px] '>
          Copyright ©2024 All rights reserved | This Website is made with <i className='fa fa-heart'></i> by ANTARIKSHYA
=======
    <p className=' text-white  mt-8 pt-12 h-8 w-auto flex items-center ml-[400px] '>
          Copyright ©2024 All rights reserved | This Website is made with <span className='w-6  ml-2'> <FaHeart /> </span>  by ANTARIKSHYA
>>>>>>> a877fc60686c5aa9b1be59b6cd5d1efe6de81f9b
        </p>
  </footer>
  )
}

export default Footer