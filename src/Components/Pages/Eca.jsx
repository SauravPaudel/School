import React from 'react'

const Eca = () => {
  return (
    <div className='container pt-10 overflow-hidden'>
    <div className='flex-col relative top-14 max-h-[400px] '>
        <span className='text-black font-bold text-2xl'>Extra Curricular Activities</span><br></br>
        </div>

        {/* Part 1 */}
      <div className="h-screen w-full pt-24">
    <div className="flex justify-between h-full gap-6">
      <div className="w-1/2 h-[800px] relative overflow-hidden">
        <img
           src="https://via.placeholder.com/600x400"
          alt="Image 1"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="w-1/3 flex flex-col gap-6">
        <div className="h-1/2 relative top-20 overflow-hidden">
          <img
             src="https://via.placeholder.com/600x500"
            alt="Image 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="h-1/2 relative top-20 overflow-hidden">
          <img
             src="https://via.placeholder.com/600x400"
            alt="Image 3"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
      <div className="w-1/2 h-[800px] relative  overflow-hidden">
        <img
           src="https://via.placeholder.com/600x400"
          alt="Image 4"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
    </div>
  </div>

{/* part 2 */}

  <div className="h-screen w-full pt-24 mt-60">
    <div className="flex justify-between h-full gap-6">
      <div className="w-1/3 h-[800px] relative overflow-hidden">
        <img
           src="https://via.placeholder.com/600x400"
          alt="Image 1"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="w-1/3 flex flex-col gap-6 ">
        <div className="h-1/2 relative top-20 overflow-hidden">
          <img
             src="https://via.placeholder.com/600x400"
            alt="Image 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="h-1/2 relative top-20 overflow-hidden">
          <img
             src="https://via.placeholder.com/600x400"
            alt="Image 3"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
      <div className="w-1/3 h-[800px] relative overflow-hidden">
        <img
           src="https://via.placeholder.com/600x400"
          alt="Image 4"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
          src="https://via.placeholder.com/600x400"
          alt="Image 1"
          className="w-full h-auto object-cover rounded-lg"
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
         src="https://via.placeholder.com/600x400"
          alt="Image 2"
          className="w-full h-auto object-cover rounded-lg"
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
          src="https://via.placeholder.com/600x400"
          alt="Image 1"
          className="w-full h-auto object-cover rounded-lg"
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
         src="https://via.placeholder.com/600x400"
          alt="Image 2"
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-white rounded-b-lg shadow-lg transition-all duration-300 hover:shadow-xl">
          <h2 className="text-lg font-bold mb-2">Sports Club</h2>
          <p className="border border-gray-300 rounded-md p-2">
          This club is closely linked with the science stream, fostering an environment where students are motivated to showcase their creativity through events.
          </p>
        </div>
      </div>
    </div>
  </div>

  </div>
  )
}

export default Eca