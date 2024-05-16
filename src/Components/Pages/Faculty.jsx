import React from 'react'
// import school3 from '../../assets/school3.jpg'
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
import { Link } from 'react-router-dom';

const routeTo = () => {
  window.scrollTo({
    top: 0,
  })
}

const Faculty = () => {
  return (
    <div className='w-full flex flex-col px-[5%] mt-[120px]'>

      {/* Hero Section */}
      <div className='flex flex-col w-full gap-12 py-20 mb-16 md:flex-row'>
        <div className='flex flex-col w-full gap-4 text-black'>
          <span className='font-bold'>Our Community</span>
          <p className='text-justify'> The faculty at Shree Annapurna Vidhya Mandir School strives to cultivate a nurturing environment for all learners. The dedicated faculty members of our school are the backbone of our educational community, bringing passion, expertise, and innovation to the classroom every day. With their unwavering commitment to student success, they create engaging learning environments that inspire curiosity, critical thinking, and lifelong learning.</p>
          <Link onClick={routeTo} to="/Home" className='px-4 py-3 mt-4 text-white bg-gray-800 w-max rounded-xl hover:bg-gray-700 hover:text-white'>
            Read More
          </Link>
        </div>
        <div className='flex flex-shrink w-full'>
          <img className='rounded-3xl brightness-[.9] object-cover object-center flex w-full max-h-[300px]' src={schoolprofile} alt="" />
        </div>
      </div>

      {/* Team Section */}
      <div className="flex flex-col items-center justify-center w-full gap-8">
        <div className="flex justify-center max-h-[30rem] w-full">
          <img
            src={teachers}
            alt="Team Image"
            className="w-full brightness-[.9] rounded-3xl object-cover object-center hover:brightness-100"
          />
        </div>
        <div className="w-full">
          <p className="text-justify">
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

      {/* Leadership Section */}
      <div className="flex flex-col w-full mt-28">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* First Row */}
          <div className="flex flex-col items-center">
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
          <div className="flex flex-col items-center">
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
          <div className="flex flex-col items-center">
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
          <div className="flex flex-col items-center ">
            <img
              src={gyatri}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
            <div className="mt-4 w-[350px]   text-center rounded-md border-2 border-gray-300 p-2">
              <p>Ms. Gyatri Aryal </p>
              <p>Teacher</p>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher2}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher3}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher4}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher5}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher6}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher7}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher8}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher9}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher10}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher11}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher12}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher13}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher14}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher15}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher16}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher17}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher18}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher19}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={teacher20}
              alt="Placeholder"
              className="w-[350px] h-[350px] rounded-md object-cover "
            />
          </div>
          <div className="flex flex-col items-center ">
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