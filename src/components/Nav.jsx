import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='bg-slate-200 py-6 px-10 flex items-center  justify-between'>
      <Link to={"/"} className='text-teal-600 font-bold text-4xl'>SHARENOTE.IO</Link>
      <div className='flex items-center gap-2'>
        <Link to={"/register"} className='text-teal-600 font-medium'>Sign Up</Link>
        <Link to={"/login"} className='text-teal-600 font-medium'>Login</Link>
        <Link to={"/create"} className='text-teal-600 font-medium'>Create</Link>
      </div>
    </nav>
  )
}

export default Nav;
