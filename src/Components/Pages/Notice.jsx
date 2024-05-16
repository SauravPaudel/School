import React, { useState, useEffect } from 'react';
import school2 from '../../assets/school1.jpg'
import schoolabout from '../../assets/schoolabout.jpg'
import classImage from '../../assets/class.jpg'
import eca4 from '../../assets/eca4.jpg'
import program1 from '../../assets/program1.jpg'
import teachers from '../../assets/teachers.jpg'
import style2 from '../../assets/style2.jpg'
import eca from '../../assets/eca.jpg'
import class2 from '../../assets/class2.jpg'
import { Link } from 'react-router-dom';

import downloadnur from '../../assets/downloadnur.png'
import downloadkg from '../../assets/downloadkg.png'
import download1 from '../../assets/download1.png'
import download2 from '../../assets/download2.png'
import download3 from '../../assets/download3.png'
import download4 from '../../assets/download4.png'
import download5 from '../../assets/download5.png'
import download6 from '../../assets/download6.png'
import download7 from '../../assets/download7.png'
import download8 from '../../assets/download8.png'
import download9 from '../../assets/download9.png'
import download10 from '../../assets/download10.png'

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper's CSS

// import required modules
import { Autoplay } from 'swiper/modules';

const Notice = () => {

  const magazineIssues = [
    {
      date: 'May 20, 2023',
      grade: 'Nursey (E-learning)',
      image: downloadnur,
    },
    {
      date: 'Feb 9, 2023',
      grade: 'Kg (E-learning)',
      image: downloadkg,
    },
    {
      date: 'May 9, 2023',
      grade: 'I (E-learning)',
      image: download1,
    },
    {
      date: 'June 14, 2023',
      grade: 'II (E-learning)',
      image: download2,
    },
    {
      date: 'Oct 9, 2023',
      grade: 'III (E-learning)',
      image: download3,
    },
    {
      date: 'Sept 9, 2023',
      grade: 'IV (E-learning)',
      image: download4,
    },
    {
      date: 'Jan 9, 2023',
      grade: 'V (E-learning)',
      image: download5,
    },
    {
      date: 'Feb 9, 2023',
      grade: 'VI (E-learning)',
      image: download6,
    },
    {
      date: ' 9, 2023',
      grade: 'VII (E-learning)',
      image: download7,
    },
    {
      date: 'June 9, 2022',
      grade: 'VIII (E-learning)',
      image: download8,
    },
    {
      date: 'Feb 19, 2021',
      grade: 'IX (E-learning)',
      image: download9,
    },
    {
      date: 'Jan 3, 2023',
      grade: 'X (E-learning)',
      image: download10,
    },
  ];

  const events = [
    {
      date: 'Feb 22, 2024',
      title: 'Dance Competition',
      image: eca4,
    },
    {
      date: '11 Nov - 12 Dec, 2023',
      title: 'Annapurna MUN',
      image: program1,
    },
    {
      date: 'Sept 19, 2023',
      title: 'Teacher Parent Meeting',
      image: teachers,
    },
    {
      date: 'Aug 18, 2023',
      title: 'Art Competition',
      image: style2,
    },
    {
      date: 'July 1 - July 7, 2023',
      title: 'Sports Week',
      image: eca,
    },
    {
      date: 'June 15, 2023',
      title: 'Quiz Competition',
      image: class2,
    },
  ];

  const routeTo = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <>
      {/* Hero Section */}
      <div className="w-full px-[5%] overflow-hidden mt-[120px]">
        <div className='flex flex-col w-full gap-12 mt-20 md:flex-row'>
          <div className='flex flex-col w-full gap-4'>
            <span className='font-bold text-black'>Notice , Publication And Calendar</span>
            <p className='font-bold text-black '>Notice and Publication</p>
            <p className='text-black'>
              Each occasion at Annapurna Vidhya Mandir School is marked by happiness and the commencement of fresh opportunities for learning. Our school's notice board is like a big billboard where we put up all the important stuff. It tells everyone about events, school schedules, fun activities, and even the cool things students achieve. Teachers make sure to keep it updated so everyone, including students, teachers, and parents, knows what's happening in our school. It's kind of like our school's big news center, making sure everyone feels connected.
            </p>
            <Link onClick={routeTo} to="/Home" className='px-4 py-3 mt-4 text-white bg-gray-800 md:mt-8 w-max rounded-xl hover:bg-gray-700 hover:text-white'>
              View Newsletters
            </Link>
          </div>
          <div className='flex w-full'>
            <img className=' h-[400px] rounded-lg py-2' src={schoolabout} alt="" />
          </div>
        </div>
      </div>
      {/* End of Hero Section */}

      {/* Downloads */}
      <div className="py-16">
        <div className="w-full px-[5%]">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="bg-clip-text text-transparent bg-[#162545]">
                Magazine
              </span>
              <span className="text-[#162545]"> - Learning Lens</span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-black">
              Learning lens, the school's yearly literary magazine, stands out for its inclusive nature, as every student
              from Grades I to X contributes to its content. Reflecting the Antarikshya curriculum, Learning Lens
              showcases a wide array of creative works from across the school community.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {magazineIssues.map((issue, index) => (
              <div key={index} className="overflow-hidden shadow bg-navy-800 sm:rounded-lg">
                <div className="flex flex-col items-center px-4 py-5 sm:px-6">
                  <div className="bg-[#162545] rounded-lg p-6 flex itesm-center justify-center w-max sm:w-full">
                    <img
                      className="h-[180px] w-[200px]  object-cover"
                      src={issue.image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center w-full gap-8 mt-8">
                    <h3 className="text-lg font-medium leading-6 text-center text-black sm:text-start">{issue.grade}</h3>
                    <button
                      type="button"
                      className="flex items-center px-4 py-2 text-base font-medium text-white bg-teal-600 border border-transparent rounded-md shadow-sm w-max hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Download
                    </button>
                  </div>
                  <div className="flex justify-between mt-4">
                    <span className="text-sm text-gray-500">{issue.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End of Downloads */}

      {/* Recent Events */}
      <div className="w-full px-[5%] mt-20">
        <span className='text-2xl font-bold text-black'>Recent Events</span><br></br>
        <div className="py-20 mx-auto bg-gray-900 px-[5%] mt-12 rounded-3xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {events.map((event, index) => (
              <div key={index} className="overflow-hidden bg-gray-800 rounded-lg shadow-lg">
                <img
                  className="object-cover w-full h-48"
                  src={event.image}
                  alt={event.title}
                />
                <div className="p-4">
                  <div className="mb-2 font-bold text-white">{event.title}</div>
                  <p className="text-sm text-gray-400">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default Notice