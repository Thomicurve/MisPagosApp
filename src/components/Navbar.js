import React from 'react'

function Navbar({ children }) {
  return (
    <nav className='w-full flex items-center justify-end h-14 px-8' style={{ backgroundColor: "#0F172A" }}>
      <ul className='flex justify-end items-center gap-10'>
        {children}
      </ul>
    </nav>
  )
}

export default Navbar