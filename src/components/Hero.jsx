import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-[670px] h-full  mt-5">
      <div className="w-full h-60  flex gap-5">
        <div className="w-48 h-full ml-2 px-1 py-5">
          <img
            className="rounded-md shadow-2xl w-full h-full bg-contain"
            src="https://i.pinimg.com/736x/f4/07/5d/f4075d3fdfdf01e3162a845403fdce5f.jpg "
            alt=""
          />
        </div>
        <div className="flex-col items-center ml-5 mt-8">
          <h1 className="text-7xl font-semibold tracking-tighter leading-[50px] text-orange-500 ">
            Krushna <br />
            <span className="text-white text-5xl text-end tracking-wide">
              Ankade
            </span>
          </h1>
          <div className="mt-5">
            <h3 className="text-lg font-medium text-zinc-400">
              Mern Developer
            </h3>
            <p className="text-md text-zinc-500 flex gap-3">
              Pune <span>India</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-40  flex mb-5">
        <div className="h-full w-[65%] p-2">
          <h1 className="text-zinc-400 text-3xl font-medium">About</h1>
          <p className="text-sm p-1 text-zinc-300">
            Motivated and detail-oriented MERN Stack Developer seeking an
            opportunity to build dynamic, responsive web applications using
            MongoDB, Express.js, React.js, and Node.js, while contributing to
            innovative projects and continuously enhancing my full-stack
            development skills.
          </p>
        </div>
        <div className="flex-col mt-5 ml-5">
          <a
            className="text-zinc-200 flex  justify-items-center gap-1 px-2 py-1 rounded-md mt-1 border-[1px] border-white border-t-0"
            href="https://drive.google.com/file/d/1FPZx80BfPsXuGlMu9uBfTpIc6BSCdPJ6/view?usp=drive_link"
          >
            Resume{" "}
            <span className="mt-1">
              <FaFileDownload />
            </span>
          </a>
          <div className="mt-5 flex gap-5">
            <a className="text-white text-2xl hover:scale-110" href="https://github.com/krushnaKD"><FaGithub /></a>
            <a className="text-white text-2xl hover:scale-110" href="https://x.com/krushna_KD1"><FaXTwitter /></a>
            <a className="text-white text-2xl hover:scale-110" href="https://www.linkedin.com/feed/1"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="w-full h-44 ">
            <h1 className="text-2xl text-white">Skills</h1>
            <div className="flex justify-around mt-5  ">
               <button className="bg-gray-800 text-lg  text-white w-36 py-1 rounded-lg flex gap-1 justify-center hover:scale-105 ease-in-out"><span className="text-amber-300  text-2xl"><IoLogoJavascript /></span>JavaScript</button>
               <button className="bg-gray-800 text-lg   text-white w-36 py-1 rounded-lg flex gap-2 justify-center hover:scale-105 ease-in-out"><span className="text-blue-300  text-2xl"><FaReact /></span>React</button>
               <button className="bg-gray-800 text-lg  text-white w-36 py-1 rounded-lg flex gap-2 justify-center hover:scale-105 ease-in-out"><span className="text-green-300  text-3xl"><FaNode /></span>Nodejs</button>
               <button className="bg-gray-800 text-lg  text-white w-36 py-1 rounded-lg flex gap-2 justify-center hover:scale-105 ease-in-out"><span className="text-green-600  text-2xl"><FaNodeJs /></span>Express js</button>
            </div> 
      </div>
    </div>
  );
};

export default Hero;
