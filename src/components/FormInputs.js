import React, { useEffect } from 'react'

const inputTypes = ["password", "email", "text"];
function FormInputs({ inputName, LabelText, Type }) {

  useEffect(() => {
    if (inputTypes.every(i => i != Type)) {
      throw new Error("Type of input's wrong. Please check your form inputs types!")
    }

  }, [Type])

  return (
    <div className='w-full my-3 flex flex-col'>
      <label className='text-white my-2 text-sm font-medium' htmlFor={inputName}>{LabelText}</label>
      <input name={inputName} className="rounded p-2" type={Type} />
    </div>
  )
}

export default FormInputs