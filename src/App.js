import "./styles.css";
import React, { useState } from 'react';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Faq from "./Components/Faq/Faq";
import Testimonials from "./Components/Testimonials/Testimonials";
import Gallery from "./Components/Gallery";
import sun from './Components/asset/sun.png';
import moon from './Components/asset/moon.png';
import Contact from "./Components/Contact";

export default function App() {
  const [isChecked, setIsChecked] = useState("");

  const handleToggleChange = () => {
    if (isChecked === "dark") {
      setIsChecked("");
    } else {
      setIsChecked("dark");
    }
  };
  return (
    <div className={`App ${isChecked} sm:text-4xl md:text-4xl lg:text-lg `}>
      <Navbar />
      <Home />
      <Gallery />
      <Testimonials />
      <Faq />
      <Contact/>
      <Footer />
      <div className='fixed md:bottom-10 md:right-10 sm:bottom-10 sm:right-10 lg:bottom-4 lg:right-4 p-[2px] right-8 bottom-10 border-2 sm:border-4 lg:border-2 md:p-1 sm:p-1 lg:p-[2px] rounded-full border-green-500' >
        {
          (isChecked === "dark") ? (<img src={sun} onClick={handleToggleChange} alt="" className='md:w-20 sm:w-16 w-10 lg:w-14  rounded-full bg-yellow-400 p-1' />)
            : (<img src={moon} onClick={handleToggleChange} alt="" className='md:w-20 sm:w-16 w-10 lg:w-14  rounded-full bg-gray-500 p-1' />)
        }
      </div>
    </div>
  );
}
