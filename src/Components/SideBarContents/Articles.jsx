import React from 'react'
import { FaRegThumbsUp } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CiSaveDown2 } from "react-icons/ci";

let articleArr = [
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/blog/img-4.jpg', imgText: 'JavaScript', head: 'Interesting JavaScript and CSS Libraries in 2021 you should be know', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod', like: '12', msg: '12' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/blog/img-1.jpg', imgText: 'Experiments', head: 'Top Amazing web demos and experiments in 2021 Should Know About', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod', like: '23', msg: '43' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/blog/img-2.jpg', imgText: 'Tools', head: 'Awesome Web Dev Tools and Resources For 2021 in 30 Minutes', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod', like: '12', msg: '32' },
  { img: 'https://demo.foxthemes.net/courseplus/assets/images/blog/img-3.jpg', imgText: 'JavaScript', head: 'Interesting JavaScript and CSS libraries for 2021 Should Know About', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod', like: '23', msg: '43' }
]

const Articles = () => {
  return (
    <>
      <section className='h-[100vh] w-[1220px] overflow-y-scroll custom-scrollbar bg-gray-100'>
        <br /><br /><br />
        <div className='w-[75%] mx-auto'>
          <h1 className='text-2xl font-semibold py-1 text-gray-600'>Articles</h1>
          <div>
            <ul className='flex gap-10 font-semibold text-gray-500'>
              {
                ['Suggestions', 'Mobile App', 'JavaScript', 'Softwares', 'Drawing',].map((li, index) => (
                  <li key={index} className={`py-3 hover:text-blue-500 cursor-pointer ${index === 0 && 'border-b-2 border-b-blue-600'}`}>{li}</li>
                ))
              }
            </ul>
            <hr className='text-gray-400' />
            <br />
            <section className='w-full'>
              <div className='w-[75%] h-auto p-2'>
                {
                  articleArr.map(({ img, imgText, head, text, like, msg }) => (
                    <div className='flex gap-5 w-[100%] items-center mb-3'>
                      <figure className='w-[75%] rounded-md overflow-hidden relative cursor-pointer'>
                        <img src={img} alt="" className='w-full h-full'/>
                        <figcaption className='absolute top-4 left-3 bg-[#ff993273] px-1.5 py-0.5 text-white rounded-full'>{imgText}</figcaption>
                      </figure>
                      <article>
                        <h1 className='text-[1.3rem] text-gray-500 font-semibold'>{head}</h1>
                        <p className='text-gray-500 py-0.5'>{text}</p>
                        <div className='flex gap-5'>
                          <div className='flex items-center'><FaRegThumbsUp /> {like}</div>
                          <div className='flex items-center'><IoChatbubbleEllipsesOutline /> {msg}</div>
                          <div className='flex items-center'><CiSaveDown2/></div>
                        </div>
                      </article>
                    </div>
                  ))
                }
              </div>
              <div>

              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default Articles