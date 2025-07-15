import React from 'react'
import { Outlet } from 'react-router-dom'

const MainContent = () => {
  return (
    <>
      <section>
        <Outlet/>
      </section>
    </>
  )
}

export default MainContent