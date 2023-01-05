import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from '@components/Buttons'
import Icons from '@components/Icons'
import Colors from '@styles/Colors'
import Navbar from '@components/Navbar'
import Footer from '../components/Footer'
import FormInputs from '@components/FormInputs'
import MainSection from '@components/MainSections'

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

      <MainSection>
        <h2 className='text-6xl text-center font-bold text-white'>Iniciar <span style={{ color: Colors.pink }}>Sesión</span></h2>
        <form className='w-96 mx-auto my-10'>
          <FormInputs LabelText="Correo Electrónico" inputName="email" Type="email" />
          <FormInputs LabelText="Contraseña" inputName="password" Type="password" />
        </form>
        <div className='flex w-full justify-around'>
          <Link to={'/login'}>
            <Buttons color={Colors.lightBlue}>Iniciar sesion</Buttons>
          </Link>
          <Link to={'/'}>
            <Buttons color={Colors.pink}>Volver</Buttons>
          </Link>
        </div>
        <p className='text-gray-400 text-center mt-8'>No dispone de una cuenta? Cree una <Link to='/register' style={{ color: Colors.pink }}>aquí.</Link></p>
      </MainSection>
      <Footer />
    </>
  )
}

export default Login