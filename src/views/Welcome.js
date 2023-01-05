import React from 'react'
import Buttons from '@components/Buttons'
import Icons from '@components/Icons'
import Colors from '@styles/Colors'
import Navbar from '@components/Navbar'
import MainSections from '@components/MainSections'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <>
      <Navbar>
        <li>
          <Link to={'/login'}>
            <Buttons color={Colors.pink}>Iniciar Sesion</Buttons>
          </Link>
        </li>
        <li>
          <Icons>github</Icons>
        </li>
        <li>
          <Icons>Linkedin</Icons>
        </li>
      </Navbar>

      <MainSections>
        <h1 className='text-6xl text-center font-bold text-white'>Mis Gastos <span style={{ color: Colors.pink }}>App</span></h1>
        <h5 className='text-base my-5 text-center font-semibold text-gray-400'>Administre sus gastos de una manera facil y sencilla desde una sola app.</h5>
        <div className='flex w-full justify-center'>
          <Link to={'/login'}>
            <Buttons color={Colors.lightBlue}>Comience hoy</Buttons>
          </Link>
        </div>
      </MainSections>
    </>
  )
}

export default Welcome