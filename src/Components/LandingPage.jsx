import React from 'react'
import LeftSideBar from './LeftSideBar'
import MainContent from './MainContent'

const LandingPage = () => {
  return (
    <>
      <section className='flex'>
        <LeftSideBar />
        <MainContent />
      </section>
    </>
  )
}

export default LandingPage