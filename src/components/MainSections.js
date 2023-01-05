import React from 'react'

function MainSections({ children }) {
  return (
    <main style={{ height: '70vh' }} className='flex flex-col justify-center w-fit mx-auto'>
      {children}
    </main>
  )
}

export default MainSections