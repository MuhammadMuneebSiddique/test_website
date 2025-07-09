import React from 'react'
// import website_logo from "public/Group 2.png"

const Header = () => {
  return (
    <header className='header bg-[#FF5349] text-[10px] py-[2rem] flex text-[#fff] justify-center items-center gap-[2.4rem]'>
        <img src="/Group 2.png" className='w-[7.4em] h-[8em]' alt="website logo" />
        <h1 className='text-[5em] capitalize font-semibold font-outfit ' >mybindle</h1>
    </header>
  )
}

export default Header