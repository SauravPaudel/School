// this is the page for about us 

import bus from '../../assets/bus.png'
import Library1 from '../../assets/Library1.png'
import Library2 from '../../assets/Library2.png'
import canteen from '../../assets/canteen.png'
import Lab1 from "../../assets/Lab1.png"
import Lab2 from "../../assets/Lab2.png"

import React, { useEffect, useState } from 'react';
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper's CSS

// import required modules
import {  EffectCoverflow, Pagination } from 'swiper/modules';


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

    
    <div className='container mx-auto pt-2'>
      <div className='relative h-[200px] w-full bg-blue-950'>
      <div className='absolute flex flex-col items-center justify-center text-7xl text-white font-bold ml-[350px] mt-[50px]'>
      Annapurna Vidhya  Mandir
        </div>
       

      </div>
        <p className='text-blue-900 text-xl font-bold  pt-12 mb-4 ml-[150px] ' style={{ maxWidth: '1220px', wordWrap: 'break-word' }}>
     
        Welcome to Annapurna Vidhya Mandir School, where excellence in education meets holistic development. Established with a vision to nurture young minds and empower them to become confident, compassionate, and responsible global citizens, Annapurna Vidhya Mandir School has been a beacon of academic excellence and character development for [number] years.
<span className="pt-4" style={{ display: 'block', width: '50%' }}></span>
At Annapurna Vidhya Mandir School, we believe in providing a comprehensive educational experience that goes beyond textbooks and classrooms. Our dedicated team of educators is committed to fostering a nurturing learning environment where students feel inspired to explore, innovate, and excel in all aspects of their academic journey.
</p>

<div className='relative h-full  pt-[50px]' >

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
         modules={[  EffectCoverflow, Pagination]}
        className="w-full h-full"
        >
         <SwiperSlide className='w-300 h-300 bg-center bg-cover'>
          <img className='block w-full' src={Library1} />
        </SwiperSlide>
        <SwiperSlide className='w-300 h-300 bg-center bg-cover'>
          <img className='block w-full'  src={Library2} />
        </SwiperSlide>
        <SwiperSlide className='w-300 h-300 bg-center bg-cover'>
          <img className='block w-full'  src={bus} />
        </SwiperSlide>
        <SwiperSlide className='w-300 h-300 bg-center bg-cover'>
          <img className='block w-full'  src={canteen} />
        </SwiperSlide>
        <SwiperSlide className='w-300 h-300 bg-center bg-cover'>
          <img className='block w-full'  src={Lab1} />
        </SwiperSlide>
        <SwiperSlide className='w-300 h-300 bg-center bg-cover'>
          <img className='block w-full'  src={Lab2} />
        </SwiperSlide>
        
        
        
      </Swiper>
</div>

<div className='pt-12 mx-auto'>

<div className='relative h-[200px] ml-[-80px] w-[1690px]  bg-blue-950'>
      <div className='absolute flex flex-col items-center justify-center text-4xl text-white font-bold ml-[440px] mt-[50px]'>
      The focus must always be in learning.
      <span className="pt-4" style={{ display: 'block', width: '50%' }}></span>
 The fundamental tool for that is collaboration.
        </div>
</div>

{/* our vision */}
<div className='w-full h-[650px]   flex flex-row pt-20'>
<div className='flex-col relative top-14 max-h-[400px] '>
      <span className='text-blue-800 font-bold text-4xl'>Our Vision</span>
      <div className="h-[3px] w-[80px] bg-blue-800  ml-[230px] mt-[-18px]"></div>
      <p className='flex-col text-black text-xl  w-[400px] font-bold pt-12 '>Our vision is to cultivate a vibrant learning community where every student is inspired to reach their fullest potential. We envision a school where creativity, critical thinking, and collaboration are nurtured, empowering our students to become lifelong learners and compassionate leaders in a rapidly changing world.</p>

        </div>

      
          <div className='flex relative left-[650px] '>
          <img className=' h-[500px] rounded-lg py-2' src={Lab1} alt="" />
          </div>
        </div>



       {/* our mission */}
       
       <div className='w-full h-[650px] flex flex-row pt-20'>

       <div className='flex-col relative  top-14 max-h-[400px] ml-[-20px] '>
          <img className=' h-[500px] rounded-lg py-2' src={Lab2} alt="" />
          </div>

          <div className='flex relative left-[650px] mt-[150px]'>
  <span className='text-blue-800 font-bold text-4xl'>Our Mission</span>
  <div className="h-[5px] w-[80px] bg-blue-800  ml-[-330px] mt-4"></div>
  <p className='flex-col text-black text-xl  w-[400px] font-bold pt-20'>Our mission is to provide a transformative educational experience that prepares students to excel academically, embrace diversity, and contribute positively to their communities and the world.

We are committed to fostering a dynamic learning environment where innovation, inquiry, and critical thinking are encouraged.</p>
</div>






       </div>


       

      
      





      </div>
    </div>
  )
}

export default About