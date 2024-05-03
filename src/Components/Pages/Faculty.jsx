import React from 'react'
import school3 from '../../assets/school3.jpg'

const Faculty = () => {
  return (
   <div className='mx-auto container '>
    <div className='w-full h-[650px] flex flex-row pt-20'>
          <div className='flex-col relative left-24 top-14 max-h-[400px]'>
          <span className='text-black font-bold'>Our Community</span><br></br>
          <p className='text-black max-w-[500px] pt-4 '> The faculty at Antarikshya strives to cultivate a nurturing environment for all learners. The dedicated faculty members of our school are the backbone of our educational community, bringing passion, expertise, and innovation to the classroom every day. With their unwavering commitment to student success, they create engaging learning environments that inspire curiosity, critical thinking, and lifelong learning.</p>

          <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none relative  top-10">
           Read More
          </button>
          </div>
      
          <div className='flex relative left-[300px] '>
          <img className=' h-[400px] rounded-lg py-2' src={school3} alt="" />
          </div>
        </div>

        <div className='flex-col relative left-16 top-6 max-h-[400px] '>
          <span className='text-black font-bold'>Our Team</span><br></br>
          </div>
        <div className="h-screen flex flex-col justify-center items-center px-14">
      <div className="w-full  h-[500px] flex justify-center mb-8">
        <img
           src="https://via.placeholder.com/600x400"
          alt="Team Image"
          className="w-full "
        />
      </div>
      <div className="w-full">
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

    <div className="w-[1450px] ml-[40px] h-[50vh] bg-[#162545] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-white mb-4">FOUNDERS</h1>
      <p className="text-lg text-gray-300 mb-8">
        Antarikshya School was founded by Mr. Ram Shrestha and Ms. Sita Pathak in 1998
      </p>
      <div className="flex gap-60">
        <div className="relative ">
          <div className="w-40 h-40 rounded-full overflow-hidden hover:scale-105 transition-transform">
            <img
              src="https://via.placeholder.com/150"
              alt="Mr. Ram Shrestha"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 text-center border border-gray-500 px-10 py-1 relative right-10 inline-block rounded-md">
            <p className="text-white font-semibold">Mr. Ram Shrestha</p>
              <p className="text-gray-300">Director</p>
            
          </div>
        </div>
        <div className="relative">
          <div className="w-40 h-40 rounded-full overflow-hidden hover:scale-105 transition-transform">
            <img
              src="https://via.placeholder.com/150"
              alt="Ms. Sita Pathak"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 text-center border relative right-8  border-gray-500 px-10 py-1 inline-block rounded-md">
            <p className="text-white font-semibold">Ms. Sita Pathak</p>
              <p className="text-gray-300">Director</p>
          </div>
        </div>
      </div>
    </div>

    <div className='flex-col ml-[60px] left-16 pt-[100px] top-14 max-h-[400px] '>
          <span className='text-black font-bold '>Our Leadership Team</span><br></br>
          <p className='text-black font-bold pt-8 '>Our experts are diligently working to enact change. </p>
          </div>

          <div className="h-screen w-full flex  pt-2  flex-col relative top-20 justify-center items-center mb-28">
      <div className="grid grid-cols-3 gap-4">
        {/* First Row */}
        <div className="flex w-[500px] flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
          <div className="mt-4  w-[350px] text-center rounded-md border-2 border-gray-300 p-2">
            <p>Ms. Garima Panta</p>
            <p>Coordinator of pre-school</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
          <div className="mt-4 w-[350px] text-center rounded-md border-2 border-gray-300 p-2">
            <p>Ms. Garima Panta</p>
            <p>Coordinator of pre-school</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
          <div className="mt-4 w-[350px] text-center rounded-md border-2 border-gray-300 p-2">
            <p>Ms. Garima Panta</p>
            <p>Coordinator of pre-school</p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="flex w-[500px] flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md  object-cover "
          />
          <div className="mt-4 w-[350px] text-center rounded-md border-2 border-gray-300 p-2">
            <p>Ms. Garima Panta</p>
            <p>Coordinator of pre-school</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
          <div className="mt-4 w-[350px] text-center rounded-md border-2 border-gray-300 p-2">
            <p>Ms. Garima Panta</p>
            <p>Coordinator of pre-school</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="w-[350px] h-[350px] rounded-md object-cover "
          />
          <div className="mt-4 w-[350px] text-center rounded-md border-2 border-gray-300 p-2">
            <p>Ms. Garima Panta</p>
            <p>Coordinator of pre-school</p>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Faculty