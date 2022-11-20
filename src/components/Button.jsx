import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' 
    className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[1.2] text-primary outline-none
    ${styles} rounded-[0.8rem]`}>Get Started</button>
  )
}

export default Button