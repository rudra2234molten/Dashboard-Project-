import React from 'react'
import { categoriesArr } from './Courses'

let epeisodeArr = [
  {
    img: 'https://demo.foxthemes.net/courseplus/assets/images/blog/img-5.jpg', text: 'Learn Angular Fundamentals From beginning to advance lavel Denise Marie · 27 weeks ago · 156.9K views'
  },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/episodes/img-2.jpg', text: 'The PHP Singleton class' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/episodes/img-3.jpg', text: 'Creating sticky in HTML' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/episodes/img-4.jpg', text: 'Larafel $ fliepond' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/episodes/img-1.jpg', text: 'Creating Website Pure CSS' }
]

let graphicArr = [
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/episodes/img-2.jpg', text: 'The PHP Singleton class', name: 'By Stella Johnson' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/episodes/img-4.jpg', text: 'Larafel $ fliepond', name: 'By Jesse Stevens' },
  {
    img: 'https://demo.foxthemes.net/courseplus/assets/images/episodes/img-1.jpg', text: 'Creating a Laravel Package', name: 'By John Michael'
  },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/episodes/img-3.jpg', text: 'Creating sticky in HTML', name: 'By Monroe Parker' }
]

const Epeisodes = () => {
  return (
    <>
      <section className='w-[1220px] pt-20 h-[100vh] bg-gray-100 overflow-y-scroll custom-scrollbar'>
        <br />
        <div className="w-[75%] h-[300px] mx-auto">
          <h1 className='text-3xl font-semibold pb-3'>Episodes</h1>
          <div className='h-full w-full grid gap-5 grid-cols-[repeat(4,1fr)]'>
            {
              epeisodeArr.map(({ img, text }, index) => (
                <div className={index === 0 ? 'col-span-2 row-span-2 h-auto rounded-md overflow-hidden relative cursor-pointer' : 'h-[200px] rounded-md overflow-hidden relative cursor-pointer'}><img src={img} alt="" className='h-full w-full' /><article className='absolute bottom-3 text-[1.5rem] text-white font-semibold bg-[#ffffff0c] backdrop-blur-xl p-2'><h1 className='leading-[20px]'>{text}</h1></article></div>
              ))
            }
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className='w-[75%] h-[300px] mx-auto border-2 border-gray-300 rounded-md'>
          <h1 className='py-2 text-[1.2rem] px-2'>★ Graphic desginer</h1>
          <hr className='p-2 text-gray-300' />
          <div className='flex gap-5 overflow-x-scroll custom-scrollbar'>
            {
              graphicArr.map(({ img, text, name }) => (
                <div className='h-[250px] w-auto cursor-pointer'>
                  <figure className='w-[290px] rounded-md overflow-hidden'>
                    <img src={img} alt="" className='w-full' />
                  </figure>
                  <article className='text-gray-600'>
                    <h1 className='text-[1.2rem]'>{text}</h1>
                    <h1>{name}</h1>
                  </article>
                </div>
              ))
            }
          </div>
        </div>
        <br />
        <div>
          <article className='w-[940px] mx-auto py-3 pl-5'>
            <h1 className='text-[1.2rem] font-semibold'>Categories</h1>
            <h1 className='text-gray-600 py-1'>Find a topic by browsing top categories.</h1>
          </article>
          <div className='flex gap-5 w-[900px] mx-auto'>
            {categoriesArr.map(({ img, text }) => (
              <div className="h-[150px] w-[150px] relative rounded-lg overflow-hidden">
                <img src={img} alt="" className='absolute w-full h-full' />
                <h1 className='absolute bottom-3 left-3 text-white font-bold'>{text}</h1>
              </div>
            ))}
          </div>
        </div>
        <br /><br />
        <div className='w-[75%] h-[300px] mx-auto border-2 border-gray-300 rounded-md'>
          <h1 className='py-2 text-[1.2rem] px-2'>★ Graphic desginer</h1>
          <hr className='p-2 text-gray-300' />
          <div className='flex gap-5 overflow-x-scroll custom-scrollbar'>
            {
              graphicArr.map(({ img, text, name }) => (
                <div className='h-[250px] w-auto cursor-pointer'>
                  <figure className='w-[290px] rounded-md overflow-hidden'>
                    <img src={img} alt="" className='w-full' />
                  </figure>
                  <article className='text-gray-600'>
                    <h1 className='text-[1.2rem]'>{text}</h1>
                    <h1>{name}</h1>
                  </article>
                </div>
              ))
            }
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

export default Epeisodes