import React from 'react'
import Colors from '@styles/Colors'

function InputsError({ children }) {
  return (
    <div>
      <p style={{ color: Colors.pink }} className="text-xs my-1 font-semibold">{children}</p>
    </div>
  )
}

export default InputsError