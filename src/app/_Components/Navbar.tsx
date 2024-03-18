'use client'
import React, { useState } from 'react'
import MobileNav from './MobileNav';
import Nav from './Nav';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const openNav = () => setNav(true);
    const closeNav = () => setNav(false);

  return (
    <div>
       {/* NavBar */}
       <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
      
    </div>
  )
}

export default Navbar
