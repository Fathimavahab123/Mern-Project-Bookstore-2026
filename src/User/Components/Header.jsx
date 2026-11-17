import React, { useState } from 'react'
import { FaBars, FaFacebookSquare, FaInstagram, FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Header() {
  const [toggle,settoggle]= useState(false)
  return (
    <>
      {/*Header top part */}
      <div className='grid grid-cols-3 p-3'>
       {/*Logo*/}
       <div className='flex items-center'>
        <img width={'50px'} height={'50px'} src="https://png.pngtree.com/png-clipart/20231016/original/pngtree-3d-rendering-three-books-isolated-png-image_13321592.png" alt="logo" />
        <h1 className='text-2xl ms-3 font-bold md:hidden'>BOOKSTORE</h1>
       </div>
      {/*Title*/}
      <div className='md:flex justify-center items-center hidden'>
        <h1 className='text-3xl font-bold'>BOOK STORE</h1>
      </div>
      {/*Login*/}
      <div className='md:flex items-center justify-end hidden'>
        <FaInstagram/>
        <FaXTwitter/>
        <FaFacebookSquare/>
        <Link to={'/login'} className='flex justify-center items-center ms-5 border rounded px-3 py-2 hover:bg-black hover:text-white'> <FaUser className='me-1'/> Login</Link>
      </div>
      </div>
      {/*Navigation part*/}
      <nav className='bg-black w-full text-white md:flex justify-center items-center p-3'>
        {/*Menu & login at small screen */}
        <div className='flex justify-between items-center text-2xl md:hidden'>
          <button onClick={()=>settoggle(!toggle)}> <FaBars/> </button>
         <Link to={'/login'} className='flex justify-center items-center ms-5 border rounded px-3 py-2 hover:bg-black hover:text-white'> <FaUser className='me-1'/> Login</Link>
       </div>
        <ul className={toggle?'flex flex-col':'md:flex hidden'}>
          <li><Link to={'/'} className='md:mx-4'>HOME</Link></li>
          <li><Link to={'/books'} className='md:mx-4'>BOOKS</Link></li>
          <li><Link to={'/contact'} className='md:mx-4'>CONTACT</Link></li>
        </ul>

      </nav>
    </>
  )
}

export default Header
