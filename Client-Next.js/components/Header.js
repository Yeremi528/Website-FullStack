import React from 'react'
import  Link  from "next/link";
import Logo from "../images/logo.png"
import Image from "next/image"


const Header = () => {
  return (
    <nav className='bg-black  '>
      <div className='w-full  h-24 flex'>
        <div className='w-1/12'></div>
        <div className='w-2/5 mt-10  text-white text-base'>
         <Link href="/"><a className='text-gray-100 text-sm hover:underline   h-8 w-20  py-1 rounded'>AUTO</a></Link>
         <Link href="/"><a className='text-gray-100 text-sm hover:underline ml-6  h-8 w-20  py-1 rounded'>RACING</a></Link>
         <Link href="/"><a className='text-gray-100 text-sm  ml-6 hover:underline h-8 w-20  py-1 rounded'>STORE</a></Link>
         <Link href="/"><a className='text-gray-100 text-sm  ml-6 hover:underline h-8 w-20  py-1 rounded'>UNIVERSE</a></Link>
         <Link href="/"><a className='text-gray-100 text-sm  ml-6 hover:underline h-8 w-20  py-1 rounded'>CORPORATE</a></Link>
        </div>
        <div className='w-20'>
            <a href='/'>  <Image  alt='Logo' src={Logo}/>   </a>
           
        </div>
        <div className='w-1/5'></div>
        
        <div className='w-1/5  mt-10 text-white flex '>
          <Link href="/login"><a className='ml-6 mt-1'>Iniciar Sesion</a></Link>
          <Link href="/register"><a className='ml-4 mt-1'>Register</a></Link>
          

        </div>
      </div>
    </nav>
  )
}

export default Header