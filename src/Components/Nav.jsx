import React from 'react'
import { FaSearchengin } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <header className='h-[75px] w-full bg-white/20 backdrop-blur-lg fixed top-0 left-0 z-50'>
        <nav className='h-[inherit] w-[98%] mx-auto flex justify-between'>
          <div className='flex gap-x-[8rem] items-center'>
            <figure className='h-full w-[230px] content-center '>
              <img src="https://demo.foxthemes.net/courseplus/assets/images/logo.png" alt="logo" className='w-[80%]' />
            </figure>
            <div className='flex gap-2 items-center rounded-2xl'>
              <FaSearchengin />
              <input type="text" placeholder='Quick search for enything..' className='placeholder:text-gray-600 text-[1.2rem] outline-0' />
            </div>
          </div>
          <ul className='flex items-center gap-7 text-[1.6rem]'>
            <li><a href=""><FaShoppingCart /></a></li>
            <li><a href=""><IoMailOutline /></a></li>
            <li><a href=""><FaRegBell /></a></li>
            <li><a href="" className='text-red-600'><FaRegCircleUser /></a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Nav