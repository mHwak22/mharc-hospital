import { Bars3Icon } from "@heroicons/react/20/solid";
import { SearchCheck } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const closeSubMenu = () => {
    setShowSubMenu(false);
  };

  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[18vh] bg-[#72a2f7] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold w-[20%]">
          M<span className="text-yellow-300">HARC</span>
        </h1>
        <div className="flex flex-col w-[80%] gap-4">
          <div className="flex flex-row justify-around">
            <div>social Media</div>
            <div>
              Delhi: 011-99999999 / 011-99999999| National:1111-000-2222
            </div>
            <div className="flex flex-row gap-2">
              <div>Privacy Policy </div>
              <div>Disclaimer </div>
              <div>Contact Us </div>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="flex flex-row gap-2 mr-40" ><input type="text" placeholder="search doctor/department" className="w-72 opacity-20 border-0 " /> <SearchCheck/></div>
            <div className="ml-8">Emergency Services</div>
            <div className="ml-4">Regular Checkup</div>
          </div>
          <div className="flex flex-row justify-evenly">
            <Link href="/">
              <div className="nav-link">HOME</div>
            </Link>
            <Link href="/services">
              <div
                className="nav-link relative"
                onMouseEnter={toggleSubMenu}
                onMouseLeave={closeSubMenu}
                onClick={toggleSubMenu}
              >
                <div>SERVICES</div>
                {showSubMenu && (
                  <div
                    className="absolute bg-blue-300 w-60 rounded shadow-md mt-2 py-2 px-4 capitalize "
                    onMouseLeave={closeSubMenu}
                  >
                    <Link href="/services"><div className="text-red-400 hover:text-yellow-300 cursor-pointer">Ambulance</div></Link>
                    <Link href="/services/doctor-app"><div className="text-red-400 hover:text-yellow-300 cursor-pointer">Doctor appointment</div></Link>
                    <Link href="/services/elder-care"><div className="text-red-400 hover:text-yellow-300 cursor-pointer">Elder care</div></Link>
                    <Link href="/services/international-doctor-consultation"><div className="text-red-400 hover:text-yellow-300 cursor-pointer">International Dr's Consultation</div></Link>
                    <Link href="/services/medical-tourism"><div className="text-red-400 hover:text-yellow-300 cursor-pointer">Medical tourism</div></Link>
                    <Link href="/services/mharc-international-lab"><div className="text-red-400 hover:text-yellow-300 cursor-pointer">MHARC International Lab</div></Link>
                    <Link href="/services/supplement-product"><div className="text-red-400 hover:text-yellow-300 cursor-pointer">Supplement product</div></Link>
                    <Link href="/services/voc-medical-course"><div className="text-red-400 hover:text-yellow-300 cursor-pointer">Voc. Medical course</div></Link>
                  </div>
                )}
              </div>
            </Link>
            <Link href="/contact">
              <div className="nav-link">CONTACT</div>
            </Link>
          </div>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
