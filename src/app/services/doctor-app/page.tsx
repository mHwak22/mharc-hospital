'use client'
import { ShieldCheckIcon } from "@heroicons/react/20/solid";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import React from "react";

const DoctorAppointment = () => {
  const router = useRouter();

  return (
    <div className="absolute top-0 bg-[#f8f9f9] pt-[4rem] md:pt-[8rem] pb-[1rem] flex flex-col overflow-y-scroll h-min">
      <div className="flex items-center">
        <h1 className="heading text-red-400">Doctor Appointment</h1>
      </div>
      <div className="flex items-center">
        <Image
          src="/images/doctorapp.jpg"
          alt="ambulance"
          width={800}
          height={500}
          className="relative z-[11] w-[100%] h-[100%] object-contain items-center"
        />
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <h1 className="text-2xl font-semibold mt-4 mb-4">
          Professional Medical Service Of Dental
        </h1>
        <p className="text-lg">
          Medicate is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry’s standard dummy text ever since.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {/* Types of Ambulances */}
          <div>
            <h3 className="mb-4 mt-2 text-xl font-semibold">
              Departments 
            </h3>
            <ul className="list-none pl-0 grid grid-cols-1 gap-2">
              <li className="flex items-center">
                {" "}
                <ShieldCheckIcon className="w-4 h-4 mr-2" />General Practitioner (GP)
              </li>
              <li className="flex items-center">
                {" "}
                <ShieldCheckIcon className="w-4 h-4 mr-2" />Internal Medicine Physician
              </li>
              <li className="flex items-center">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                Cardiologist
              </li>
              <li className="flex items-center">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                Dermatologist
              </li>
              <li className="flex items-center">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                Endocrinologist
              </li>
              <li className="flex items-center">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                Gastroenterologist
              </li>
              <li className="flex items-center">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                Neurologist
              </li>
              <li className="flex items-center">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                Ophthalmologist
              </li>
              <li className="flex items-center">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                Otolaryngologist (ENT)
              </li>
              <li className="flex items-center">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                Obstetrician/Gynecologist (OB/GYN)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
      <button type="button" 
      className="bg-blue-500 cursor-pointer p-4"
      onClick={() => router.push('/services/book-doctor-appointment')}>
      Book Doctors Appointment
    </button>
      </div>
    </div>
  );
};

export default DoctorAppointment;
