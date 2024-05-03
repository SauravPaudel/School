import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-[180px] py-12 ">
    <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
      <div className="mb-8 md:mb-0">
        <h2 className="text-white text-2xl font-bold mb-4">About Us</h2>
        <nav className="text-gray-400">
          <ul>
            <li className="mb-2">About ABC</li>
            <li className="mb-2">History</li>
            <li className="mb-2">Board of Trustees</li>
            <li className="mb-2">Philosophy</li>
            <li className="mb-2">Alumni</li>
            <li className="mb-2">Milestone</li>
          </ul>
        </nav>
      </div>
      <div className="mb-8 md:mb-0">
        <h2 className="text-white text-2xl font-bold mb-4">Contact</h2>
        <div className="text-gray-400">
          <p className="mb-2">New Baneshwor, Kathmandu</p>
          <p className="mb-2">GPO Box. 8975, EPC 1477,</p>
          <p className="mb-2">Kathmandu, Nepal</p>
          <p className="mb-2">Phone: 977-1-5678906</p>
          <p className="mb-2">Fax: 977-1-3456789</p>
          <p className="mb-2">Email: info@abc.edu.np</p>
          <p>communication@abc.edu.np</p>
        </div>
      </div>
      <div>
        <h2 className="text-white text-2xl font-bold mb-4">Follow</h2>
        <nav className="text-gray-400">
          <ul>
            <li className="mb-2 flex items-center">
              <i className="fab fa-facebook mr-2"></i>
              Facebook
            </li>
            <li className="mb-2 flex items-center">
              <i className="fab fa-instagram mr-2"></i>
              Instagram
            </li>
            <li className="mb-2 flex items-center">
              <i className="fab fa-twitter mr-2"></i>
              Twitter
            </li>
            <li className="mb-2 flex items-center">
              <i className="fab fa-youtube mr-2"></i>
              Youtube
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
  )
}

export default Footer