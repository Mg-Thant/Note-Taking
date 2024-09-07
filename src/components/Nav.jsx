import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='bg-slate-200 py-6 px-10 flex items-center  justify-between'>
      <h1 className='text-teal-600 font-bold text-4xl'>SHARENOTE.IO</h1>
      <div>
        <Link to={"/create"} className='text-teal-600 font-medium'>Create</Link>
      </div>
    </nav>
  )
}

export default Nav;
