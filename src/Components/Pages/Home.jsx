import React from 'react'

const Home = () => {
  return (
    <div className="container mx-auto ">
    <div className="flex flex-col md:flex-row justify-between items-center py-10">
      <div className="flex flex-col gap-4 ">
        <p className="text-4xl sm:text-7xl capitalize font-semibold ">
          Shree
          <span className="text-purple-500 pl-2 capitalize">Annapurna</span>{" "}
          <br /> to{" "}
          <span className="text-purple-500 pl-2 capitalize">Vidhya</span>{" "}
          Mandir <br />{" "}
        </p>
        <p className="text-lg text-gray-600">
          Dedicate and Transform to Excelence{" "}
          <br />
          that help your knowledge growing.
        </p>
        <div className="flex gap-4">
          <button className="text-lg px-9 py-4 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
            Get Started
          </button>
          <button className="text-lg px-9 py-4 min-w-[120px] text-center text-white bg-red-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring ">
            Notice Board
          </button>
        </div>
      </div>

      <img src="/assets/hero.png" alt="" />
    </div>
    <img src="/assets/company.svg" alt="" />
  </div>
  )
}

export default Home