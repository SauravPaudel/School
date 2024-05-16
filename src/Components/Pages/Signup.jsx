import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
const [name, SetName] = useState("");
const [phone, SetPhone] = useState("");
const [email, SetEmail] = useState("");
const [subject, SetSubject] = useState("");
const [message, SetMessage] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission logic
  toast.success('Thank you for your response');
};

const collectData = async(e) =>{
  e.preventDefault();
  let result = await fetch ('http://localhost:4000/',{
    method: 'post',
    body: JSON.stringify({name,phone,email,subject,message}), headers:{
      'Content-Type': 'application/json'
    },
  });
  result = await result.json;
  localStorage.setItem("user", JSON.stringify(result));
}

  return (
    <div className=' mx-auto container mt-[120px]'>
        <div className="py-16 bg-gray-100">
      <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Annapurna School</h2>
          <p className="mb-4 text-gray-600">Kapilvastu,Kopawa</p>
          <div className="overflow-hidden bg-white rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8152529835517!2d85.31909031430198!3d27.698599982828823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a9598a1d2b%3A0xa9c8b8e7d2e046d8!2sAntarikshya%20School!5e0!3m2!1sen!2snp!4v1683102678190!5m2!1sen!2snp"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
        <form onSubmit={collectData} >
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-semibold">Send Us a Message</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name='fullname'
              value={name}
              onChange={(e)=> SetName(e.target.value)} 
           
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name='phone'
              value={phone}
              onChange={(e)=> SetPhone(e.target.value)} 
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name='email'
              value={email}
              onChange={(e)=> SetEmail(e.target.value)} 
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block mb-2 font-semibold text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name='subject'
              value={subject}
              onChange={(e)=> SetSubject(e.target.value)} 
             
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name='message'
              value={message}
              onChange={(e)=> SetMessage(e.target.value)} 
            
              rows="4"
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </div>
        </form>
        <ToastContainer />
      
      </div>
      <div className="flex justify-center px-4 mx-auto mt-10 space-x-6 max-w-8xl sm:px-6 lg:px-8">
        <div className="flex items-center text-gray-600">
          <svg
            className="w-8 h-8 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>avm2058@gmail.com</span>
        </div>
        <div className="flex items-center text-gray-600">
          <svg
            className="w-8 h-8 mr-2 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>contact@annapurna.edu</span>
        </div>
        <div className="flex items-center text-gray-600">
          <svg
            className="w-8 h-8 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>+977-985-7055181</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUp