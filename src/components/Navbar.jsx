import React from 'react'

const Navbar = () => {
  return (
    <div className='w-68 h-10 border-[1px] border-t-0 border-gray-300 rounded-3xl m-auto  text-white flex justify-center backdrop-blur-md bg-white/10 -z-20'>
      <button className=' px-4 text-xl cursor-pointer '>Home</button>
       <button className=' px-4 text-xl cursor-pointer'>Projects</button>
        {/* <button className=' px-4 rounded-4xl '>Skills</button> */}
    </div>
  )
}

export default Navbar
