import React from 'react'
import Buttons from '@components/Buttons'
import Icons from '@components/Icons'

function Welcome() {
  return (
    <>
      <nav className='w-full py-3 px-8' style={{ backgroundColor: "#0F172A" }}>
        <ul className='flex justify-end items-center gap-10'>
          <li>
            <Buttons>Iniciar Sesion</Buttons>
          </li>
          <li>
            <Icons>github</Icons>
          </li>
          <li>
            <Icons>Linkedin</Icons>
          </li>
        </ul>
      </nav>
      <main style={{ height: '70vh' }} className='flex flex-col justify-center'>
        <h1 className='text-6xl text-center font-bold text-white'>Mis Gastos App</h1>
        <h5 className='text-base my-5 text-center font-semibold text-gray-400'>Administre sus gastos de una manera facil y sencilla desde una sola app.</h5>
        <div className='flex w-full justify-center'>
          <Buttons>Comience hoy</Buttons>
        </div>
      </main>
    </>
  )
}

export default Welcome