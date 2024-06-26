import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Admission from './Components/Pages/Admission'
import Faculty from './Components/Pages/Faculty'
import Eca from './Components/Pages/Eca'
import SignUp from './Components/Pages/Signup'
import Notice from './Components/Pages/Notice';
import Footer from './Components/Footer/Footer';
import About from './Components/Pages/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Popup from './Components/Pages/Popup';
AOS.init();

function App() {
  return (
    <>
      < Popup />
      <div className='w-full min-h-screen overflow-hidden'>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/Admission" element={<Admission />} />
          <Route path='/Faculty' element={<Faculty />} />
          <Route path='/Eca' element={<Eca />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/Notice' element={<Notice />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;