import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {  Routes, Route, Navigate} from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About'
import Course from './Components/Pages/Course'
import Contact from './Components/Pages/Contact'
import SignUp from './Components/Pages/Signup'

function App() {
  return (
    <>
     <div className='w-full h-100vh overflow-hidden bg-slate-700 '></div>
      <Navbar/>
    <Routes>
        <Route path='/' exact element={Home} />
        <Route path='/About' element={About} />
        <Route path='/Course' element={Course} />
        <Route path='/Contact' element={Contact} />
        <Route path='/Signup' element={SignUp} />
        <Route path='*' element={<Navigate to='/' />} />
    </Routes>
    </>
  
  );
}

export default App;