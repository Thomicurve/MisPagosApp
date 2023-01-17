import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../firebase/auth';
import { useNavigate } from 'react-router-dom';

import Buttons from '@components/Buttons'
import Icons from '@components/Icons'
import Colors from '@styles/Colors'
import Navbar from '@components/Navbar'
import Footer from '../components/Footer'
import FormInputs from '@components/FormInputs'
import MainSection from '@components/MainSections'
import InputsError from '../components/InputsError';


function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Correo electronico invalido').required('Obligatorio'),
      password: Yup.string()
        .min(8, 'Debe contener al menos 8 caracteres')
        .required('Obligatorio'),
    }),
    onSubmit: values => {
      login(values, navigate)
    },
  });

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
        <h2 className='text-6xl mt-32 text-center font-bold text-white'>Iniciar <span style={{ color: Colors.pink }}>Sesión</span></h2>
        <form onSubmit={formik.handleSubmit} className='w-96 mx-auto my-10'>
          <FormInputs formikProps={formik.getFieldProps('email')} LabelText="Correo Electrónico" inputName="email" Type="email" />
          {formik.errors.email ? <InputsError>{formik.errors.email}</InputsError> : null}

          <FormInputs formikProps={formik.getFieldProps('password')} LabelText="Contraseña" inputName="password" Type="password" />
          {formik.errors.password ? <InputsError>{formik.errors.password}</InputsError> : null}

          <div className='flex w-full justify-around mt-12'>
            <Buttons btnType="submit" color={Colors.lightBlue}>Iniciar sesion</Buttons>
            <Link to={'/'}>
              <Buttons color={Colors.pink}>Volver</Buttons>
            </Link>
          </div>
        </form>

        <p className='text-gray-400 text-center mt-8'>No dispone de una cuenta? Cree una <Link to='/register' style={{ color: Colors.pink }}>aquí.</Link></p>
      </MainSection>
      <Footer />
    </>
  )
}

export default Login