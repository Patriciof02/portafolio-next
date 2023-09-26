import React from 'react'
import Link from 'next/link'
import { DribbbleIcon, GitHubIcon, LinkedInIcon, Mountain, PinterestIcon, XIcon } from './icons'

const NavBar = () => {
  return (
    <>
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between flex-wrap static '>
        <nav className='flex gap-2'>
            <Link href="/" >Home</Link>
            <Link href="/about" >About</Link>
            <Link href="/proyects" >Proyects</Link>

        </nav>
        <div className='w-16 h-16 bg-black text-white flex items-center justify-center font-bold text-2xl rounded-full'>
            PF
        </div >
        <nav className='flex items-center justify-center flex-wrap gap-2'>
            <a href='http://x.com' target={'_blank'}><XIcon/></a>
            <a href='https://github.com' target={'_blank'}><GitHubIcon/></a>
            <a href='https://linkedin.com' target={'_blank'}><LinkedInIcon/></a>
            <a href='https://pinterest.com' target={'_blank'}><PinterestIcon/></a>
            <a href='https://dribble.com' target={'_blank'}><DribbbleIcon/></a>
            <a href='/'><Mountain/></a>

        </nav>
        <nav class="border-gray-200  dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
    <button data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    <div class="hidden w-full" id="navbar-hamburger">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>

    </>
  )
}

export default NavBar
