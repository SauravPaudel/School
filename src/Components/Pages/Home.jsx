import React from 'react'
import './Home.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import school from '../../assets/school.png'
import school2 from '../../assets/school1.jpg'
import school3 from '../../assets/school3.jpg'

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
      </div>
    </div>

      <div className='bg-slate-100 h-screen w-full pt-10'>
        <div className='text-black absolute'>
          <div className='relative top-16'>
             <span className='inline relative text-2xl font-bold left-[120px] top-20'>Antarikshya <br></br> School</span>
        <div className=''>
        <img className='w-[700px] max-sm:w-[500px] relative left-28 top-24 rounded-lg' src={school2} alt="" />
        </div>
        <p className='text-black max-w-[700px] relative left-28 top-28'>lorem Epsum lorem Epsum Akrith lorem Akriti lorem Epsum Akrith lorem. “lorem Epsum lorem Epsum Akrith “lorem Akriti lorem Epsum Akrith lorem . lorem Epsum lorem Epsum Akrith lorem Akriti lorem Epsum Akrith lorem. “lorem Epsum lorem Epsum Akrith “lorem Akriti lorem Epsum Akrith lorem. lorem Epsum lorem Epsum Akrith lorem Akriti lorem Epsum Akrith lorem. “lorem Epsum lorem Epsum Akrith “lorem Akriti lorem Epsum Akrith lorem</p>
        </div>
        <h1 className='heading4'></h1>
      
        </div>
        <span className='inline relative float-right top-[820px] right-[525px] text-black font-bold'>Read more</span>

        <div className='text-black absolute left-[1000px] '>
        <div className='relative top-20'>
        <img className='w-[600px] max-sm:w-[500px] rounded-lg py-2' src={school3} alt="" />
        </div>
        <div className=' relative top-28'>
        <span className='inline  text-2xl font-bold'>Antarikshya Education Foundation</span>
        <p className='text-black max-w-[600px] text-justify'>lorem Epsum lorem Epsum Akrith lorem Akriti lorem Epsum Akrith lorem. “lorem Epsum lorem Epsum Akrith “lorem Akriti lorem Epsum Akrith lorem . lorem Epsum lorem Epsum Akrith lorem Akriti lorem Epsum Akrith lorem. “lorem Epsum lorem Epsum Akrith “lorem Akriti lorem Epsum Akrith lorem.  lorem Epsum lorem Epsum Akrith lorem Akriti lorem Epsum Akrith lorem. “lorem Epsum lorem Epsum Akrith “lorem Akriti lorem Epsum Akrith lorem. lorem Epsum lorem Epsum Akrith lorem Akriti lorem Epsum Akrith lorem. “lorem Epsum lorem Epsum Akrith “lorem Akriti lorem Epsum Akrith lorem.</p>
        </div>
      
        </div>
        <h1 className='heading3'></h1>
      </div>
      <span className='block relative left-28 bottom-[115px] text-black font-bold'>Read more abour ABC school</span>

        {/* Our Programs  */}
        <div className='bg-slate-400 w-full h-sereen'></div>

  </div>
  )
}

export default Home