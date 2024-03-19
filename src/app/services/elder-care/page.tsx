'use client'
import { ShieldCheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ElderCare = () => {
  const router = useRouter();

  const handleSetPhoneNumber = () => {
    const phoneNumber = "9999999999"; // Your desired phone number
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className=" bg-[#f9f8f8] pb-[1rem] flex flex-col overflow-y-auto h-[750px]">
      <div className="flex items">
        <h1 className="heading text-red-400">Elder Care</h1>
      </div>
      <div className="flex items-center">
        <Image
          src="/images/eldercare.webp"
          alt="ambulance"
          width={600}
          height={500}
          className="relative z-[11] w-[100%] h-[100%] object-contain items-center p-8 rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h1 className="text-2xl font-semibold mt-4 mb-4">MHARC Elder Care</h1>
        <p className="text-lg">
          MHARC Elder Care is a comprehensive elder care service provider that
          offers a wide range of services to help seniors live safely and
          independently in their homes. The company's services are designed to
          meet the physical, emotional, and social needs of seniors, and they
          are provided by a team of experienced and compassionate professionals.
        </p>

        {/* Types of Ambulances */}

        <h3 className="mb-4 mt-2 text-xl font-semibold">
          MHARC Elder Care services include:
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <ul className="list-none pl-0 grid grid-cols-1 gap-2">
            <li className="flex items-center">
              {" "}
              <ShieldCheckIcon className="w-4 h-4 mr-2" /> Personal care
            </li>
            <li className="flex items-center">
              {" "}
              <ShieldCheckIcon className="w-4 h-4 mr-2" /> Light housekeeping
            </li>
            <li className="flex items-center">
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              Meal preparation
            </li>
            <li className="flex items-center">
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              Companionship
            </li>
          </ul>
          <ul className="list-none pl-0 grid grid-cols-1 gap-2">
            <li className="flex items-center">
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              Transportation
            </li>
            <li className="flex items-center">
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              Medication management
            </li>
            <li className="flex items-center">
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              Safety assessments
            </li>
            <li className="flex items-center">
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              Advocacy
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 mt-2 text-xl font-semibold">
            Benefits Of MHARC Elder Care:
          </h3>
          <ul className="list-none pl-0 grid grid-cols-1 gap-2">
            <li className="flex items-center">
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              Helps seniors live safely and independently in their homes.
            </li>
            <li className="flex items-center">
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              Provides peace of mind for family members.
            </li>
            <li className="flex items-center">
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              Allows seniors to age in place.
            </li>
            <li className="flex items-center">
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              Reduces the risk of hospitalization and nursing home placement.
            </li>
            <li className="flex items-center">
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              Improves the quality of life for seniors.
            </li>
          </ul>
          <p className="text-lg mt-2">
            If you are considering MHARC Elder Care for your loved one, please
            contact the company today for a free consultation.
          </p>
          <div className="flex items-center justify-center mt-4">
          <button
              type="button"
              className="bg-blue-500 cursor-pointer p-4"
              onClick={() => router.push("/book-doctor-appointment")}
            >
              Book Elder Care Online 
            </button>
            <div className="m-4 font-bold">OR</div>
            <button
              type="button"
              className="bg-blue-500 cursor-pointer p-4"
              onClick={handleSetPhoneNumber}
            >
              Call On +91-9999999999
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElderCare;
