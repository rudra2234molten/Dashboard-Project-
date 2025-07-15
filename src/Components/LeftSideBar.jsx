import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCompass } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { PiCardsThree } from "react-icons/pi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiFileList3Line } from "react-icons/ri";
import { RiBillLine } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import { LuFileTerminal } from "react-icons/lu";
import { ImFileText2 } from "react-icons/im";
import { IoSettingsOutline } from "react-icons/io5";
import { GrCirclePlay } from "react-icons/gr";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoBook } from "react-icons/io5";
import { GrArticle } from "react-icons/gr";


let foot = ['About', 'Blog', 'Careers', 'Support', 'Contact Us', 'Developer', 'Terms of service']
let foot1 = [
  { icon: <IoCardOutline />, text: 'Pricing' },
  { icon: <IoIosHelpCircleOutline />, text: 'Help' },
  { icon: <PiCardsThree />, text: 'Faq' },
  { icon: <IoChatbubbleEllipsesOutline />, text: 'Forum' },
  { icon: <RiFileList3Line />, text: 'Cart list' },
  { icon: <RiBillLine />, text: 'Billing' },
  { icon: <MdOutlinePayments />, text: 'Payments' },
  { icon: <LuFileTerminal />, text: 'Term' },
  { icon: <ImFileText2 />, text: 'Privacy' },
  { icon: <IoSettingsOutline />, text: 'Setting' }
]
const LeftSideBar = () => {
  return (
    <>
      <section className='pt-30 h-[100vh] w-[330px] overflow-y-scroll custom-scrollbar p-4 bg-[#ffffff]'>
        <div className='w-full h-auto px-5'>
          <ul className='flex flex-col gap-10'>
            <li>
              <NavLink style={({ isActive }) => ({
                color: isActive ? 'blue' : 'gray',
              })}>
                <div className='flex gap-2 bg-[#f0f2fd] hover:bg-[#f3f4f6] px-3 py-1.5 rounded-md'>
                  <div className='h-8 w-8 rounded-md text-white bg-linear-to-r from-pink-200 to-blue-500 flex justify-center items-center text-[1.2rem]'>
                    <FaCompass />
                  </div>
                  <span className='text-[1.1rem]'>Explore</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => ({
                color: isActive ? 'blue' : 'gray',
              })} to={'/courses'}>
                <div className='flex gap-2 hover:bg-[#f3f4f6] transition-all px-3 py-1.5 rounded-md'>
                  <div className='h-8 w-8 rounded-md text-white bg-linear-to-r from-orange-300 to-orange-600 flex justify-center items-center text-[1.2rem]'>
                    <GrCirclePlay />
                  </div>
                  <span className='text-[1.1rem]'>Courses</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => ({
                color: isActive ? 'blue' : 'gray',
              })} to={'/categories'}>
                <div className='flex gap-2 hover:bg-[#f3f4f6] transition-all px-3 py-1.5 rounded-md'>
                  <div className='h-8 w-8 rounded-md text-white bg-linear-to-r from-green-300 to-green-600 flex justify-center items-center text-[1.2rem]'>
                    <PiCardsThree />
                  </div>
                  <span className='text-[1.1rem]'>Categories</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => ({
                color: isActive ? 'blue' : 'gray',
              })} to={'/epeisodes'}>
                <div className='flex gap-2 hover:bg-[#f3f4f6] transition-all px-3 py-1.5 rounded-md'>
                  <div className='h-8 w-8 rounded-md text-white bg-linear-to-r from-pink-300 to-pink-500 flex justify-center items-center text-[1.2rem]'>
                    <BiSolidMoviePlay />
                  </div>
                  <span className='text-[1.1rem]'>Episodes</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => ({
                color: isActive ? 'blue' : 'gray',
              })} to={'/books'}>
                <div className='flex gap-2 hover:bg-[#f3f4f6] transition-all px-3 py-1.5 rounded-md'>
                  <div className='h-8 w-8 rounded-md text-white bg-linear-to-r from-pink-200 to-blue-500 flex justify-center items-center text-[1.2rem]'>
                    <IoBook />
                  </div>
                  <span className='text-[1.1rem]'>Books</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => ({
                color: isActive ? 'blue' : 'gray',
              })} to={'/articles'}>
                <div className='flex gap-2 hover:bg-[#f3f4f6] transition-all px-3 py-1.5 rounded-md'>
                  <div className='h-8 w-8 rounded-md text-white bg-linear-to-r from-orange-300 to-orange-600 flex justify-center items-center text-[1.2rem]'>
                    <GrArticle />
                  </div>
                  <span className='text-[1.1rem]'>Articles</span>
                </div>
              </NavLink>
            </li>
          </ul>
          <br />
          <hr />
          <h1 className='py-2'>Pages</h1>
          <ul className='flex flex-col gap-2 text-gray-800'>
            {foot1.map(({ icon, text }) => (
              <li><a href=""><div className='flex items-center gap-3 text-[1.07rem] hover:bg-gray-200 p-1 rounded-md'>{icon}{text}</div></a></li>
            ))}
          </ul><br /><hr />
          <ul className='flex flex-wrap gap-3 text-gray-500 pt-5'>
            {foot.map((li) => (
              <li className='hover:text-black hover:underline'><a href="">{li}</a></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default LeftSideBar