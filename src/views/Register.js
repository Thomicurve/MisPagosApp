import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerNewUser } from '@fire/auth';

import Buttons from '@components/Buttons'
import Icons from '@components/Icons'
import Colors from '@styles/Colors'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import FormInputs from '@components/FormInputs'
import MainSections from '@components/MainSections'
import InputsError from '@components/InputsError';

const requiredMessage = "Obligatorio";

function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      repeatedPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Correo electronico invalido')
        .required(requiredMessage),
      password: Yup.string().min(8, 'Debe contener al menos 8 caracteres')
        .oneOf([Yup.ref("repeatedPassword")], "Las contraseñas deben ser iguales")
        .required(requiredMessage),
      repeatedPassword: Yup.string().required(requiredMessage).oneOf([Yup.ref("password")], "Las contraseñas deben ser iguales"),
      fullname: Yup.string().matches(/^[a-zA-Z\s]+$/, "Ingrese un nombre válido por favor").required(requiredMessage)
    }),
    onSubmit: registerData => {
      registerNewUser(registerData, navigate)
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

      <MainSections>
        <h2 className='text-6xl mt-32 text-center font-bold text-white'>Creación de <span style={{ color: Colors.pink }}>Cuenta</span></h2>
        <form onSubmit={formik.handleSubmit} className='w-96 mx-auto my-10'>
          <FormInputs formikProps={formik.getFieldProps('fullname')} LabelText="Nombre Completo" inputName="fullname" Type="text" />
          {formik.errors.fullname ? <InputsError>{formik.errors.fullname}</InputsError> : null}

          <FormInputs formikProps={formik.getFieldProps('email')} LabelText="Correo Electronico" inputName="email" Type="email" />
          {formik.errors.email ? <InputsError>{formik.errors.email}</InputsError> : null}

          <FormInputs formikProps={formik.getFieldProps('password')} LabelText="Contraseña" inputName="password" Type="password" />
          {formik.errors.password ? <InputsError>{formik.errors.password}</InputsError> : null}

          <FormInputs formikProps={formik.getFieldProps('repeatedPassword')} LabelText="Repita la Contraseña" inputName="repeatedPassword" Type="password" />
          {formik.errors.repeatedPassword ? <InputsError>{formik.errors.repeatedPassword}</InputsError> : null}

          <div className='flex w-full mt-10 justify-center gap-20'>
            <Buttons btnType="submit" color={Colors.lightBlue}>Crear cuenta</Buttons>
            <Link to={'/login'}>
              <Buttons color={Colors.pink}>Volver</Buttons>
            </Link>
          </div>
        </form>

      </MainSections>
      <Footer />
    </>
  )
}

export default Register