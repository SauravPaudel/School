import React, { useState } from 'react';
import './Home.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';
import school from '../../assets/school.png'
import school2 from '../../assets/school1.jpg'
import school3 from '../../assets/school3.jpg'
import student from '../../assets/student.png'

const testimonials = [
  {
    quote: 'What sets Annapurna School apart is its holistic approach to education. Beyond the traditional classroom setting, students are encouraged to explore their interests through a wide range of extracurricular activities, including sports, arts, and community service initiatives.  ',
    name: 'Saurav Paudel',
    role: 'Student',
  },
  {
    quote: "The variety of academic programs and extracurricular activities offered at Annapurna School has allowed me to explore my interests and develop new skills. Whether it's participating in science competitions, engaging in creative writing workshops, or volunteering in community projects.",
    name: 'Rajesh Nepal',
    role: 'Student',
  },
  // Add more testimonials as needed
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };
  return (
    <div className="container mx-auto  ">
      <h1 className='heading'></h1>
       <div className="flex flex-col justify-center items-center absolute top-[650px]   ">
      <div className="mt-4 flex flex-col space-y-7 ml-8 ">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebook className="text-2xl text-black hover:text-blue-500 " />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram className="text-2xl text-gray-700 hover:text-red-500 " />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <FaYoutube className="text-2xl text-gray-700 hover:text-red-500" />
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter className="text-2xl text-gray-700 hover:text-red-500" />
        </a>
      </div>
      <h1 className='heading2'></h1>
    </div>
    
    
    <div className="flex flex-col  mr-4 md:flex-row sm:justify-center sm:pt-20 items-center py-7  ">
      <div className="flex flex-col gap-4 ">
        <p className="text-4xl relative left-20 sm:text-7xl capitalize font-semibold sm:flex gap-1 ">
          Shree
          <span className="text-purple-500  pl-2 capitalize">Annapurna</span>{" "}
          <br />
          <span className="text-purple-500 pl-2 capitalize">Vidhya</span>{" "}
          Mandir <br />{" "}
        </p>
        <p className='text-1xl pt-4 relative left-20 text-gray-700 sm:flex sm:text-2xl items-center justify-center'>Dedicate and Transform to Excelence</p>
       <img className='w-[1000px] ml-[100px] max-sm:w-[500px] relative left-5' src={school} alt="" />
      </div>
    </div>

      <div className='bg-slate-100 h-screen w-full pt-10 ml-[-60px]'>
        <div className='text-black absolute'>
          <div className='relative top-16'>
             <span className='inline text-blue-900  relative text-2xl font-bold left-[120px] top-20'>Annapurna Vidhya Mandir <br></br> School</span>
        <div className=''>
        <img className='w-[700px] max-sm:w-[500px] relative left-28 top-24 rounded-lg' src={school2} alt="" />
        </div>
        <p className='text-black max-w-[700px] relative left-28 top-28'>Annapurna Vidhya Mandir School, situated in the serene landscapes of Kopawa village in Nepal's Kapilvastu district, stands as a beacon of educational excellence. Established in 2054, the school is committed to nurturing young minds, imparting not only academic knowledge but also instilling values of integrity, compassion, and leadership. With a focus on holistic development, it offers a conducive learning environment, equipped with modern facilities and a dedicated faculty.</p>
        </div>
        <h1 className='heading4'></h1>
      
        </div>
        <span className='inline relative float-right top-[820px] right-[525px] text-black font-bold'>Read more</span>

        <div className='text-black absolute left-[1000px] '>
        <div className='relative top-20'>
        <img className='w-[550px] ml-[-60px] pt-[80px] max-sm:w-[500px]  rounded-lg py-2' src={school3} alt="" />
        </div>
        <div className=' relative ml-[-100px] top-28 left-10'>
        <span className='inline text-blue-900 text-2xl font-bold '>Annapurna Vidhya Mandir Foundation</span>
        <p className='text-black mt-8  max-w-[600px] text-justify'>The Annapurna School Foundation is a  organization dedicated to providing quality education and support to underserved communities. Through various initiatives, it aims to bridge educational gaps, empower youth, and uplift communities. With a focus on holistic development, the foundation strives to create opportunities for students to thrive academically, socially, and emotionally. Through collaboration with partners and stakeholders, the Annapurna School Foundation works towards building a brighter future for all.</p>
        </div>
        </div>
        <h1 className='heading3'></h1>
      </div>
      {/* <span className='block relative left-28 bottom-[115px] text-black font-bold'>Read more abour ABC school</span> */}

        {/* Our Programs  */}
        <div className='w-full h-[650px] flex flex-row pt-20'>
          <div className='flex-col relative left-24 top-14 max-h-[400px]'>
          <span className='text-black font-bold'>Our Program</span><br></br>
          <p className='text-blue-900 font-bold pt-16 '>The Annapurna School Inspire learning with <br></br> limitless possiblities</p>
          <p className='text-black max-w-[500px] pt-6 '>The program section of Annapurna School encompasses a diverse range of educational offerings tailored to meet the needs of students at various stages of their academic journey. From early childhood education to advanced placement courses, our programs are designed to foster intellectual curiosity, critical thinking, and holistic development. Through innovative teaching methods, experiential learning opportunities, and a focus on individualized instruction, we strive to inspire a lifelong love for learning in our students. </p>

          <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none relative  top-10">
           Read More
          </button>
          </div>
      
          <div className='flex relative bottom-20 bo left-[300px] pt-[100px] '>
          <img className=' h-[500px] ml-[-60px] rounded-lg py-2 border border-black' src={school3} alt="" />
          </div>
        </div>

          {/* Card */}

        <div className="w-[1450px] ml-[40px] h-64 bg-[#162545] p-8 mt-20 rounded-2xl flex flex-col justify-center">
  <div className="flex gap-32 justify-center items-center mb-4">
    <div className="flex flex-col items-center hover:text-blue-500 transition duration-300 ml-8">
      <svg className="w-10 h-10 mb-2" fill="white" stroke="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
      </svg>
      <span className="text-white text-center font-bold">10+ Years of Excellence</span>
    </div>
    <div className="flex flex-col items-center hover:text-blue-500 transition duration-300">
      <svg className="w-10 h-10 mb-2" fill="white" stroke="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
      </svg>
      <span className="text-white text-center font-bold">500+ Enrolled Students</span>
    </div>
    <div className="flex flex-col items-center hover:text-blue-500 transition duration-300">
      <svg className="w-10 h-10 mb-2" fill="white" stroke="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
      </svg>
      <span className="text-white text-center">100+ Teaching Staffs</span>
    </div>
    <div className="flex flex-col items-center hover:text-blue-500 transition duration-300 mr-8">
      <svg className="w-10 h-10 mb-2" fill="white" stroke="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 7.944a11.955 11.955 0 01-8.618-2.03m0 0A12.027 12.027 0 007 12c0 2.556.686 4.94 1.898 6.975M7 12c0-2.59.911-4.984 2.417-6.865m0 0A12.027 12.027 0 0112 7.944a11.955 11.955 0 018.618 2.03m0 0A11.955 11.955 0 0112 21.956a11.955 11.955 0 01-8.618-2.03m9.605-4.93c.09-.184.088-.387.088-.593C12.972 14.174 11.8 13 10.516 13c-1.282 0-2.454 1.174-2.646 2.432-.091.206-.001.42.088.593z"></path>
      </svg>
      <span className="text-white text-center">2+ Rewards</span>
    </div>
  </div>
</div>

 {/* End of Card */}  
 {/* Testimonial Section */}
 <div className="h-[60vh] w-full bg-gray-100 flex flex-col justify-center items-center mt-20">
      <FaQuoteLeft className="text-4xl text-gray-400 mb-4" />
      <div className="text-center max-w-2xl px-4">
        <p className="text-lg text-gray-700 mb-4 pb-10 ">{testimonials[currentIndex].quote}</p>
        <p className="text-gray-600 font-bold">
          {testimonials[currentIndex].name}, {testimonials[currentIndex].role}
        </p>
      </div>
      <div className="flex mt-6">
        <button
          onClick={handlePrev}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full mr-2"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
        >
          &rarr;
        </button>
      </div>
    </div>

      {/* Read more  */}
      <div className="w-[1450px] ml-[40px]  h-[60vh] bg-[#162545] flex">
      {/* Image */}
      <div className="w-1/2 h-full py-10 px-10">
        <img
          src={school2}
          alt="Card Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-1/2  h-full flex flex-col justify-center px-8">
        {/* First Text */}
        <p className="text-white text-lg">
          We look forward to introducing you to Annapurna.
        </p>

        {/* Second Text */}
        <div className="mt-4">
          <h2 className="text-white text-2xl font-bold">Admissions</h2>
          <p className="text-white mt-2">
          The Admission Introduction section for Annapurna School welcomes prospective students and families to explore the vibrant educational community. Here, visitors can learn about the school's mission, values, and academic offerings. Through engaging multimedia content and personal testimonials, the Admission Introduction section provides insight into the unique learning environment and highlights the school's commitment to nurturing each student's potential. 
          </p>
        </div>

        {/* Read More Button */}
        <button className="mt-8 w-32 bg-white text-[#162545] py-2 px-4 rounded-md pt-4">
          Learn More
        </button>
      </div>
    </div>

      {/* Message from the principle  */}
      <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg ">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Card 1 Image"
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-black">Message from Principal</h3>
            <p className="text-gray-700 mb-4 ">
            At Annapurna School, we believe that education is not just about acquiring knowledge; it's about fostering a passion for learning, nurturing creativity, and instilling values that will guide our students throughout their lives. Our dedicated team of educators is committed to providing a supportive and stimulating environment where each student can reach their full potential.
            </p>
            <a
              href="#"
              className="text-blue-500 flex items-center hover:text-blue-700 transition duration-300 pt-4"
            >
              View Detail Message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Card 2 Image"
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-black">Message from Principal</h3>
            <p className="text-gray-700 mb-4">
            As the Principal of Annapurna School, I am deeply committed to ensuring that every student receives a well-rounded education that not only prepares them for academic success but also equips them with the skills and mindset needed to navigate an ever-changing world. Through innovative teaching methods, personalized attention, and a wide range of extracurricular opportunities.
            </p>
            <a
              href="#"
              className="text-blue-500 flex items-center hover:text-blue-700 transition duration-300"
            >
              View Detail Message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

        {/* Students card  */}
        <div className="flex justify-center items-center h-[90vh] w-[1450px] ml-[40px]">
      <div className="flex">
        <div className="flex flex-col items-center  transition-all duration-300 hover:scale-105">
          <img src={student} alt="Image 1" className="w-[300px] h-[300px] object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Student</h2>
          <p className="text-center mb-4 w-[700px]">
          An online version of the student handbook outlining school policies, code of conduct, and procedures to ensure a safe and respectful learning environment.
          </p>
          <button className="bg-[#162545] hover:bg-blue-700 rounded-2xl text-white font-bold py-2 px-4 transition-colors duration-300">
            Click Here
          </button>


        </div>
        <div className="h-full border-r border-gray-300 mx-8"></div>
        <div className="flex flex-col items-center transition-all duration-300 hover:scale-105">
          <img src={student} alt="Image 2" className="w-[300px] h-[300px] object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">Library</h2>
          <p className="text-center mb-4 w-[700px]">
          The Library Section at Annapurna School is a vibrant hub of knowledge and exploration. Stocked with a diverse collection of books, periodicals, and multimedia resources.
          </p>
          <button className="bg-[#162545] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl transition-colors duration-300">
            Click Here
          </button>
        </div>
      </div>
    </div>



        </div>
       
  )
}

export default Home