import React from 'react'
import { classesArr } from './Explore'

export let categoriesArr = [
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/category/design.jpg', text: 'Design' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/category/marketing.jpg', text: 'Marketing' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/category/it-and-software.jpg', text: 'Software' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/category/music.jpg', text: 'Music' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/category/business.jpg', text: 'Travel' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/category/development.jpg', text: 'Development' },
]
let devArr = [
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/courses/img-4.jpg', title: 'Learn Angular Fundamentals From beginning to advance lavel', time: '32 hours·lec 4', name: 'Jesse Stevens', price: '$29.99' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/courses/img-6.jpg', title: 'Build Responsive Real World Websites with HTML5 and CSS3', time: '13 hours·32 lectures', name: 'John Michael', price: '$14.99' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/courses/img-5.jpg', title: 'C# Developers Double Your Coding Speed with Visual Studio', time: '18 hours·42 lectures', name: 'Stella Johnson', price: '$18.99' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/courses/img-1.jpg', title: 'Learn JavaScript and Express to become a professional JavaScript developer.', time: '13 hours·32 lectures', name: 'John Michael', price: '$14.99' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/courses/img-2.jpg', title: 'Learn and Understand AngularJS to become a professional developer', time: '26 hours·26 lectures', name: 'Stella Johnson', price: '$18.99' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/courses/img-3.jpg', title: 'Responsive Web Design Essentials HTML5 CSS3 and Bootstrap', time: '18 hours·42 lectures', name: 'Monroe Parker', price: '$11.99' },
]

const Courses = () => {
  return (
    <>
      <section className='h-[100vh] w-[1220px] overflow-y-scroll custom-scrollbar bg-gray-100 pt-28'>
        <div className='w-[75%] mx-auto'>
          <h1 className='text-[1.4rem] text-gray-500 font-bold'>The world's largest selection of courses</h1>
          <h1 className='text-gray-400'>Choose from 130,000 online video courses with new additions published every month</h1><br />
          <div>
            <ul className='flex gap-x-10 font-bold text-gray-500'>
              {['Python', 'Web development', 'JavaScript', 'Softwares', 'Drawing'].map((li, index) => (
                <li className={index === 0 ? 'border-b-3 border-blue-500 py-2 cursor-pointer' : 'py-2 cursor-pointer hover:text-blue-700'}>{li}</li>
              ))}
            </ul>
            <hr className='text-gray-300' />
          </div>
        </div>
        <br />
        <div className='flex gap-3 h-auto w-[940px] mx-auto overflow-x-scroll custom-scrollbar rounded-md'>
          {classesArr.map(({ img, title, time, price, name }) => (
            <div className='w-[820px] rounded-lg border-gray-300 border-[2px] hover:cursor-pointer bg-white'>
              <figure className='w-[300px] h-[57%] rounded-tl-lg rounded-tr-lg overflow-hidden'>
                <img src={img} alt="classIamge" className='object-cover h-full w-full' />
              </figure>
              <article className='p-2 text-[#727272]'>
                <h1 className='text-[1.1rem] font-semibold pb-1'>{title}</h1>
                <h1>{time}</h1>
                <div className='flex justify-between pt-1'>
                  <span>{name}</span><span className='text-[1.2rem] font-semibold'>{price}</span>
                </div>
              </article>
            </div>
          ))}
        </div>
        <br />
        <div>
          <article className='w-[940px] mx-auto py-3'>
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
        <br />
        <div className='w-[950px] mx-auto'>
          <h1 className='text-[1.2rem] text-gray-600 font-semibold'>Web Development Courses</h1>
          <h1 className='text-gray-500 py-1'>Choose from +10.000 courses with new additions published every months</h1>
          <br />
          <div className='flex flex-wrap w-[950px] gap-3 mx-auto'>
            {
              devArr.map(({ img, title, name, time, price }) => (
                <div className='w-[300px] h-[370px] rounded-lg border-gray-300 border-[2px] hover:cursor-pointer bg-white'>
                  <figure className='w-[300px] h-[57%] rounded-tl-lg rounded-tr-lg overflow-hidden'>
                    <img src={img} alt="classIamge" className='object-cover h-full w-full' />
                  </figure>
                  <article className='p-2 text-[#727272]'>
                    <h1 className='text-[1.1rem] font-semibold pb-1'>{title}</h1>
                    <h1>{time}</h1>
                    <div className='flex justify-between pt-1'>
                      <span>{name}</span><span className='text-[1.2rem] font-semibold'>{price}</span>
                    </div>
                  </article>
                </div>
              ))
            }
          </div>
        </div><br /><br /><br /><br />
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

export default Courses