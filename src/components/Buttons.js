import React from 'react'

function Buttons({ children, color, btnType = "button" }) {
  return (
    <button type={btnType} style={{ backgroundColor: color }} className="rounded-full py-2 w-36 text-white font-semibold">{children}</button>
  )
}

export default Buttons