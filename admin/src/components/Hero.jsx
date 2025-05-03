import React from 'react'
import { metaData } from '../assets/assest'

function Hero() {
  return (
    <section className=' h-screen grid place-items-center'>
       <div className='w-[90%] md:w-[70%] border p-10'>
        <h1 className='heading1 text-center'>{`Welcome to ${metaData.name} Admin Dashboard`}</h1>
        <p className='heading4 text-center text-neutral-800'>Manage your projects, clients, and progress — all in one place.</p>
        <div className='mt-8 grid place-items-center'>
            <button 
            className='bg-black mx-auto  text-accent text-sm px-6 cursor-pointer hover:opacity-80 trans py-2 rounded'>Get Started</button>
        </div>
       </div>
    </section>
  )
}

export default Hero
