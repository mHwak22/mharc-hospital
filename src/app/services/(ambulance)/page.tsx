'use client'
import { ShieldCheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const Ambulance = () => {
  const handleSetPhoneNumber = () => {
    const phoneNumber = "9999189087"; // Your desired phone number
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
      <div className=" bg-[#f8f9f9] pb-[1rem] flex flex-col overflow-y-auto h-[750px]">
        <div className="flex items">
          <h1 className="heading text-red-400">Ambulance Service</h1>
        </div>
        <div className="flex items-center">
          <Image
            src="/images/ambulance.webp"  
            alt="ambulance"
            width={600}
            height={500}
            className="relative z-[11] w-[100%] h-[100%] object-contain items-center p-8 rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="text-2xl font-semibold mt-4 mb-4">
            MHARC Ambulance Service
          </h1>
          <p className="text-lg">
            MHARC Ambulance Service is a 24/7 ambulance service provider that
            offers a wide range of services, including emergency medical
            transportation, non-emergency medical transportation, and specialty
            care transportation. MHARC is committed to providing high-quality,
            compassionate care to all of its patients.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* Types of Ambulances */}
            <div>
              <h3 className="mb-4 mt-2 text-xl font-semibold">
                Types of Ambulances
              </h3>
              <ul className="list-none pl-0 grid grid-cols-1 gap-2">
                <li className="flex items-center">
                  {" "}
                  <ShieldCheckIcon className="w-4 h-4 mr-2" /> Basic Life
                  Support (BLS) ambulances.
                </li>
                <li className="flex items-center">
                  {" "}
                  <ShieldCheckIcon className="w-4 h-4 mr-2" /> Advanced Life
                  Support (ALS) ambulances.
                </li>
                <li className="flex items-center">
                  <ShieldCheckIcon className="w-4 h-4 mr-2" />
                  Critical Care Ambulances.
                </li>
                <li className="flex items-center">
                  <ShieldCheckIcon className="w-4 h-4 mr-2" />
                  Neonatal Ambulances.
                </li>
                <li className="flex items-center">
                  <ShieldCheckIcon className="w-4 h-4 mr-2" />
                  Mortuary Ambulances.
                </li>
              </ul>
            </div>

            {/* Services Offered */}
            <div>
              <h3 className="mb-4 mt-2 text-xl font-semibold">
                Services Offered
              </h3>
              <ul className="list-none pl-0 grid grid-cols-1 gap-2">
                <li className="flex items-center">
                  <ShieldCheckIcon className="w-4 h-4 mr-2" />
                  Patient Transfer Services
                </li>
                <li className="flex items-center">
                  <ShieldCheckIcon className="w-4 h-4 mr-2" />
                  Medical Attendant Services
                </li>
                <li className="flex items-center">
                  <ShieldCheckIcon className="w-4 h-4 mr-2" />
                  Oxygen Therapy Services
                </li>
                <li className="flex items-center">
                  <ShieldCheckIcon className="w-4 h-4 mr-2" />
                  Ventilator Support Services
                </li>
                <li className="flex items-center">
                  <ShieldCheckIcon className="w-4 h-4 mr-2" />
                  Mortuary Services
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 mt-2 text-xl font-semibold">Benefits</h3>
              <ul className="list-none pl-0 grid grid-cols-1 gap-2">
                <li className="flex items-center">
                  <ShieldCheckIcon className="w-4 h-4 mr-2" />
                  24/7 availability
                </li>
                <li className="flex items-center">
                  <ShieldCheckIcon className="w-4 h-4 mr-2" />
                  Wide range of services
                </li>
                <li className="flex items-center">
                  <ShieldCheckIcon className="w-4 h-4 mr-2" />
                  Experienced and qualified staff
                </li>
                <li className="flex items-center">
                  <ShieldCheckIcon className="w-4 h-4 mr-2" />
                  Compassionate care
                </li>
                <li className="flex items-center">
                  <ShieldCheckIcon className="w-4 h-4 mr-2" />
                  Commitment to quality
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
      <button type="button" 
      className="bg-blue-500 cursor-pointer p-4"
      onClick={handleSetPhoneNumber}>
      Call Get Ambulance
    </button>
      </div>
      </div>

  );
};

export default Ambulance;
