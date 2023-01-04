import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from '@components/Buttons'
import Icons from '@components/Icons'
import Colors from '@styles/Colors'
import Navbar from '@components/Navbar'

function Register() {
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
        <h1 className='text-6xl text-center font-bold text-white'>Creacion de <span style={{ color: Colors.pink }}>Cuenta</span></h1>
        <div className='flex w-full justify-center'>
          <Link to={'/login'}>
            <Buttons color={Colors.lightBlue}>Comience hoy</Buttons>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Register