import React from 'react'

const Button = ({ styles }) => (
  <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[12px] hover:text-white duration-300 ${styles}`}>
    Get Started
  </button>
)


export default Button