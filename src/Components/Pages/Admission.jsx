// import school2 from '../../assets/school1.jpg'
import schoolabout from '../../assets/schoolabout.jpg'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    top: 0,
  })
}

const Admission = () => {
  return (
    <div className="w-full px-[5%] overflow-hidden ">

      {/* Hero Section */}
      <div className='flex flex-col w-full gap-12 my-20 md:flex-row'>
        <div className='flex flex-col w-full gap-4'>
          <span className='font-bold text-black'>Admission</span>
          <p className='font-bold text-black '>Welcome to Annapurna  School Admission</p>
          <p className='text-black'> At Annapurna Vidhya Mandir School, the admission process is a seamless and eagerly anticipated event that occurs annually in the month of Baishak. Welcoming students from Nursery to Grade Nine, the school opens its doors to aspiring learners seeking a quality education. Parents and guardians are invited to submit their applications during this period, ensuring a fair and transparent selection process. With a focus on inclusivity and diversity, the school strives to accommodate students from various backgrounds, fostering a rich learning community.</p>
          <Link onClick={routeTo} to="/Home" className='px-4 py-3 mt-4 text-white bg-gray-800 md:mt-8 w-max rounded-xl hover:bg-gray-700 hover:text-white'>
            Read More
          </Link>
        </div>
        <div className='flex w-full'>
          <img className=' h-[400px] rounded-lg py-2' src={schoolabout} alt="" />
        </div>
      </div>

      {/* Swiper Section  */}
      <div className='flex flex-col gap-12 mb-20'>
        <div className='flex flex-col gap-4 font-bold text-black'>
          <span>Admission</span>
          <p>Admission Enrollment </p>
        </div>
        <div className='max-h-[450px]' >
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
            modules={[Autoplay]}
            className="w-[1300px] h-[700px]"
          >
            <SwiperSlide className='flex flex-center  h-[100px] w-[150px]'>
              {/* Card 1 */}
              <div className="transition duration-300 rounded-lg shadow-md bg-slate-600 hover:shadow-lg">
                <img
                  src={admission1}
                  alt="Card 1 Image"
                  className="object-cover w-full rounded-t-lg h-60"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">Grade - I</h3>
                  <p className="mb-4 text-gray-700">
                    Parents who wish to enroll their children in Grade-I must complete and submit the form.
                  </p>
                  <Link onClick={routeTo} to="/Signup" className="flex items-center mt-10 text-red-500 transition duration-300 hover:text-blue-700">
                    Submit your form here
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-2"
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
              <div className="transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <img
                  src={admission2}
                  alt="Card 2 Image"
                  className="object-cover w-full rounded-t-lg h-60"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">Grade - II</h3>
                  <p className="mb-4 text-gray-700">
                    Parents who wish to enroll their children in Grade-II must complete and submit the form.
                  </p>
                  <Link onClick={routeTo} to="/Signup" className="flex items-center mt-10 text-red-500 transition duration-300 hover:text-blue-700">
                    Submit your form here
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-2"
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
              <div className="transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <img
                  src={admission3}
                  alt="Card 2 Image"
                  className="object-cover w-full rounded-t-lg h-60"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">Grade - III</h3>
                  <p className="mb-4 text-gray-700">
                    Parents who wish to enroll their children in Grade-III must complete and submit the form.
                  </p>
                  <Link onClick={routeTo} to="/Signup" className="flex items-center text-red-500 transition duration-300 hover:text-blue-700">
                    Submit your form here
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-2"
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
              <div className="transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <img
                  src={admission4}
                  alt="Card 2 Image"
                  className="object-cover w-full rounded-t-lg h-60"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">Grade - IV</h3>
                  <p className="mb-4 text-gray-700">
                    Parents who wish to enroll their children in Grade-IV must complete and submit the form.
                  </p>
                  <Link onClick={routeTo} to="/Signup" className="flex items-center text-red-500 transition duration-300 hover:text-blue-700">
                    Submit your form here
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-2"
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
              <div className="transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <img
                  src={admission5}
                  alt="Card 2 Image"
                  className="object-cover w-full rounded-t-lg h-60"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">Grade - V</h3>
                  <p className="mb-4 text-gray-700">
                    Parents who wish to enroll their children in Grade-V must complete and submit the form.
                  </p>
                  <Link onClick={routeTo} to="/Signup" className="flex items-center mt-10 text-red-500 transition duration-300 hover:text-blue-700">
                    Submit your form here
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-2"
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
              <div className="transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <img
                  src={admission6}
                  alt="Card 2 Image"
                  className="object-cover w-full rounded-t-lg h-60"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">Grade - VI</h3>
                  <p className="mb-4 text-gray-700">
                    Parents who wish to enroll their children in Grade-VI must complete and submit the form.
                  </p>
                  <Link onClick={routeTo} to="/Signup" className="flex items-center text-red-500 transition duration-300 hover:text-blue-700">
                    Submit your form here
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-2"
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
              <div className="transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <img
                  src={admission7}
                  alt="Card 2 Image"
                  className="object-cover w-full rounded-t-lg h-60"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">Grade - VII</h3>
                  <p className="mb-4 text-gray-700">
                    Parents who wish to enroll their children in Grade-VII must complete and submit the form.
                  </p>
                  <Link onClick={routeTo} to="/Signup" className="flex items-center text-red-500 transition duration-300 hover:text-blue-700">
                    Submit your form here
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-2"
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
              <div className="transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <img
                  src={admission8}
                  alt="Card 2 Image"
                  className="object-cover w-full rounded-t-lg h-60"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">Grade - VIII</h3>
                  <p className="mb-4 text-gray-700">
                    Parents who wish to enroll their children in Grade-VIII must complete and submit the form.
                  </p>
                  <Link onClick={routeTo} to="/Signup" className="flex items-center text-red-500 transition duration-300 hover:text-blue-700">
                    Submit your form here
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-2"
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
              <div className="transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <img
                  src={admission9}
                  alt="Card 2 Image"
                  className="object-cover w-full rounded-t-lg h-60"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">Grade - IX</h3>
                  <p className="mb-4 text-gray-700">
                    Parents who wish to enroll their children in Grade-IX must complete and submit the form.
                  </p>
                  <Link onClick={routeTo} to="/Signup" className="flex items-center text-red-500 transition duration-300 hover:text-blue-700">
                    Submit your form here
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-2"
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
              <div className="transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <img
                  src={admission10}
                  alt="Card 3 Image"
                  className="object-cover w-full rounded-t-lg h-60"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">Grade -X</h3>
                  <p className="mb-4 text-gray-700">
                    Parents who wish to enroll their children in Grade-X must complete and submit the form.
                  </p>
                  <Link onClick={routeTo} to="/Signup" className="flex items-center mt-10 text-red-500 transition duration-300 hover:text-blue-700">
                    Submit your form here
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-2"
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
      </div>

      {/* Card */}
      <div className="flex flex-col justify-center w-full my-20">
        <div className='bg-[#162545] px-8 py-24 rounded-2xl h-max flex flex-col items-center gap-8'>
          <h2 className="text-2xl font-bold text-white">ADMISSION PROCESS</h2>
          <h3 className="text-lg text-center text-gray-300">Steps for applying in Annapurna Vidhya Mandir</h3>
          <div className="flex flex-col items-center justify-center gap-16 mt-8 md:gap-32 md:flex-row">
            <div className="flex flex-col items-center group">
              <div className="p-4 transition-all duration-300 bg-white rounded-full group-hover:bg-indigo-500">
                <FaAngleDoubleUp className='w-6 h-6 text-red-400 ' />
              </div>
              <div className="w-6 h-6 rotate-90 border-r-4 border-gray-600 border-dotted"></div>
              <p className="mt-2 text-gray-300">Apply</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-4 transition-all duration-300 bg-white rounded-full group-hover:bg-indigo-500">
                <FaBuffer className='w-6 h-6 text-red-400' />
              </div>
              <div className="w-6 h-6 rotate-90 border-r-4 border-gray-600 border-dotted"></div>
              <p className="mt-2 text-gray-300">Short listing</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-4 transition-all duration-300 bg-white rounded-full group-hover:bg-indigo-500">
                <FaDivide className='w-6 h-6 text-red-400' />
              </div>
              <div className="w-6 h-6 rotate-90 border-r-4 border-gray-600 border-dotted"></div>
              <p className="mt-2 text-gray-300">Exam/Interview</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-4 transition-all duration-300 bg-white rounded-full group-hover:bg-indigo-500">
                <FaRegAddressCard className="w-6 h-6 text-red-400 " />
              </div>
              <div className="w-6 h-6 rotate-90 border-r-4 border-gray-600 border-dotted"></div>
              <p className="mt-2 text-gray-300">Selection</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-4 transition-all duration-300 bg-white rounded-full group-hover:bg-indigo-500">
                <FaUserTie className='w-6 h-5 text-red-400' />
              </div>
              <div className="w-6 h-6 rotate-90 border-r-4 border-gray-600 border-dotted"></div>
              <p className="mt-2 text-gray-300">Welcome</p>
            </div>
          </div>
        </div>
      </div>
      {/* End of Card */}

    </div>

  )
}

export default Admission