// import { aboutMe } from "@/data/aboutMe";
import { personalData } from "@/data/personalData";
// import { professionalData } from "@/data/professionalData";
// import { skills } from "@/data/skills";
import profile from "@/assests/pic.jpeg";
import Image from "next/image";
import React from "react";
import { Envelop, Twitter, Medium, Linkedin } from "@/assests/icons/all.jsx";

const Sidebar = () => {
  return (
    <div className="flex flex-col  bg-black   sm:justify-around md:w-1/3 ">
      <div className="flex flex-col items-center text-center text-white p-10">
        <Image
          src={profile}
          alt={"Profile Photo"}
          className="rounded-full mb-2 h-60 w-56"
        />
        <h1 className="mb-1">{personalData.name}</h1>
        <h2 className="mb-2 font-semibold">{personalData.role}</h2>
        <p className="mb-2">{personalData.education[0]}</p>
        <p className="mb-2">{personalData.education[1]}</p>
        <p className="mb-2">{personalData.education[2]}</p>
      </div>
      <div className="text-white mt-2 mb-4 text-center">
        <h3>Contact Me</h3>
        <div className="flex flex-row justify-center gap-4 mt-3 text-xl">
          <a
            className=""
            href={personalData.contactLinks?.[0]}
            aria-label=" Email link"
            target={"_blank"}
          >
            <Envelop />
          </a>
          <a
            href={personalData.contactLinks?.[1]}
            aria-label=" Twitter link"
            target={"_blank"}
          >
            <Twitter />
          </a>
          <a
            href={personalData.contactLinks?.[2]}
            aria-label=" Linkedin link"
            target={"_blank"}
          >
            <Linkedin />
          </a>
          <a
            href={personalData.contactLinks?.[3]}
            aria-label=" Medium link"
            target={"_blank"}
          >
            <Medium />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
