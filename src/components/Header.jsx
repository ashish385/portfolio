import React from 'react'
// import Logo from '../assets/img/logo.svg'
import Nav from './Nav'
import NavMobile from './NavMobile'
import Socials from './Socials'
import { useState } from 'react'
import { useEffect } from 'react'

const Header = () => {

    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        })
    })
  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto flex h-full items-center justify-between">
        <a href="/">
          {/* <img src={Logo} alt="" /> */}
          <h1 className='text-3xl'>𝒜𝓈𝒽𝒾𝓈𝒽 𝒮𝑜𝓃𝒾</h1>
        </a>
        <div className="hidden lg:block ">
          <Nav />
        </div>
        <div className="hidden lg:block">
          <Socials />
        </div>
        <div className=" lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
}

export default Header


/* git remote add origin https://github.com/ashish385/School_ERP.git
git branch -M main
git push -u origin main */