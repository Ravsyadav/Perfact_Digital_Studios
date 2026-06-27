import React from 'react'
import {assets, quickLinks, serviceLinks, socialLinks} from '../assets/assets';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-charcoal text-white py-12'>
        <div className='container mx-auto px-4'>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>

                {/* Logo */}
                <div className='md:col-span-1'>
                    <div className='text-3xl font-bold font-playfair text-gradient-gold mb-4'>Ravs Gallery</div>
                    <p className='text-white/70 mb-6 font-light'>My Phone is my diary, and these photos are the pages.</p>
                    <div className='flex items-center space-x-4'>
                        {socialLinks.map((link, idx)=>(
                            <a href={link.href} 
                            className='bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gold transition duration-300'>
                                <link.icon />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className='text-lg font-bold mb-6'>Quick Links</h4>
                    <ul className='space-y-3'>
                        {quickLinks.map((link, idx)=> (
                            <li key={idx}>
                                <button 
                                className='text-white/70 hover:text-gold transition duration-300 cursor-pointer text-left font-light'>
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className='text-lg font-bold mb-6'>Services</h4>
                    <ul className='space-y-3'>
                        {serviceLinks.map((link, idx)=> (
                            <li key={idx}>
                                <button 
                                className='text-white/70 hover:text-gold transition duration-300 cursor-pointer text-left font-light'>
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Subscribe */}
                <div>
                    <h4 className='text-lg font-bold mb-6'>Stay Updated</h4>
                    <p className='font-light text-white/70 mb-4'>Subscribe for photoshoot tips and special offers.</p>
                    <div className='flex'>
                        <input type="email" placeholder=" Your Email" name="" id=""
                        className='newsletter border border-gold focus:outline-none px-4 py-3 rounded-l-lg w-full text-white' />
                        <button className='bg-gradient-gold px-4 py-3 rounded-r-lg font-medium text-white'>Subscribe</button>
                    </div>
                </div>

            </div>
            {/* Copyright */}
            <div className='border-t border-white/20 mt-12 pt-8 text-white/60 text-center'>
                <p className='text-xs'>
                    © 2026 Ravs Gallery. All rights reserved. Designed <FaHeart className='inline text-rose'/> with creativity and passion.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer
