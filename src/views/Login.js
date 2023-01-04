import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from '@components/Buttons'
import Icons from '@components/Icons'
import Colors from '@styles/Colors'
import Navbar from '@components/Navbar'

function Login() {
  return (
    <>
      <Navbar>
        <li>
          <Icons>github</Icons>
        </li>
        <li>
          <Icons>Linkedin</Icons>
        </li>
      </Navbar>

      <main style={{ height: '70vh' }} className='flex flex-col justify-center'>
        <h1 className='text-6xl text-center font-bold text-white'>Iniciar <span style={{ color: Colors.pink }}>Sesion</span></h1>
        <div className='flex w-full justify-center'>
          <Link to={'/login'}>
            <Buttons color={Colors.lightBlue}>Iniciar sesion</Buttons>
          </Link>
          <Link to={'/'}>
            <Buttons color={Colors.pink}>Volver</Buttons>
          </Link>
        </div>
        <p className='text-gray-400 text-center'>No dispone de una cuenta? Cree una <span style={{ color: Colors.pink }}>aquí.</span></p>
      </main>
    </>
  )
}

export default Login