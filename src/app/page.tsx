/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import React from 'react'
import About from "./_Components/About"
import Doctors from "./_Components/Doctors"
import Awards from "./_Components/Awards"


const Home = () => {
  return (
    <div className="overflow-x-hidden">
    <div className="relative z-[30]">
      <About/>
      <Doctors/>
      <Awards/>
      
    </div>
</div>
  )
}

export default Home
