import React from 'react'
import school2 from '../../assets/school1.jpg'

const About = () => {
  return (
    <div className="container ">
          <div className='w-full h-[650px] flex flex-row pt-20'>
          <div className='flex-col relative left-32 top-14 max-h-[400px]'>
          <span className='text-black font-bold'>Our Program</span><br></br>
          <p className='text-black font-bold pt-12 '>The Antariskhya School Inspire learning with <br></br> limitless possiblities</p>
          <p className='text-black w-[500px] pt-6 '> lorem Epsum lorem Epsum Akrith lorem Akriti lorem Epsum Akrith lorem. lorem Epsum lorem Epsum Akrith lorem Akriti lorem Epsum Akrith lorem.lorem Epsum lorem Epsum Akrith lorem Akriti lorem Epsum Akrith lorem.lorem Epsum lorem Epsum Akrith lorem Akriti lorem Epsum Akrith lorem.lorem Epsum lorem Epsum Akrith lorem Akriti lorem Epsum Akrith lorem</p>

          <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none relative top-10">
           Read More
          </button>
          </div>
      
          <div className='flex relative left-[300px] '>
          <img className=' h-[500px] rounded-lg py-2' src={school2} alt="" />
          </div>
        </div>
    </div>
  
  )
}

export default About