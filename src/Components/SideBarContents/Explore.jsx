import React from 'react'

let featureArr = [
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/courses/img-6.jpg', heading: 'Learn How to Build Responsive Web Design Essentials HTML5 CSS3 and Bootstrap', para: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam...', name: 'John Michael', time: '13 hours . 32 lectures', price: '$14.99' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/courses/img-1.jpg', heading: 'Learn JavaScript and Express to become a professional JavaScript developer.', name: 'John Michael', time: '13 hours . 32 lectures', price: '$14.99' },
]
export let classesArr = [
  {
    img: 'https://demo.foxthemes.net/courseplus/assets/images/courses/img-1.jpg', title: 'Learn JavaScript and Express to become a professional JavaScript', time: '13 hours·32 lectures', price: '$14.99', name: 'John Michael'
  },
  {
    img: 'https://demo.foxthemes.net/courseplus/assets/images/courses/img-2.jpg', title: 'Learn JavaScript and Express to become a professional JavaScript', time: '13 hours·32 lectures', price: '$14.99', name: 'John Michael'
  },
  {
    img: 'https://demo.foxthemes.net/courseplus/assets/images/courses/img-3.jpg', title: 'Learn JavaScript and Express to become a professional JavaScript', time: '13 hours·32 lectures', price: '$14.99', name: 'John Michael'
  },
  {
    img: 'https://demo.foxthemes.net/courseplus/assets/images/courses/img-1.jpg', title: 'Learn JavaScript and Express to become a professional JavaScript', time: '13 hours·32 lectures', price: '$14.99', name: 'John Michael'
  }
]
export let booksArr = [
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/book/book4.jpg', title: 'HTML Breaker' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/book/book5.jpg', title: 'CSS Master' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/book/book1.jpg', title: 'Vue.js Basics' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/book/book2.jpg', title: 'HTML5 & CSS3' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/book/book3.jpg', title: 'learn CSS' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/book/book4.jpg', title: 'HTML Breaker' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/book/book5.jpg', title: 'CSS Master' }
]
let latestArr = [
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/episodes/img-2.jpg', title: 'The PHP Singleton class', name: 'By Stella Johnson' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/episodes/img-4.jpg', title: 'Larafel $ fliepond', name: 'By Jesse Stevens' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/episodes/img-1.jpg', title: 'Creating a Laravel Package', name: 'By John Michael' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/episodes/img-3.jpg', title: 'Creating sticky in HTML', name: 'By Monroe Parker' }
]

const Explore = () => {
  return (
    <>
      <section className='h-[100vh] w-[1220px] overflow-y-scroll custom-scrollbar bg-gray-100'>
        <div className='h-[130vh] w-full'>
          <figure className='h-[500px] w-full relative'>
            <img src="https://demo.foxthemes.net/courseplus/assets/images/hero-1.jpg" alt="HeroImage" className='object-cover h-full w-full' />
            <article className='absolute bottom-[180px] left-[150px] text-white'>
              <h1 className='text-4xl font-semibold'>Learn from the best</h1>
              <p className='font-semibold py-3'>Choose from 130,000 online video courses with new <br /> additions published every month</p>
              <button className='bg-white text-gray-500 font-semibold px-5 py-2.5 rounded-lg hover:text-blue-400 cursor-pointer transition-all'>Get Started</button>
            </article>
          </figure>
          <section className='h-auto w-full pt-10'>
            <h1 className='font-semibold text-center py-4 text-2xl'>Featured Classes</h1>
            <div className='w-[819px] h-auto mx-auto flex gap-2 overflow-x-scroll overflow-hidden custom-scrollbar'>
              {featureArr.map(({ img, heading, para, name, price, time }) => (
                <div className='h-full w-[2000px] flex rounded-md gap-1 pr-2 bg-white'>
                  <figure className='w-[705px] h-[250px] rounded-tl-md'>
                    <img src={img} alt="" className='h-full w-full object-cover rounded-tl-md' />
                  </figure>
                  <article>
                    <h1 className='text-[#727272] font-semibold text-[1.3rem]'>{heading}</h1>
                    <p className='text-[#727272] font-semibold py-2'>{para}</p>
                    <h1 className='text-[#727272] font-semibold text-[1.3rem] pb-2'>{name}</h1>
                    <div className='text-[#727272] flex justify-between'>
                      <h1>{time}</h1>
                      <h1 className='font-semibold text-2xl'>{price}</h1>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <h1 className='text-2xl text-center font-semibold py-3'>Popular Classes</h1>
            <div className='flex gap-3 h-auto w-[820px] mx-auto overflow-x-scroll custom-scrollbar rounded-md'>
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

            <h1 className='font-semibold text-center py-4 text-2xl'>Latest Books</h1>
            <div className='flex gap-3 h-auto mx-auto w-[820px] overflow-x-scroll custom-scrollbar'>
              {booksArr.map(({ img, title }) => (
                <div className='rounded-md max-w-[250px] border-2 border-gray-300 hover:cursor-pointer bg-white'>
                  <img src={img} alt="bookImage" className='max-w-[250px] max-h-[200px] rounded-tl-md rounded-tr-md' />
                  <h1 className='text-[#bdbdbd] text-center text-[1.2rem] py-2'>{title}</h1>
                </div>
              ))}
            </div>
            <br />
            <div className='h-auto w-[820px] bg-white rounded-md mx-auto p-2'>
              <h1 className='text-2xl font-semibold text-center py-2'>Latest Episodes</h1>
              <hr className='text-gray-300' /><br />
              <div className='flex items-center gap-5 overflow-x-scroll custom-scrollbar'>
                {
                  latestArr.map(({ img, title, name }) => (
                    <div className='w-[300px] h-auto rounded-lg p-1 border-2 border-gray-200'>
                      <figure className='w-[270px] rounded-lg overflow-hidden'>
                        <img src={img} alt="" className='w-full' />
                      </figure>
                      <h1 className='text-[1rem] font-semibold text-gray-500 py-1'>{title}</h1>
                      <h1 className='text-[1rem] font-semibold text-gray-400'>{name}</h1>
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
        </div>
      </section>
    </>
  )
}

export default Explore