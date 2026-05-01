import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets';
import {Link} from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa6';
import { FaXmark, FaBars } from 'react-icons/fa6';

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <nav className='fixed w-full bg-champagne/20 backdrop-blur-2xl z-50 shadow-sm top-0 '>
      <div className='container mx-auto px-4 py-4'>

        <div className='flex items-center justify-between'>

          {/* Logo Section */}
          <Link to="/">
            <div className='cursor-pointer'>
                <img className='h-8 w-auto md:h-10 lg:h-16 rounded' src={assets.logo} alt="Logo" />
            </div>
          </Link>

          {/* Desktop Navigation */}
           <div className='hidden md:flex space-x-6 items-center text-dark/80 font-bold'>

                <Link to='/' className='text-charcoal hover:text-gold font-medium transition duration-300 cursor-pointer'>
                    Home
                </Link>

                <Link to='/about' className='text-charcoal hover:text-gold font-medium transition duration-300 cursor-pointer'>
                    About 
                </Link>

                <Link to='/gallery' className='text-charcoal hover:text-gold font-medium transition duration-300 cursor-pointer'>
                    Gallery
                </Link>

                <Link to='/services' className='text-charcoal hover:text-gold font-medium transition duration-300 cursor-pointer'>
                    Services
                </Link>

                <Link to='/contact' className='text-charcoal hover:text-gold font-medium transition duration-300 cursor-pointer'>
                    Contact
                </Link>

            </div>

          {/* Insta Icon */}
          <div className='hidden md:block'>

            <a className=' text-5xl text-rose hover:text-gold ease-in-out duration-400' href="https://www.instagram.com/perfect_digital_studios/">
              <FaInstagram />
            </a>
            
          </div>
          
          {/* Mobile Menu Button */}
          <button className='md:hidden text-charcoal'>
            {
              isMobileMenuOpen ?
              <FaXmark onClick={()=> setIsMobileMenuOpen(!isMobileMenuOpen)}  className='text-xl'/> :
              <FaBars onClick={()=> setIsMobileMenuOpen(!isMobileMenuOpen)} className='text-xl'/>
            }
          </button>

        </div>

        {/* Mobile Navigation */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4`}>

            <div className='flex flex-col space-y-6'>
              <Link onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} to='/' className='text-charcoal hover:text-gold font-medium transition duration-300 cursor-pointer'>
                  Home
              </Link>

              <Link onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} to='/about' className='text-charcoal hover:text-gold font-medium transition duration-300 cursor-pointer'>
                  About 
              </Link>

              <Link onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} to='/gallery' className='text-charcoal hover:text-gold font-medium transition duration-300 cursor-pointer'>
                  Gallery
              </Link>

              <Link onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} to='/services' className='text-charcoal hover:text-gold font-medium transition duration-300 cursor-pointer'>
                  Services
              </Link>

              <Link onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} to='/contact' className='text-charcoal hover:text-gold font-medium transition duration-300 cursor-pointer'>
                  Contact
              </Link>
             
              <div>
                <a className='text-4xl text-rose hover:text-gold ease-in-out duration-400' href="https://www.instagram.com/perfect_digital_studios/">
                  <FaInstagram />
                </a>
              </div>
            </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
