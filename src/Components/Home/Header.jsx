import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header className='absolute md:right-10 top-8 '>
        <div className='flex md:justify-end gap-10 font-medium '>
            <a href='#home' className='nav cursor-pointer'>Home</a>
            <a href='#work' className='nav cursor-pointer'>Work</a>
            <a href='#about' className='nav cursor-pointer'>About Me</a>
            <a href='#contact' className='nav cursor-pointer'>Contact</a>
        </div>
    </header>
  )
}

export default Header