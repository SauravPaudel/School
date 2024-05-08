
// import school2 from '../../assets/school1.jpg'
import schoolabout from '../../assets/schoolabout.jpg'
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { FaBuffer } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaDivide } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";


// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper's CSS

// import required modules
import { Autoplay } from 'swiper/modules';
import admission1 from '../../assets/admission1.png'
import admission2 from '../../assets/admission2.png'
import admission3 from '../../assets/admission3.png'
import admission4 from '../../assets/admission4.png'
import admission5 from '../../assets/admission5.png'
import admission6 from '../../assets/admission6.png'
import admission7 from '../../assets/admission7.png'
import admission8 from '../../assets/admission8.png'
import admission9 from '../../assets/admission9.png'
import admission10 from '../../assets/admission10.png'






const routeTo = () => {
  window.scrollTo({
    top:0,

  })
}




const Admission = () => {
  return (
    <div className="container mx-auto overflow-hidden ">
          <div className='w-full h-[650px] flex flex-row pt-20'>
          <div className='flex-col relative left-32 top-14 max-h-[400px]'>
          <span className='text-black font-bold'>Admission</span><br></br>
          <p className='text-black font-bold pt-4 '>Welcome to Annapurna  School Admission</p>
          <p className='text-black w-[500px] pt-6 '> At Annapurna Vidhya Mandir School, the admission process is a seamless and eagerly anticipated event that occurs annually in the month of Baishak. Welcoming students from Nursery to Grade Nine, the school opens its doors to aspiring learners seeking a quality education. Parents and guardians are invited to submit their applications during this period, ensuring a fair and transparent selection process. With a focus on inclusivity and diversity, the school strives to accommodate students from various backgrounds, fostering a rich learning community.</p>


          <Link onClick={routeTo} to="/Home">
          <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none relative top-10">
           Read More
          </button>
             </Link>
          </div>
      
          <div className='flex relative top-10 left-[200px] '>
          <img className=' h-[400px] rounded-lg py-2' src={schoolabout} alt="" />
          </div>
        </div>

        {/* Section Section  */}


        <div className='flex-col  relative left-32 top-14 max-h-[300px] '>
          <span className='text-black font-bold'>Admission</span><br></br>
          <p className='text-black font-bold pt-4 '>Admission Enrollment </p>
          </div>
          

          <div className='h-full   pt-[100px]' >

         <Swiper
    effect={'coverflow'}
         
    grabCursor={true}
    centeredSlides={true}
   
     slidesPerView={'3'}
    spaceBetween={50} 
      loop={true}
      autoplay={{ delay: 2300 }} // Adjust delay as needed
      
    pagination={true}
   //  navigation={true} 
    modules={[ Autoplay]}
   className="w-[1300px] h-[700px]"
   >
    <SwiperSlide className='flex flex-center  h-[100px] w-[150px]'>
      
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg">
          <img
            src={admission1}
            alt="Card 1 Image"
            className="w-full h-60 object-cover rounded-t-lg"
            />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Grade - I</h3>
            <p className="text-gray-700 mb-4">
              Parents who wish to enroll their children in Grade-I must complete and submit the form.
            </p>
            <Link onClick={routeTo} to="/Signup" className="text-red-500 mt-10 flex items-center hover:text-blue-700 transition duration-300">
  Submit your form here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                  />
              </svg>
            </Link>
          </div>
        </div>
                  </SwiperSlide>

        {/* Card 2 */}
        <SwiperSlide className='flex flex-center h-[100px] w-[150px]'>   

        
        <div className="bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg">
          <img
            src={admission2}
            alt="Card 2 Image"
            className="w-full h-60 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Grade - II</h3>
            <p className="text-gray-700 mb-4">
              Parents who wish to enroll their children in Grade-II must complete and submit the form.
            </p>
            <Link onClick={routeTo} to="/Signup" className="text-red-500 mt-10 flex items-center hover:text-blue-700 transition duration-300">
  Submit your form here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
        </SwiperSlide>
        {/* Card 3 */}
        <SwiperSlide className='flex flex-center h-[100px] w-[150px]'>

        
        <div className="bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg">
          <img
            src={admission3}
            alt="Card 2 Image"
            className="w-full h-60 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Grade - III</h3>
            <p className="text-gray-700 mb-4">
              Parents who wish to enroll their children in Grade-III must complete and submit the form.
            </p>
            <Link onClick={routeTo} to="/Signup" className="text-red-500 flex items-center hover:text-blue-700 transition duration-300">
  Submit your form here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
        </SwiperSlide>



        {/* Card 4 */}
        <SwiperSlide className='flex flex-center h-[100px] w-[150px]'>

        
        <div className="bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg">
          <img
            src={admission4}
            alt="Card 2 Image"
            className="w-full h-60 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Grade - IV</h3>
            <p className="text-gray-700 mb-4">
              Parents who wish to enroll their children in Grade-IV must complete and submit the form.
            </p>
            <Link onClick={routeTo} to="/Signup" className="text-red-500 flex items-center hover:text-blue-700 transition duration-300">
  Submit your form here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
        </SwiperSlide>


        {/* Card 5 */}
        <SwiperSlide className='flex flex-center h-[100px] w-[150px]'>
        <div className="bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg">
          <img
            src={admission5}
            alt="Card 2 Image"
            className="w-full h-60 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Grade - V</h3>
            <p className="text-gray-700 mb-4">
              Parents who wish to enroll their children in Grade-V must complete and submit the form.
            </p>
            <Link onClick={routeTo} to="/Signup" className="text-red-500 mt-10 flex items-center hover:text-blue-700 transition duration-300">
  Submit your form here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
        </SwiperSlide>

        {/* Card 6 */}
<SwiperSlide className='flex flex-center h-[100px] w-[150px]'>
        <div className="bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg">
          <img
            src={admission6}
            alt="Card 2 Image"
            className="w-full h-60 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Grade - VI</h3>
            <p className="text-gray-700 mb-4">
              Parents who wish to enroll their children in Grade-VI must complete and submit the form.
            </p>
            <Link onClick={routeTo} to="/Signup" className="text-red-500 flex items-center hover:text-blue-700 transition duration-300">
  Submit your form here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        </SwiperSlide>



        {/* Card 7 */}
        <SwiperSlide className='flex flex-center h-[100px] w-[150px]'>
        <div className="bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg">
          <img
            src={admission7}
            alt="Card 2 Image"
            className="w-full h-60 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Grade - VII</h3>
            <p className="text-gray-700 mb-4">
              Parents who wish to enroll their children in Grade-VII must complete and submit the form.
            </p>
            <Link onClick={routeTo} to="/Signup" className="text-red-500 flex items-center hover:text-blue-700 transition duration-300">
  Submit your form here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
        </SwiperSlide>


        {/* Card 8 */}
        <SwiperSlide className='flex flex-center h-[100px] w-[150px]'>
        <div className="bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg">
          <img
            src={admission8}
            alt="Card 2 Image"
            className="w-full h-60 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Grade - VIII</h3>
            <p className="text-gray-700 mb-4">
              Parents who wish to enroll their children in Grade-VIII must complete and submit the form.
            </p>
            <Link onClick={routeTo} to="/Signup" className="text-red-500 flex items-center hover:text-blue-700 transition duration-300">
  Submit your form here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
        </SwiperSlide>
        {/* Card 9 */}
        <SwiperSlide className='flex flex-center h-[100px] w-[150px]'>
        <div className="bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg">
          <img
            src={admission9}
            alt="Card 2 Image"
            className="w-full h-60 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Grade - IX</h3>
            <p className="text-gray-700 mb-4">
              Parents who wish to enroll their children in Grade-IX must complete and submit the form.
            </p>
            <Link onClick={routeTo} to="/Signup" className="text-red-500 flex items-center hover:text-blue-700 transition duration-300">
  Submit your form here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
        </SwiperSlide>

        {/* Card 10 */}
        <SwiperSlide className='flex flex-center h-[100px] w-[150px]'>
        <div className="bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg">
          <img
            src={admission10}
            alt="Card 3 Image"
            className="w-full h-60 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Grade -X</h3>
            <p className="text-gray-700 mb-4">
              Parents who wish to enroll their children in Grade-X must complete and submit the form.
            </p>
            <Link onClick={routeTo} to="/Signup" className="text-red-500 mt-10 flex items-center hover:text-blue-700 transition duration-300">
  Submit your form here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
        </SwiperSlide>

        </Swiper>
      </div>
   

    {/* Process  */}
    <div className="w-[1350px] mt-[80px] ml-[60px] h-[350px] rounded-2xl bg-[#162545] flex flex-col relative bottom-20 items-center p-8">
  <h2 className="text-white text-2xl font-bold mb-4">ADMISSION PROCESS</h2>
  <h3 className="text-gray-300 text-lg mb-8">Steps for applying in Annapurna Vidhya Mandir</h3>

  <div className="flex justify-center items-center gap-28 mb-4">
    <div className="flex flex-col items-center group">
      <div className="bg-white p-4 rounded-full transition-all duration-300 group-hover:bg-indigo-500">
      <FaAngleDoubleUp className=' w-6 h-6  text-red-400' />
      </div>
      <div className="h-6 rotate-90 w-6 border-r-4 border-dotted border-gray-600"></div>
      <p className="text-gray-300 mt-2">Apply</p>
    
    </div>
    <div className="flex flex-col items-center group">
      <div className="bg-white p-4 rounded-full transition-all duration-300 group-hover:bg-indigo-500">
      <FaBuffer className='w-6 h-6  text-red-400' />
      </div>
      <div className="h-6 rotate-90 w-6 border-r-4 border-dotted border-gray-600"></div>
      <p className="text-gray-300 mt-2">Short listing</p>
    </div>

    <div className="flex flex-col items-center group">
      <div className="bg-white p-4 rounded-full transition-all duration-300 group-hover:bg-indigo-500">
      <FaDivide className='w-6 h-6  text-red-400' />
      </div>
      <div className="h-6 rotate-90 w-6 border-r-4 border-dotted border-gray-600"></div>
      <p className="text-gray-300 mt-2">Exam/Interview</p>
    </div>

    <div className="flex flex-col items-center group">
      <div className="bg-white p-4 rounded-full transition-all duration-300 group-hover:bg-indigo-500">
      <FaRegAddressCard className =" w-6 h-6  text-red-400"/>
      </div>
      <div className="h-6 rotate-90 w-6 border-r-4 border-dotted border-gray-600"></div>
      <p className="text-gray-300 mt-2">Selection</p>
    </div>

    <div className="flex flex-col items-center group">
      <div className="bg-white p-4 rounded-full transition-all duration-300 group-hover:bg-indigo-500">
      <FaUserTie className='w-6 h-5 text-red-400' />
      </div>
      <div className="h-6 rotate-90 w-6 border-r-4 border-dotted border-gray-600"></div>
      <p className="text-gray-300 mt-2">Welcome</p>
    </div>

   
  </div>
</div>

    </div>
  
  )
}

export default Admission