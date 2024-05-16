import bus from '../../assets/style.jpg'
import Library1 from '../../assets/program2.jpg'
import Library2 from '../../assets/students.jpg'
import canteen from '../../assets/teachers.jpg'
import Lab1 from "../../assets/eca4.jpg"
import Lab2 from "../../assets/class.jpg"
import React, { useEffect, useState } from 'react';
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper's CSS

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const About = () => {

  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth >= 768 ? 2 : 1);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth >= 768 ? 2 : 1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <div className='w-full px-[5%] mt-[120px] overflow-hidden'>

        <div className='relative w-full py-20 text-black'>
          <div className='flex flex-col items-center justify-center text-5xl font-bold text-center text-black md:text-7xl'>
            Shree Annapurna Vidhya Mandir
          </div>
        </div>

        <p className='pb-20 text-xl text-justify text-blue-900'>
          Welcome to Annapurna Vidhya Mandir School, where excellence in education meets holistic development. Established with a vision to nurture young minds and empower them to become confident, compassionate, and responsible global citizens, Annapurna Vidhya Mandir School has been a beacon of academic excellence and character development for 25 years.
          <br /><br />
          At Annapurna Vidhya Mandir School, we believe in providing a comprehensive educational experience that goes beyond textbooks and classrooms. Our dedicated team of educators is committed to fostering a nurturing learning environment where students feel inspired to explore, innovate, and excel in all aspects of their academic journey.
        </p>

        <div className='relative h-full' >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 1700,
              disableOnInteraction: false,
            }}
            slidesPerView={'3'}
            spaceBetween={50}
            loop={true}

            pagination={true}
            //  navigation={true} 
            modules={[EffectCoverflow, Pagination]}
            className="w-full h-full"
          >
            <SwiperSlide className='bg-center bg-cover w-300 h-300'>
              <img className='block w-full' src={Library1} />
            </SwiperSlide>
            <SwiperSlide className='bg-center bg-cover w-300 h-300'>
              <img className='block w-full' src={Library2} />
            </SwiperSlide>
            <SwiperSlide className='bg-center bg-cover w-300 h-300'>
              <img className='block w-full' src={bus} />
            </SwiperSlide>
            <SwiperSlide className='bg-center bg-cover w-300 h-300'>
              <img className='block w-full' src={canteen} />
            </SwiperSlide>
            <SwiperSlide className='bg-center bg-cover w-300 h-300'>
              <img className='block w-full' src={Lab1} />
            </SwiperSlide>
            <SwiperSlide className='bg-center bg-cover w-300 h-300'>
              <img className='block w-full' src={Lab2} />
            </SwiperSlide>
          </Swiper>
        </div>

      </div>
      {/* Banner */}
      <div className='w-full pt-20'>
        <div className='w-full py-12 md:py-20 bg-blue-950'>
          <div className='flex flex-col items-center justify-center text-xl font-bold text-white md:text-4xl'>
            The focus must always be in learning.
            <span className="pt-4" style={{ display: 'block', width: '50%' }}></span>
            The fundamental tool for that is collaboration.
          </div>
        </div>
      </div>
      {/* Mission & Vision */}
      <div className="flex flex-col w-full px-[5%]">
        {/* our vision */}
        <div className='flex flex-col w-full gap-24 pt-20 md:flex-row'>
          <div className='flex-col flex max-h-[400px] justify-center flex-grow w-full'>
            <span className='text-4xl font-bold text-blue-800'>Our Vision</span>
            <div className="h-[3px] w-[80px] bg-blue-800  ml-[230px] mt-[-18px]"></div>
            <p className='flex-col pt-12 text-xl text-black '>Our vision is to cultivate a vibrant learning community where every student is inspired to reach their fullest potential. We envision a school where creativity, critical thinking, and collaboration are nurtured, empowering our students to become lifelong learners and compassionate leaders in a rapidly changing world.</p>
          </div>
          <div className='flex w-full'>
            <img className=' h-[500px] rounded-lg py-2 object-center object-cover ' src={Lab1} alt="" />
          </div>
        </div>
        {/* our mission */}
        <div className='flex flex-col w-full gap-24 pt-20 md:flex-row'>
          <div className='flex-col flex max-h-[400px] justify-center flex-grow w-full md:order-2'>
            <span className='text-4xl font-bold text-blue-800'>Our Mission</span>
            <div className="h-[3px] w-[80px] bg-blue-800  ml-[230px] mt-[-18px]"></div>
            <p className='flex-col pt-12 text-xl text-black '>Our mission is to provide a transformative educational experience that prepares students to excel academically, embrace diversity, and contribute positively to their communities and the world.We are committed to fostering a dynamic learning environment where innovation, inquiry, and critical thinking are encouraged.</p>
          </div>
          <div className='flex w-full md:order-1'>
            <img className=' h-[500px] rounded-lg py-2 object-center object-cover ' src={Lab2} alt="" />
          </div>
        </div>
      </div>
    </>

  )
}

export default About