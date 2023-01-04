import React from 'react'

function Buttons({ children, color }) {
  return (
    <button style={{ backgroundColor: color }} className="rounded-full py-2 px-5 text-white font-bold">{children}</button>
  )
}

export default Buttons