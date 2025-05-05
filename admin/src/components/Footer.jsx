import React from 'react'
import { Logo } from '../components/exportComp'

function Footer() {
  return (
    <section className='bg-black text-white text-normal min-h-24 text-sm grid place-items-cente p-5'>
       <div>
         <Logo logoSize='size-6' textSize='heading4' />
        <p>Wed 25/03/2025</p>
        <p>Banginic @ 2025 All Right Reserver</p>
       </div>
    </section>
  )
}

export default Footer
