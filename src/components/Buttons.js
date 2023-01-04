import React from 'react'

function Buttons({ children }) {
  return (
    <button style={{ backgroundColor: "#FF0054" }} className="rounded-full py-2 px-5 text-white font-bold">{children}</button>
  )
}

export default Buttons