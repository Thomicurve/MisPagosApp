import React from 'react'

function Buttons({ children, color }) {
  return (
    <button style={{ backgroundColor: color }} className="rounded-full py-2 w-36 text-white font-semibold">{children}</button>
  )
}

export default Buttons