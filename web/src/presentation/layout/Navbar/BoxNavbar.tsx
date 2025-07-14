

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { navLinks } from './constants/navLinks'

function BoxNavbar() {
  return (
    <div className='bg-zinc-800 flex justify-around items-center'>
      <div className='flex items-center'>
        <Image src="http://www.w3.org/2000/svg" alt='logo' width={100} height={100} priority/>
        <span className='text-white font-semibold mr-1'>Logo</span>
        <span className='text-orange-500 font-semibold'>Marca</span>
      </div>
      <div className='flex gap-x-3'>
        {navLinks.map((item, index)=> (
            <Link key={index} href="/">
                {item.label}
            </Link>
        ))}
      </div>
    </div>
  )
}

export default BoxNavbar
