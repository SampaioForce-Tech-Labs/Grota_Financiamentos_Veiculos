'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { navLinks, socialLinks } from './constants/navLinks'
import { Facebook, Instagram, Linkedin, User } from 'lucide-react'

const iconComponents = {
  Facebook: Facebook,
  Instagram: Instagram,
  Linkedin: Linkedin,
  User: User,
  
};

function BoxNavbar() {
  return (
    <div className='bg-zinc-800 flex justify-around items-center py-8 px-10'>
      <div className='flex items-center'>
        <Image src="https://res.cloudinary.com/dm8vb9gkj/image/upload/v1742745497/logo_cn8jdk.svg" alt='logo' width={100} height={100} priority/>
        <span className='text-white font-semibold mr-1'>Logo</span>
        <span className='text-orange-500 font-semibold'>Marca</span>
      </div>
      <div className='flex gap-x-3'>
        {navLinks.map((item, index)=> (
            <Link key={index} href="/" className='text-white hover:text-orange-500 font-semibold'>
                {item.label}
            </Link>
        ))}
      </div>
      <div className='flex gap-x-3'>
       {socialLinks.map((item, index) => {
          const IconComponent = iconComponents[item.icon as keyof typeof iconComponents]; // Gets the icon component
          return (
            <Link key={index} href={item.href} className="text-white hover:text-orange-500">
              <IconComponent size={24} />
            </Link>
          );
        })}
      </div>
      <div>
        <button className='flex items-center bg-orange-500 w-full h-10 text-white font-semibold rounded-xl cursor-pointer px-3 gap-x-2'><User size={24} /> Área do Lojista</button>
      </div>
    </div>
  )
}

export default BoxNavbar
