import React from 'react'
import eca3 from '../../assets/eca3.jpg'
import style from '../../assets/style.jpg'
import style1 from '../../assets/style2.jpg'
import class2 from '../../assets/class2.jpg'
import classImage from '../../assets/class.jpg';
import student5 from '../../assets/student5.jpg'
import eca from '../../assets/eca.jpg'
import eca4 from '../../assets/eca4.jpg'
import student3 from '../../assets/student3.jpg'
import teachersp from '../../assets/teachersp.jpg'
import project from '../../assets/project.jpg'

const Eca = () => {
  return (
    <div className='w-full px-[5%] pt-10 overflow-hidden gap-8 flex flex-col'>

      {/* Heading */}
      <div className='flex-col'>
        <span className='text-2xl font-bold text-black'>Extra Curricular Activities</span>
      </div>

      {/* Gallery */}
      <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        <img className='hover:shadow-custom rounded-xl brightness-[.9] hover:brightness-[.95] shadow-lg duration-300' src={eca4} alt="" />
        <img className='hover:shadow-custom rounded-xl brightness-[.9] hover:brightness-[.95] shadow-lg duration-300' src={class2} alt="" />
        <img className='hover:shadow-custom rounded-xl brightness-[.9] hover:brightness-[.95] shadow-lg duration-300' src={style} alt="" />
        <img className='hover:shadow-custom rounded-xl brightness-[.9] hover:brightness-[.95] shadow-lg duration-300' src={student3} alt="" />
        <img className='hover:shadow-custom rounded-xl brightness-[.9] hover:brightness-[.95] shadow-lg duration-300' src={style1} alt="" />
        <img className='hover:shadow-custom rounded-xl brightness-[.9] hover:brightness-[.95] shadow-lg duration-300' src={student5} alt="" />
        <img className='hover:shadow-custom rounded-xl brightness-[.9] hover:brightness-[.95] shadow-lg duration-300' src={eca3} alt="" />
        <img className='hover:shadow-custom rounded-xl brightness-[.9] hover:brightness-[.95] shadow-lg duration-300' src={teachersp} alt="" />
      </div>

      {/* Heading */}
      <div className='flex-col'>
        <span className='text-2xl font-bold text-black'>Extra Curricular Activities</span>
      </div>

      {/* Clubs */}
      <div className="w-full text-[#162545] grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="w-full">
          <div className="relative">
            <img
              src={teachersp}
              alt="Image 1"
              className="w-[780px] h-[480px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 transition-all duration-300 bg-white rounded-b-lg shadow-lg hover:shadow-xl">
              <h2 className="mb-2 text-lg font-bold">Arts Club</h2>
              <p className="p-2 border border-gray-300 rounded-md">
                The Club collaboratively engages in diverse forms of artistic expression, encompassing presentation and creative displays.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="relative">
            <img
              src={project}
              alt="Image 1"
              className="w-[780px] h-[480px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 transition-all duration-300 bg-white rounded-b-lg shadow-lg hover:shadow-xl">
              <h2 className="mb-2 text-lg font-bold">Research Club</h2>
              <p className="p-2 border border-gray-300 rounded-md">
                This club is closely linked with the science stream, where students are motivated through events.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="relative">
            <img
              src={eca}
              alt="Image 1"
              className="w-[780px] h-[480px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 transition-all duration-300 bg-white rounded-b-lg shadow-lg hover:shadow-xl">
              <h2 className="mb-2 text-lg font-bold">Sports Club</h2>
              <p className="p-2 border border-gray-300 rounded-md">
                The Club collaboratively engages in diverse forms of artistic expression, encompassing presentation and creative displays.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="relative">
            <img
              src={eca4}
              alt="Image 1"
              className="w-[780px] h-[480px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 transition-all duration-300 bg-white rounded-b-lg shadow-lg hover:shadow-xl">
              <h2 className="mb-2 text-lg font-bold">Dance Club</h2>
              <p className="p-2 border border-gray-300 rounded-md">
                These dance classes provide a platform for students to explore their creativity, express themselves through movement.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Eca