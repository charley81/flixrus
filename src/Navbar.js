import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <h1 className='nav__logo'>flixRus</h1>
      <img
        className='nav__avatar'
        src='https://pbs.twimg.com/profile_images/'
        alt=''
      />
    </div>
  )
}

export default Navbar
