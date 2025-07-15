import React from 'react'
import { booksArr } from './Explore'

const Books = () => {
  return (
    <>
      <section className='h-[100vh] w-[1220px] overflow-y-scroll custom-scrollbar bg-gray-100'>
        <br /><br /><br /><br />
        <div className='w-[75%] mx-auto'>
          <h1 className='text-2xl font-semibold text-gray-600 py-1'>Books</h1>
          <div>
            <ul className='flex gap-10'>
              {
                ['Suggestions', 'Mobile App', 'JavaScript', 'Softwares', 'Drawing',].map((li, index) => (
                  <li className={index == 0 ? 'border-b-2 border-blue-600 py-4 hover:text-blue-500 cursor-pointer font-semibold text-gray-500' : 'py-4 hover:text-blue-500 cursor-pointer font-semibold text-gray-500'}>{li}</li>
                ))
              }
            </ul>
            <hr className='text-gray-300' />
            <br />
            <div className='flex flex-row-reverse gap-3 h-auto  w-[90%] overflow-x-scroll custom-scrollbar'>
              {booksArr.map(({ img, title }) => (
                <div className='rounded-md max-w-[200px] border-2 border-gray-300 hover:cursor-pointer bg-white'>
                  <img src={img} alt="bookImage" className='max-w-[130px] max-h-[200px] rounded-tl-md rounded-tr-md' />
                  <h1 className='text-[#bdbdbd] text-center text-[1.2rem] py-2'>{title}</h1>
                </div>
              ))}
            </div>
          </div>
          <br />
          <div>
            <h1 className='text-2xl font-semibold text-gray-600'>Your Friends also Reading</h1>
            <br />
            <div className='flex gap-3 h-auto w-[90%] overflow-x-scroll custom-scrollbar'>
              {booksArr.map(({ img, title }) => (
                <div className='rounded-md max-w-[250px] border-2 border-gray-300 hover:cursor-pointer bg-white'>
                  <img src={img} alt="bookImage" className='max-w-[130px] max-h-[200px] rounded-tl-md rounded-tr-md' />
                  <h1 className='text-[#bdbdbd] text-center text-[1.2rem] py-2'>{title}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
          <br /><br /><br />
          <footer className='border-t-2 border-gray-200 h-[80px] flex justify-between px-4 items-center text-gray-600'>
            <h1>© copyright 2021 Courseplus</h1>
            <ul className='flex gap-5'>
              {['About', 'Help', 'Terms', 'Privacy'].map((li) => (
                <li className='hover:text-blue-500 transition-all duration-500 ease-in-out cursor-pointer'>{li}</li>
              ))}
            </ul>
          </footer>
      </section>
    </>
  )
}

export default Books