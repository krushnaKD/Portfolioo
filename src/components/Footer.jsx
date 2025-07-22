import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-[670px] px-5 border-t-0 border-2 border-zinc-400 rounded-xl border-l-0 border-r-0 h-10  mt-20 mb-10 
    flex justify-between'>
      <h1 className='text-lg text-gray-200 '>Email : - <span className='text-gray-500'>krushnaankade5@gmail.com</span></h1>
      <div className=" flex gap-5">
                  <a className="text-white text-2xl hover:scale-110" href="https://github.com/krushnaKD"><FaGithub /></a>
                  <a className="text-white text-2xl hover:scale-110" href="https://x.com/krushna_KD1"><FaXTwitter /></a>
                  <a className="text-white text-2xl hover:scale-110" href="https://www.linkedin.com/feed/1"><FaLinkedin /></a>
                </div>
    </div>
  )
}

export default Footer
