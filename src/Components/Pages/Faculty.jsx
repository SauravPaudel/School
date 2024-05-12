import React from 'react'
import school3 from '../../assets/school3.jpg'
import teachers from '../../assets/teachers.jpg'
import schoolprofile from '../../assets/schoolprofile.jpg'
import principal from '../../assets/principal.jpg'
import prakash from '../../assets/prakash.jpg'
import hari from '../../assets/hari.jpeg'
import kapil from '../../assets/Kapil.jpeg'
import gyatri from '../../assets/Gyatri.jpeg'
import chairman from '../../assets/chairman.jpg'
import ashok from '../../assets/ashok.jpeg'
import teacher2 from '../../assets/teacher2.jpeg'
import teacher3 from '../../assets/teacher3.jpeg'
import teacher4 from '../../assets/teacher4.jpeg'
import teacher5 from '../../assets/teacher5.jpeg'
import teacher6 from '../../assets/teacher6.jpeg'
import teacher7 from '../../assets/teacher7.jpeg'
import teacher8 from '../../assets/teacher8.jpeg'
import teacher9 from '../../assets/teacher9.jpeg'
import teacher10 from '../../assets/teacher10.jpeg'
import teacher11 from '../../assets/teacher11.jpeg'
import teacher12 from '../../assets/teacher12.jpeg'
import teacher13 from '../../assets/teacher13.jpeg'
import teacher14 from '../../assets/teacher14.jpeg'
import teacher15 from '../../assets/teacher15.jpeg'
import teacher16 from '../../assets/teacher16.jpeg'
import teacher17 from '../../assets/teacher17.jpeg'
import teacher18 from '../../assets/teacher18.jpeg'
import teacher19 from '../../assets/teacher19.jpeg'
import teacher20 from '../../assets/teacher20.jpeg'
import teacher21 from '../../assets/teacher21.jpeg'
import {Link} from 'react-router-dom';



const routeTo = () => {
  window.scrollTo({
    top:0,

  })
}


