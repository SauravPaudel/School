import React from 'react'
import './Home.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import school from '../../assets/school.png'

const Home = () => {
  return (
    <div className="container mx-auto ">
      <h1 className='heading'></h1>
       <div className="flex flex-col justify-center items-center absolute top-[650px]  ">
      <div className="mt-4 flex flex-col space-y-7">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebook className="text-2xl text-black hover:text-blue-500 " />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram className="text-2xl text-gray-700 hover:text-red-500 " />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <FaYoutube className="text-2xl text-gray-700 hover:text-red-500" />
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter className="text-2xl text-gray-700 hover:text-red-500" />
        </a>
      </div>
      <h1 className='heading2'></h1>
    </div>
    
    <div className="flex flex-col md:flex-row sm:justify-center sm:pt-20 items-center py-10 ">
      <div className="flex flex-col gap-4 ">
        <p className="text-4xl relative left-20 sm:text-7xl capitalize font-semibold sm:flex gap-1 ">
          Shree
          <span className="text-purple-500 pl-2 capitalize">Annapurna</span>{" "}
          <br />
          <span className="text-purple-500 pl-2 capitalize">Vidhya</span>{" "}
          Mandir <br />{" "}
        </p>
        <p className='text-1xl relative left-20 text-gray-700 sm:flex sm:text-2xl items-center justify-center'>Dedicate and Transform to Excelence</p>
       <img className='w-[1100px] max-sm:w-[500px] relative left-5' src={school} alt="" />
        {/* <p className="text-lg text-gray-600 sm:flex items-center justify-center">
          Dedicate and Transform to Excelence {" "}
          <br />
          that help your knowledge growing.
        </p>
        <div className="flex gap-4 sm:items-center justify-center">
          <button className="text-lg px-9 py-4 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
            Get Started
          </button>
          <button className="text-lg px-9 py-4 min-w-[120px] text-center text-white bg-red-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring ">
            Notice Board
          </button>
        </div> */}
      </div>
    </div>
  </div>
  )
}

export default Home