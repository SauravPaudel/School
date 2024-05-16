import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';
import schoolprofile from '../../assets/schoolprofile.jpg'
import school2 from '../../assets/teachers.jpg'
import school3 from '../../assets/program3.jpg'
import student from '../../assets/student.png'
import principal from '../../assets/principal.jpg'
import student1 from '../../assets/student1.jpg'
import school from '../../assets/school.png'
import students from '../../assets/students.jpg'
import chairman from '../../assets/chairman.jpg'

const testimonials = [
  {
    quote: 'What sets Annapurna School apart is its holistic approach to education. Beyond the traditional classroom setting, students are encouraged to explore their interests through a wide range of extracurricular activities, including sports, arts, and community service initiatives.  ',
    name: 'Saurav Paudel',
    role: 'Student',
  },
  {
    quote: "The variety of academic programs and extracurricular activities offered at Annapurna School has allowed me to explore my interests and develop new skills. Whether it's participating in science competitions, engaging in creative writing workshops, or volunteering in community projects.",
    name: 'Akash Paudel',
    role: 'Student',
  },
  {
    quote: "We're grateful for the safe and stimulating environment you provide, where our child can flourish academically and personally. Keep up the fantastic work!",
    name: 'Hari Belbase',
    role: 'Parents',
  },
  {
    quote: "We are grateful for the open communication channels that the school maintains, allowing us to stay informed and involved in our child's progress.",
    name: 'Ramesh Khanal',
    role: 'Parents',
  },
  {
    quote: "The sense of community at the school makes me proud to be a part of it, and I've formed lifelong friendships here.",
    name: 'Sunil Belbase',
    role: 'Student',
  },
  {
    quote: "Thank you for instilling a love for learning in our child and for being instrumental in shaping their future. We couldn't be happier with our decision to entrust their education to this school.",
    name: 'Shyam Poudel',
    role: 'Parents',
  },
  {
    quote: "I'm grateful for the mentorship and guidance provided by teachers and staff, helping me navigate academic and personal challenges.",
    name: 'Rabin Belbase',
    role: 'Student',
  },
  {
    quote: "A big thank you to the administration for their responsiveness and proactive measures in addressing any concerns or issues promptly.",
    name: 'Hari Pathak',
    role: 'Parents',
  },
  {
    quote: "Thank you for creating a welcoming environment where I feel comfortable expressing myself and making friends.",
    name: 'Suraj Achayra',
    role: 'Student',
  },
  {
    quote: "The commitment of the school to individualized attention and support for each student is evident, and it's reassuring as parents to know our child's needs are being met.",
    name: 'Deepak Achayra',
    role: 'Parents',
  },
  {
    quote: "I appreciate the opportunities for hands-on learning and real-world experiences that the school provides.",
    name: 'Lekhnath Pokhrel',
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

  const routeTo = () => {
    window.scrollTo({
      top: 0,

    })
  }

  return (
    <div className="relative w-full">

      {/* <h1 className='heading'></h1>
      <div className="flex flex-col justify-center items-center absolute top-[650px]   ">
        <div className="flex flex-col mt-4 ml-8 space-y-7 ">
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
      </div> */}

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen py-20 md:flex-row mt-[120px]">
        <div className="flex flex-col justify-center w-full gap-4 text-center">
          <p className="text-4xl text-[#162545] md:text-7xl capitalize font-black md:font-semibold">
            Shree Annapurna Vidhya Mandir
          </p>
          <p className='items-center justify-center w-full pt-4 text-gray-700 text-1xl sm:text-2xl'>Social Transformation Through Quality Education </p>
          <div className='flex justify-center w-full'><img className='md:px-0 px-8 md:max-h-[600px]' src={school} alt="" /></div>
        </div>
      </div>

      {/* Details */}
      <div className='flex w-full min-h-screen px-[5%]'>
        <div className='flex flex-col w-full gap-12'>
          <h5 className='relative inline text-2xl font-bold text-center text-blue-900 md:text-start'>Annapurna Vidhya Mandir School</h5>
          <div className='flex flex-col gap-12 md:flex-row'>
            <div className='flex flex-col gap-8'>
              <img className='rounded-lg max-h-[400px] object-cover object-center md:h-auto border-b-4 border-r-4 border-blue-900' src={school2} alt="" />
              <p className='pb-8 text-black border-b-2 border-black rounded-b-sm'>Annapurna Vidhya Mandir School, situated in the serene landscapes of Kopawa village in Nepal's Kapilvastu district, stands as a beacon of educational excellence. Established in 2054, the school is committed to nurturing young minds, imparting not only academic knowledge but also instilling values of integrity, compassion, and leadership. With a focus on holistic development, it offers a conducive learning environment, equipped with modern facilities and a dedicated faculty.</p>
            </div>
            <div className='flex flex-col gap-8'>
              <img className='rounded-lg max-h-[400px] object-cover object-center md:h-auto border-b-4 border-r-4 border-blue-900' src={school3} alt="" />
              <p className='pb-8 text-black border-b-2 border-black rounded-b-sm'>Annapurna School Foundation is a organization dedicated to providing quality education and support to underserved communities. Through various initiatives, it aims to bridge educational gaps, empower youth, and uplift communities. With a focus on holistic development, the foundation strives to create opportunities for students to thrive academically, socially, and emotionally. Through collaboration with partners and stakeholders, the Annapurna School Foundation works towards building a brighter future.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Programs  */}
      <div className='flex flex-col md:flex-row px-[5%] gap-16 md:gap-0 w-full pt-20 h-max'>
        <div className='flex-col relative flex max-h-[400px] w-full'>
          <span className='font-bold text-black'>Our Program</span><br></br>
          <p className='pt-4 font-bold text-blue-900 '>The Annapurna School Inspire learning with <br></br> limitless possiblities</p>
          <p className='text-black max-w-[500px] pt-6 '>The program section of Annapurna School encompasses a diverse range of educational offerings tailored to meet the needs of students at various stages of their academic journey. From early childhood education to advanced placement courses, our programs are designed to foster intellectual curiosity, critical thinking, and holistic development. Through innovative teaching methods, experiential learning opportunities, and a focus on individualized instruction, we strive to inspire a lifelong love for learning in our students. </p>
          <Link to="/Faculty">
            <button type="button" className="relative inline-flex items-center px-4 py-3 text-sm font-semibold text-white bg-gray-800 border rounded-lg gap-x-2 border-gray hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none top-10">
              Read More
            </button>
          </Link>
        </div>
        <div className='relative flex w-full'>
          <img className='flex border border-black rounded-lg' src={school3} alt="" />
        </div>
      </div>

      {/* Card */}
      <div className="w-full px-[5%] mt-20 flex flex-col justify-center">
        <div className="flex md:flex-row flex-col bg-[#162545] p-8 rounded-2xl h-max md:h-64 items-center justify-center gap-32 mb-4">
          <div className="flex flex-col items-center transition duration-300">
            <svg className="w-10 h-10 mb-2" fill="white" stroke="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <span className="font-bold text-center text-white">20+ Years of Excellence</span>
          </div>
          <div className="flex flex-col items-center transition duration-300 hover:text-blue-500">
            <svg className="w-10 h-10 mb-2" fill="white" stroke="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span className="font-bold text-center text-white">500+ Enrolled Students</span>
          </div>
          <div className="flex flex-col items-center transition duration-300 hover:text-blue-500">
            <svg className="w-10 h-10 mb-2" fill="white" stroke="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <span className="text-center text-white">20+ Teaching Staffs</span>
          </div>
          <div className="flex flex-col items-center mr-8 transition duration-300 hover:text-blue-500">
            <svg className="w-10 h-10 mb-2" fill="white" stroke="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 7.944a11.955 11.955 0 01-8.618-2.03m0 0A12.027 12.027 0 007 12c0 2.556.686 4.94 1.898 6.975M7 12c0-2.59.911-4.984 2.417-6.865m0 0A12.027 12.027 0 0112 7.944a11.955 11.955 0 018.618 2.03m0 0A11.955 11.955 0 0112 21.956a11.955 11.955 0 01-8.618-2.03m9.605-4.93c.09-.184.088-.387.088-.593C12.972 14.174 11.8 13 10.516 13c-1.282 0-2.454 1.174-2.646 2.432-.091.206-.001.42.088.593z"></path>
            </svg>
            <span className="text-center text-white">50+ Rewards</span>
          </div>
        </div>
      </div>
      {/* End of Card */}

      {/* Testimonial Section */}
      <div className="flex flex-col items-center justify-center w-full bg-gray-100 my-28 h-max">
        <FaQuoteLeft className="mb-4 text-4xl text-gray-400" />
        <div className="max-w-2xl px-4 text-center">
          <p className="pb-10 mb-4 text-lg text-gray-700 ">{testimonials[currentIndex].quote}</p>
          <p className="font-bold text-gray-600">
            {testimonials[currentIndex].name}, {testimonials[currentIndex].role}
          </p>
        </div>
        <div className="flex mt-6">
          <button
            onClick={handlePrev}
            className="px-4 py-2 mr-2 font-bold text-gray-800 bg-gray-300 rounded-full hover:bg-gray-400"
          >
            &larr;
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded-full hover:bg-gray-400"
          >
            &rarr;
          </button>
        </div>
      </div>

      {/* Read more  */}
      <div className="w-full h-max flex px-[5%] mb-28">
        <div className='flex md:flex-row flex-col w-full bg-[#162545] rounded-2xl'>
          {/* Image */}
          <div className="w-full px-10 py-10 h-[450px] md:w-1/2">
            <img
              src={school2}
              alt="Card Image"
              className="object-cover w-full h-full border-b-4 border-r-4 border-white brightness-[.9] rounded-2xl"
            />
          </div>
          {/* Text Section */}
          <div className="flex flex-col justify-center w-full h-full px-8 md:w-1/2">
            {/* First Text */}
            <p className="text-lg text-white">
              We look forward to introducing you to Annapurna.
            </p>
            {/* Second Text */}
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-white">Admissions</h2>
              <p className="mt-2 text-white">
                The Admission Introduction section for Annapurna School welcomes prospective students and families to explore the vibrant educational community. Here, visitors can learn about the school's mission, values, and academic offerings. Through engaging multimedia content and personal testimonials, the Admission Introduction section provides insight into the unique learning environment and highlights the school's commitment to nurturing each student's potential.
              </p>
            </div>
            {/* Read More Button */}
            <Link onClick={routeTo} to="/Admission">
              <button className="mt-8 w-32 bg-white text-[#162545] py-2 px-4 rounded-md pt-4">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Message from the principle  */}
      <div className="flex px-[5%] items-center justify-center w-full">
        <div className="grid w-full grid-cols-1 gap-20 mx-auto max-w-7xl md:grid-cols-2">
          {/* Card 1 */}
          <div className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <img
              src={principal}
              alt="Card 1 Image"
              className="w-full h-[300px] object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="mb-2 ml-2 text-xl font-bold text-black">Message from Principal</h3>
              <p className="mb-4 ml-2 text-gray-700 ">
                At Annapurna School, we believe that education is not just about acquiring knowledge; it's about fostering a passion for learning, nurturing creativity, and instilling values that will guide our students throughout their lives. Our dedicated team of educators is committed to providing a supportive and stimulating environment where each student can reach their full potential.
              </p>
              <h3 className='text-1xl font-bold className="flex items-center pt-4 ml-2 text-black transition duration-300'>- Madan Malla</h3>
            </div>
          </div>
          {/* Card 2 */}
          <div className="transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <img
              src={chairman}
              alt="Card 2 Image"
              className="w-full h-[300px] object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-black">Message from Chairman</h3>
              <p className="mb-4 text-gray-700">
                As the Chairman of Annapurna School, I am deeply committed to ensuring that every student receives a well-rounded education that not only prepares them for academic success but also equips them with the skills and mindset needed to navigate an ever-changing world. Through innovative teaching methods, personalized attention, and a wide range of extracurricular opportunities.
              </p>
              <h3 className='text-1xl font-bold className="flex items-center pt-4 ml-2 text-black transition duration-300'>- Dunika Bhushal</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Students card  */}
      <div className="flex items-center justify-center w-full mt-28 px-[5%]">
        <div className="flex flex-col md:gap-0 md:flex-row gap-14">
          <div className="flex flex-col items-center duration-300 hover:scale-[1.02]">
            <img src={student1} alt="Image 1" className="w-[320px] h-[320px] object-cover rounded-lg mb-4" />
            <h2 className="mb-2 text-2xl font-bold">Student</h2>
            <p className="mb-4 text-center">
              An online version of the student handbook outlining school policies, code of conduct, and procedures to ensure a safe and respectful learning environment.
            </p>
            <Link onClick={routeTo} to="/Eca">
              <button className="bg-[#162545] hover:bg-blue-700 rounded-2xl text-white font-bold py-2 px-4 transition-colors duration-300">
                Click Here
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center duration-300 hover:scale-[1.02]">
            <img src={students} alt="Image 2" className="w-[320px] h-[320px] object-cover rounded-lg mb-4" />
            <h2 className="mb-2 text-2xl font-bold">Library</h2>
            <p className="mb-4 text-center">
              The Library Section at Annapurna School is a vibrant hub of knowledge and exploration. Stocked with a diverse collection of books, periodicals, and multimedia resources.
            </p>
            <Link onClick={routeTo} to="/Notice">
              <button className="bg-[#162545] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl transition-colors duration-300">
                Click Here
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home