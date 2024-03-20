"use client";
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ShieldCheckIcon } from "@heroicons/react/20/solid";

const About = () => {
  const router = useRouter();

  return (
    <div className="bg-[#f8f9f9] mt-[6rem] pb-[3rem] pt-[2rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#7daef3] md-[1rem]">
            ABOUT US
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-red-400">
            Transformation <span className="text-red-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <Image
              src="/images/plus-sign.jpg"
              alt="ambulance"
              width={200}
              height={200}
              className="relative object-contain bg-blue-500"
            />

            <p className="text-[19px] text-black w-[90%]">
              MHARC Hospital, Delhi is an ambitious initiative from MHARC Group.
              This is a fully-equipped private hospital in Delhi with all
              state-of-the-art medical facilities. This 250 beds multispecialty
              hospital in Delhi is the beginning of a new era in healthcare
              services, where we envision providing a comprehensive spectrum of
              advanced medical & surgical interventions with a perfect mix of
              inpatient and outpatient services to people of all social and
              economic backgrounds. It is the onset of a new experience where
              patients not only get medical services as per international
              standards but also receive an empathetic and humane treatment by
              the professionals attending to them. Our motto and vision is to
              provide ‘wellness for all’.
            </p>
          </div>
          <button
            className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#7daef3] text-black flex items-center space-x-2"
            onClick={() => router.push("/book-doctor-appointment")}
          >
            <p>Book Appointment</p>
            <PlusIcon className="w-[1.6rem] h-[1.7rem] text-black font-bold" />
          </button>
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            src="/images/about-1.webp"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#7daef3] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
      <div className="mx-auto w-[80%] items-center">
        <div className="flex flex-col flex-1">
          <h1 className="text-2xl font-semibold mt-4 mb-4">
            MHARC Hospital Vision
          </h1>
          <p className="text-lg">
            Our vision is to be the leading healthcare institution, recognized
            for excellence in patient care, medical education, and research. We
            aim to create a healing environment that prioritizes compassion,
            innovation, and collaboration, ensuring every individual receives
            personalized, holistic care tailored to their needs. By integrating
            cutting-edge technology with a multidisciplinary approach, we strive
            to enhance wellness, promote preventive care, and improve health
            outcomes for our community. Our commitment to integrity,
            transparency, and continuous improvement drives us to exceed
            expectations, making a meaningful difference in the lives we touchF
          </p>
          <h3 className="mb-4 mt-2 text-xl font-semibold">
            MHARC services include:
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <ul className="list-none pl-0 grid grid-cols-1 gap-2">
              <li className="flex items-center">
                {" "}
                <ShieldCheckIcon className="w-4 h-4 mr-2" /> Ambulance
              </li>
              <li className="flex items-center">
                {" "}
                <ShieldCheckIcon className="w-4 h-4 mr-2" /> Elder care
              </li>
              <li className="flex items-center">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                International Doctors Consultation
              </li>
              <li className="flex items-center">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                Medical tourism
              </li>
            </ul>
            <ul className="list-none pl-0 grid grid-cols-1 gap-2">
              <li className="flex items-center">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                MHARC International Lab
              </li>
              <li className="flex items-center">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                Supplement product
              </li>
              <li className="flex items-center">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                Voc. Medical course
              </li>
              <li className="flex items-center">
                <ShieldCheckIcon className="w-4 h-4 mr-2" />
                Blood Donations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
