'use client'
import React from 'react'
import Link from 'next/link'
import { DribbbleIcon, GitHubIcon, LinkedInIcon, Mountain, PinterestIcon, XIcon } from './icons'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'




const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }
  return (

    <header className='fixed bg-white w-full h-24 shadow-xl px-32 py-4 font-medium flex items-center justify-between flex-wrap  '>
 
        <nav className='flex gap-2 hidden sm:flex'>
            <Link href="/" >Home</Link>
            <Link href="/about" >About</Link>
            <Link href="/proyects" >Proyects</Link>

        </nav>
        <div className='w-16 h-16 bg-black text-white flex items-center justify-center font-bold text-2xl rounded-full'>
            PF
        </div >
        <nav className='flex items-center justify-center flex-wrap gap-2 hidden sm:flex' >
            <a href='http://x.com' target={'_blank'}><XIcon/></a>
            <a href='https://github.com/Patriciof02' target={'_blank'}><GitHubIcon/></a>
            <a href='https://linkedin.com' target={'_blank'}><LinkedInIcon/></a>
            <a href='https://pinterest.com' target={'_blank'}><PinterestIcon/></a>
            <a href='https://dribble.com' target={'_blank'}><DribbbleIcon/></a>
          
        </nav>
        <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
          <AiOutlineMenu size={25}/>
        </div>
        <div className={
          menuOpen
          ? "fixed left-0 top-0 w-[65] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 "
          : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
          <div className='flex w-full item-center justify-end'>
            <div onClick={handleNav} className='cursor-pointer'> 
            <AiOutlineClose size={25}/>
            </div>
          </div>
          <div className='flex py-2'>
            <ul>
              <Link href="/" >
               <li  onClick={() => setMenuOpen(false)} className=' my-4 cursor-pointer'>
                Home
               </li>
            </Link>
            <Link href="/about" >
               <li  onClick={() => setMenuOpen(false)} className='my-4 cursor-pointer'>
                About
               </li>
            </Link>
            <Link href="/proyects" >
               <li onClick={() => setMenuOpen(false)} className=' my-4 cursor-pointer'>
                Proyects
               </li>
               
            </Link>
            </ul> 
            </div>
            <div className=' flex items-center justify-center flex-wrap gap-2 '>
            <a href='http://x.com' target={'_blank'} onClick={() => setMenuOpen(false)} className='cursor-pointer' ><XIcon/></a>
            <a href='https://github.com/Patriciof02' target={'_blank'} onClick={() => setMenuOpen(false)} className='cursor-pointer'><GitHubIcon/></a>
            <a href='https://linkedin.com' target={'_blank'} onClick={() => setMenuOpen(false)} className=' cursor-pointer'><LinkedInIcon/></a> 
         
          </div>
          <div className='flex items-center justify-center flex-wrap gap-2 '>
          <a href='https://pinterest.com' target={'_blank'} onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer'><PinterestIcon/></a> 
          <a href='https://dribble.com' target={'_blank'} onClick={() => setMenuOpen(false)} className='cursor-pointer'><DribbbleIcon/></a>
          </div>

        </div>
       
    </header>

  
  )
}

export default NavBar
