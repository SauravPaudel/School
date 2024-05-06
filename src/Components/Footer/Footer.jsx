import React from 'react'
import { Link} from 'react-router-dom';

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
  <Link onClick={routeTo} to="/About" className="hover:text-red-800 transition duration-300">
    About ABC
  </Link>
</li>
            <li className="mb-2">
              
  <Link onClick={routeTo} to="/Home" className="hover:text-red-800 transition duration-300">

              History
  </ Link>
              </li>

            <li className="mb-2">
            <Link onClick={routeTo} to="/Notice" className="hover:text-red-800 transition duration-300">
              Board of Trustees
              </Link></li>

            <li className="mb-2">
            <Link onClick={routeTo} to="/Faculty" className="hover:text-red-800 transition duration-300">
              Philosophy
              </Link></li>
            <li className="mb-2">
            <Link onClick={routeTo} to="/Eca" className="hover:text-red-800 transition duration-300">
              Alumni
              </Link></li>
            <li className="mb-2">
            <Link onClick={routeTo} to="/Home" className="hover:text-red-800 transition duration-300">
              Milestone
              </Link></li>
          </ul>
        </nav>
      </div>
      <div className="mb-8 md:mb-0">
        <h2 className="text-white text-2xl font-bold mb-4">Contact</h2>
        <div className="text-gray-400">
          <p className="mb-2">Banganga 05, kapilvastu</p>
          <p className="mb-2">GPO Box. 8975, EPC 1477,</p>
          <p className="mb-2">Phone: 977-1-5678906</p>
          <p className="mb-2">Fax: 977-1-3456789</p>
          <p className="mb-2">Email: info@abc.edu.np</p>
        </div>
      </div>
      <div>
        <h2 className="text-white text-2xl font-bold mb-4">Follow</h2>
        <nav className="text-gray-400">
          <ul>
           <li className="mb-2 flex items-center">
       <i className="fab fa-facebook mr-2"></i>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
           Facebook
            </a>
            </li>

            <li className="mb-2 flex items-center">
  <i className="fab fa-instagram mr-2"></i>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    Instagram
  </a>
</li>

<li className="mb-2 flex items-center">
  <i className="fab fa-twitter mr-2"></i>
  <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
    Twitter
  </a>
</li>
<li className="mb-2 flex items-center">
  <i className="fab fa-youtube mr-2"></i>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
  Youtube
  </a>
</li>

          </ul>
        </nav>
      </div>
    </div>
  </footer>
  )
}

export default Footer