import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  role: string;
  company: string;
  image: string;
  feedback:string;
}

const DoctorsReview = ({ name, role, company, image, feedback }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <Image
        src={image}
        alt={name}
        layout=""
        width={100}
        height={100}
        objectFit="contain"
        className="mx-auto mb-[2rem] rounded-full"
      />
      <div className="flex items-center mx-auto">
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
      </div>
      <h1 className="text-[25px] text-black mt-[1rem]">{name}</h1>
      <p className="text-[18px] text-black opacity-75 mt-[0.5rem] mb-[1.5rem]">
        {role} @ {company}
      </p>
      <p className="text-[16px] text-black opacity-75 w-[90%] md:w-[50%] mx-auto">
        {feedback}
      </p>
    </div>
  );
};

export default DoctorsReview;