const Faculty = () => {
  return (
   <div className='mx-auto mt-[-10px] container overflow-hidden '>
    <div className='w-full h-[650px] flex flex-row pt-10'>
          <div className='flex-col relative left-24 top-10 max-h-[400px]'>
          <span className='text-black font-bold'>Our Community</span><br></br>
          <p className='text-black max-w-[500px] pt-2 '> The faculty at Annapurna Vidhya Mandir School strives to cultivate a nurturing environment for all learners. The dedicated faculty members of our school are the backbone of our educational community, bringing passion, expertise, and innovation to the classroom every day. With their unwavering commitment to student success, they create engaging learning environments that inspire curiosity, critical thinking, and lifelong learning.</p>



          <Link onClick={routeTo} to="/About">
          <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none relative  top-10">
           Read More
          </button>
          </Link>
          </div>
      
          <div className='flex relative left-[300px] '>
          <img className=' h-[400px] w-[600px] rounded-lg py-2' src={schoolprofile} alt="" />
          </div>
        </div>

        <div className='flex-col relative left-[100px] top-[-125px]  max-h-[400px] '>
          <span className='text-black font-bold'>Our Team</span><br></br>
          </div>
        <div className="h-screen flex flex-col mt-[-165px] justify-center items-center px-14">
      <div className="w-[800px]  h-[400px] flex justify-center mb-8">
        <img
           src={teachers}
          alt="Team Image"
          className="w-full "
        />
      </div>
      <div className="w-full mt-[-20px]">
        <p className="text-lg text-justify">
          Our school team members are the driving force behind our collective
          success, working collaboratively to create a positive and enriching
          environment for all. Comprising teachers, administrators, support
          staff, and volunteers, our team is united by a shared commitment to
          the well-being and growth of every student. Whether in the classroom,
          on the sports field, or in the community, our team members exemplify
          dedication, creativity, and compassion. Together, we celebrate
          diversity, foster inclusivity, and cultivate a culture of respect and
          teamwork. With each member bringing their unique skills and
          perspectives to the table, our team is stronger and more resilient,
          empowering each other and our students to reach new heights of
          achievement and fulfillment.
        </p>
      </div>
    </div>

    <div className="w-[1450px] ml-[40px] mt-[-70px] h-[50vh] bg-[#162545] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-white mb-4">FOUNDER</h1>
      <p className="text-lg text-gray-300 mb-8">
        Annapurna Vidhay Mandir School was founded by Mr. Dunika Bhusal in 2058 B.S
      </p>
      <div className="flex gap-60">
        <div className="relative ">
          <div className="w-40 h-40 rounded-full overflow-hidden hover:scale-105 transition-transform">
            <img
              src={chairman}
              alt="Mr. Chairman"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-2 text-center border border-gray-500 px-10 py-1 relative right-10 inline-block rounded-md  hover:bg-blue-800 text-white cursor-pointer">
            <p className="text-white font-semibold">Mr. Dunika Bhusal</p>
              <p className="text-gray-300">Chairman</p>
            
          </div>
        </div>
        {/* <div className="relative">
          <div className="w-40 h-40 rounded-full overflow-hidden hover:scale-105 transition-transform">
            <img
              src={principal}
              alt="Principle"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-2 text-center border relative right-8  border-gray-500 px-10 py-1 inline-block rounded-md hover:bg-blue-800 text-white cursor-pointer">
            <p className="text-white font-semibold">Ms. Madan Malla</p>
              <p className="text-gray-300">Principle</p>
          </div>
        </div> */}
      </div>
    </div>

    <div className='flex-col ml-[70px] left-24 pt-[30px] top-14 max-h-[400px] '>
          <span className='text-black font-bold '>Our Leadership Team</span><br></br>
          <p className='text-black font-bold pt-2 '>Our experts are diligently working to enact change. </p>
          </div>

          <div className="h-full w-full flex  pt-2  flex-col relative top-10 justify-center items-center mb-28">
      <div className="grid grid-cols-3 gap-4">
        {/* First Row */}
        <div className="flex w-[500px] flex-col items-center">
          <img
            src={principal}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
          <div className="mt-4  w-[350px] text-center rounded-md border-2 border-gray-300 p-2 ">
            <p>Mr. Madan Malla</p>
            <p>Principle</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={hari}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
          <div className="mt-4 w-[350px] text-center rounded-md border-2 border-gray-300 p-2">
            <p>Mr. Harinarayan Chaudary</p>
            <p>Vice Principle</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={kapil}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
          <div className="mt-4 w-[350px] text-center rounded-md border-2 border-gray-300 p-2">
            <p>Mr. Kapil Ghimire</p>
            <p>Accountant</p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-3 gap-4  mt-10   ">
        <div className="flex w-[500px] flex-col items-center">
          <img
            src={prakash}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md  object-cover "
          />
          <div className="mt-4   w-[350px]  text-center rounded-md  border-2 border-gray-300  p-2">
            <p>Mr. Prakash Bhusal</p>
            <p>Co-ordinator</p>
          </div>
        </div>
        <div className="flex w-[500px] flex-col items-center">
          <img
            src={ashok}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
          <div className="mt-4 w-[350px] text-center rounded-md border-2 border-gray-300 p-2">
            <p>Mr. Ashok Belbase</p>
            <p>Math Teacher</p>
          </div>
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={gyatri}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
          <div className="mt-4 w-[350px]   text-center rounded-md border-2 border-gray-300 p-2">
            <p>Ms. Gyatri </p>
            <p>Teacher</p>
          </div>
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher2}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher3}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher4}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher5}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher6}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher7}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher8}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher9}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher10}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher11}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher12}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher13}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher14}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher15}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher16}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher17}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher18}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher19}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher20}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
        <div className="flex w-[500px] flex-col items-center  ">
          <img
            src={teacher21}
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
        </div>
      </div>
    </div>
   </div>
  )
}

export default Faculty