import React from 'react'
import { categoriesArr } from './Courses'
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaBucket } from "react-icons/fa6";
import { IoColorWand } from "react-icons/io5";
import { GiCheckedShield } from "react-icons/gi";
import { IoLeafSharp } from "react-icons/io5";
import { PiDotsSixVerticalBold } from "react-icons/pi";


let tipicsArr = [
  { svg: <GiCheckedShield />, title: 'Web Development', time: '12 Courses·156 Students', col1:'red' },
  { svg: <FaBucket />, title: 'Financial Analysis', time: '16 Courses·523 Students',col1:'blue'  },
  { svg: <IoColorWand />, title: 'Graphic Design', time: '23 Courses·356 Students', col1:'violet'  },
  { svg: <IoShieldCheckmarkSharp />, title: 'Ethical Hacking', time: '12 Courses·256 Students',col1:'blue'  },
  { svg: <IoLeafSharp />, title: 'Cyber Security', time: '34 420 Students',col1:'violet'  },
  { svg: <PiDotsSixVerticalBold />, title: 'Adobe Target', time: '14 259 Students',col1:'red'  },
  { svg: <FaBucket />, title: 'Financial Analysis', time: '16 Courses·523 Students',col1:'violet'  },
  { svg: <IoColorWand />, title: 'Graphic Design', time: '23 Courses·356 Students',col1:'blue'  },
  { svg: <IoShieldCheckmarkSharp />, title: 'Ethical Hacking', time: '12 Courses·256 Students',col1:'violet'  },
  { svg: <GiCheckedShield />, title: 'Web Development', time: '12 Courses·156 Students',col1:'red'  },
  { svg: <IoLeafSharp />, title: 'Cyber Security', time: '34 420 Students', col1:'violet'  },
  { svg: <PiDotsSixVerticalBold />, title: 'Adobe Target', time: '14 259 Students', col1:'blue'  },
]

const Categories = () => {
  return (
    <>
      <section className='w-[1220px] pl-36 pt-20 h-[100vh] bg-gray-100 overflow-y-scroll custom-scrollbar'>
        <div className='w-[900px] h-auto'>
          <h1 className='text-2xl font-semibold py-3'>Browse categories</h1>
          <div className="flex flex-wrap w-[900px] gap-3 justify-between">
            {categoriesArr.map(({ img, text }, index) => (
              <div className='h-[250px] w-[290px] relative cursor-pointer rounded-lg overflow-hidden'>
                <img src={img} alt={text} className="absolute h-full w-full" />
                <h1 className="absolute bottom-5 left-5 text-white text-xl font-bold">{text}</h1>
              </div>
            ))}
          </div>
            <br />
          <div className='bg-white p-8 rounded-lg'>
            <h1 className='text-[2.2rem] text-gray-700 font-semibold'>Featured topics</h1>
            <h1 className='text-gray-600'>Choose Your Favorite Topic</h1>
            <br />
            <div className='grid grid-cols-3 grid-rows-4 gap-5'>
              {
                tipicsArr.map(({ svg, title, time,col1 }) => (
                  <div className='flex gap-3 hover:bg-gray-100 hover:text-blue-600 cursor-pointer p-2 rounded-md'>
                    <div className={`bg-linear-to-r from-${col1}-400 to-${col1}-600 h-12 w-12 rounded-md flex justify-center items-center text-white text-2xl`}>{svg}</div>
                    <article>
                      <h1 className='font-semibold text-[1.1rem]'>{title}</h1>
                      <h1>{time}</h1>
                    </article>
                  </div>
                ))
              }
            </div><br />
            <div className='flex justify-center'><button className='bg-gray-200 px-3 py-2 hover:text-blue-600 font-semibold cursor-pointer rounded-full'>More Topics..</button></div>
          </div><br /><br /><br />
          <footer className='border-t-2 border-gray-200 h-[80px] flex justify-between px-4 items-center text-gray-600'>
            <h1>© copyright 2021 Courseplus</h1>
            <ul className='flex gap-5'>
              {['About', 'Help', 'Terms', 'Privacy'].map((li) => (
                <li className='hover:text-blue-500 transition-all duration-500 ease-in-out cursor-pointer'>{li}</li>
              ))}
            </ul>
          </footer>
          
        </div>
      </section>
    </>
  )
}

export default Categories