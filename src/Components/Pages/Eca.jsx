import React from 'react'
import eca3 from '../../assets/eca3.jpg'
import style from '../../assets/style.jpg'
import style1 from '../../assets/style2.jpg'
import class2 from '../../assets/class2.jpg'
import classImage from '../../assets/class.jpg'; // Renamed the import and the file
import student5 from '../../assets/student5.jpg'
import eca from '../../assets/eca.jpg'
import eca4 from '../../assets/eca4.jpg'
import student3 from '../../assets/student3.jpg'
import teachersp from '../../assets/teachersp.jpg'
import project from '../../assets/project.jpg'




const Eca = () => {
  return (
    <div className='container pt-10 overflow-hidden'>
    <div className='flex-col relative top-14 max-h-[400px] '>
        <span className='text-black ml-[60px] font-bold text-2xl'>Extra Curricular Activities</span><br></br>
        </div>

        {/* Part 1 */}
      <div className="h-screen w-full pt-24">
    <div className="flex justify-between h-full gap-6">
      <div className="w-1/2 h-[800px] relative overflow-hidden">
        <img
           src={eca3}
          alt="Image 1"
          className="w-full h-full object-cover ml-[60px] transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="w-1/3 flex flex-col gap-6">
        <div className="h-1/2 relative top-20 overflow-hidden">
          <img
             src={style}
            alt="Image 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="h-1/2 relative top-20 overflow-hidden">
          <img
             src={style1}
            alt="Image 3"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
      <div className="w-1/2 h-[800px] relative  overflow-hidden">
        <img
           src={class2}
          alt="Image 4"
          className="w-full h-full ml-[-60px] object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
    </div>
  </div>

{/* part 2 */}

  <div className="h-screen w-full pt-24 mt-60">
    <div className="flex justify-between h-full gap-6">
      <div className="w-1/3 h-[800px] relative overflow-hidden">
        <img
           src={student5}
          alt="Image 1"
          className="w-full h-full ml-[60px] object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="w-1/3 flex flex-col gap-6 ">
        <div className="h-1/2 relative top-20 overflow-hidden">
          <img
             src={eca}
            alt="Image 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="h-1/2 relative top-20 overflow-hidden">
          <img
             src={eca4}
            alt="Image 3"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
      <div className="w-1/3 h-[800px] relative overflow-hidden">
        <img
           src={student3}
          alt="Image 4"
          className="w-full h-full ml-[-60px] object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
    </div>
  </div>


  {/* Crad  */}
  <div className='flex-col relative  left-8 pt-20 mt-60  max-h-[400px] '>
        <span className='text-black font-bold text-2xl'>Extra Curricular Activities</span><br></br>
        </div>
  <div className="w-full h-[70vh] flex justify-center text-[#162545]  items-center">
    <div className="w-1/2 p-4">
      <div className="relative">
        <img
          src={teachersp}
          alt="Image 1"
          className="w-[780px] h-[480px] object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-white rounded-b-lg shadow-lg transition-all duration-300 hover:shadow-xl">
          <h2 className="text-lg font-bold mb-2">Arts Club</h2>
          <p className="border border-gray-300 rounded-md p-2">
          The Club collaboratively engages in diverse forms of artistic expression, encompassing presentation and creative displays. 
          </p>
        </div>
      </div>
    </div>
    <div className="w-1/2 p-4">
      <div className="relative">
        <img
         src={project}
          alt="Image 2"
          className="w-[780px] h-[480px] object-cover rounded-lg"
        />

        <div className="absolute bottom-0 left-0 w-full p-4 bg-white rounded-b-lg shadow-lg transition-all duration-300 hover:shadow-xl">
          <h2 className="text-lg font-bold mb-2"> Research Club</h2>
          <p className="border border-gray-300 rounded-md p-2">
          This club is closely linked with the science stream, fostering an environment where students are motivated to showcase their creativity through events.
          </p>
        </div>
      </div>
    </div>
  </div>



  <div className="w-full mt-40 h-[70vh] flex text-[#162545] justify-center items-center relative bottom-20">
    <div className="w-1/2 p-4">
      <div className="relative">
        <img
          src={eca}
          alt="Image 1"
          className="w-[780px] h-[480px] object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-white rounded-b-lg shadow-lg transition-all duration-300 hover:shadow-xl">
          <h2 className="text-lg font-bold mb-2">Sports Club</h2>
          <p className="border border-gray-300 rounded-md p-2">
          The Club collaboratively engages in diverse forms of artistic expression, encompassing presentation and creative displays. 
          </p>
        </div>
      </div>
    </div>
    <div className="w-1/2 p-4">
      <div className="relative">
        <img
         src={classImage}
          alt="Image 2"
          className="w-[780px] h-[480px] object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-white rounded-b-lg shadow-lg transition-all duration-300 hover:shadow-xl">
          <h2 className="text-lg font-bold mb-2">Dance Club</h2>
          <p className="border border-gray-300 rounded-md p-2">
           These dance classes provide a platform for students to explore their creativity, express themselves through movement, and develop physical rhythm.
          </p>
        </div>
      </div>
    </div>
  </div>

  </div>
  )
}

export default Eca