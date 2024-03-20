'use client'
import { EnvelopeIcon, EnvelopeOpenIcon } from "@heroicons/react/20/solid";
import React, { useState, useEffect } from "react";
import DoctorsSlider from "./DoctorsSlider";

const Doctors = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsEnvelopeOpen((prev) => !prev);
  };

  useEffect(() => {
    const intervalId = setInterval(toggleEnvelope, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); 
  // The empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div className="bg-[#f8f9f9] md:pt-[8rem] lg:pt-[2rem] flex flex-col items-center">
      <div className="flex items-center">
       
        <h1 className="heading text-blue-400">
          Our Doctors
        </h1>
      </div>
      <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
        {/* Testimonial Slider */}
        <DoctorsSlider/>
      </div>
    </div>
  );
};

export default Doctors;
