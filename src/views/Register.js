import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from '@components/Buttons'
import Icons from '@components/Icons'
import Colors from '@styles/Colors'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import FormInputs from '@components/FormInputs'
import MainSections from '@components/MainSections'

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

      <MainSections>
        <h2 className='text-6xl text-center font-bold text-white'>Creación de <span style={{ color: Colors.pink }}>Cuenta</span></h2>
        <form className='w-96 mx-auto my-10'>
          <FormInputs LabelText="Nombre Completo" inputName="fullname" Type="text" />
          <FormInputs LabelText="Correo Electronico" inputName="email" Type="email" />
          <FormInputs LabelText="Contraseña" inputName="password" Type="password" />
          <FormInputs LabelText="Repita la Contraseña" inputName="repeatedPassword" Type="password" />
        </form>
        <div className='flex w-full justify-center gap-20'>
          <Buttons color={Colors.lightBlue}>Crear cuenta</Buttons>
          <Link to={'/login'}>
            <Buttons color={Colors.pink}>Volver</Buttons>
          </Link>
        </div>
      </MainSections>
      <Footer />
    </>
  )
}

export default Register