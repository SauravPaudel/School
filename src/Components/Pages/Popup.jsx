import React, { useState, useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import schoolabout from '../../assets/schoolabout.jpg'
const Popup = () => {
    const [popup, setPopup] = useState(true);
    useEffect(() => {
        if (popup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [popup]);
    return (
        popup ?
            <div data-aos='fade' className='fixed inset-0 top-0 left-0 z-50 flex items-center justify-center h-screen bg-black/50 backdrop-blur-xl' >
                <button onClick={() => setPopup(!popup)} className='absolute text-4xl text-white right-4 top-4'><IoClose /></button>
                <div data-aos="fade-up" className='flex h-[80vh] w-full mx-[5%] sm:mx-[10%] md:mx-[20%] bg-white items-center justify-center'>
                    <img src={schoolabout} alt="" />
                </div>
            </div>
            :
            null
    )
}
export default Popup