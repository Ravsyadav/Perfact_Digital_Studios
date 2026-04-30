import React from 'react'
import { assets } from '../assets/assets'
import { FaAward, FaCamera, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section id='about' className='py-20 md:py-28'>
      <div className='container mx-auto px-4'>

        <div className='flex flex-col lg:flex-row items-center gap-12'>

          {/* Image */}
          <div className='lg:w-1/2 relative' data-aos='fade-right'>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl animate-float'>
              <img src={assets.aboutImg} alt="Photographer"  className='w-full h-auto'/>
            </div>
            <div className='absolute -bottom-6 -right-6 bg-gradient-rose text-white px-6 py-3 rounded-full shadow-lg '>
              <span className='font-bold'>4+ Years Experiences</span>
            </div>
          </div>

          {/* Content */}
          <div className='lg:w-1/2' data-aos='fade-left'>
            <h2 className='text-4xl md:text-5xl font-playfair font-bold mb-6'>
              Celebrating Life Through the Lens, <div className='text-gradient-rose'>You Always Carry.</div> 
            </h2>
            <p className='text-lg text-charcoal/80 mb-6 font-light text-justify'>
              Hi, I’m Ravi. For over 4+ years, I’ve been exploring the art of photography through the lens of a phone. I believe the best moments aren’t staged—they’re lived. My goal is to capture those genuine, fleeting moments and transform them into timeless memories, all with the device you carry every day.
            </p>
            <p className='text-lg text-charcoal/80 mb-8 font-light text-justify'>
              I blend a creative eye with a candid, documentary approach, using my phone to capture both the big highlights and the small, meaningful details that make your story unique. My goal is to keep things natural and authentic, preserving moments as they unfold so you can relive them just as they felt.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10'>
              <div className='flex items-start gap-4'>
                <div className='bg-gradient-gold p-3 rounded-full'>
                  <FaCamera className='text-white text-xl' />
                </div>
                <div>
                  <h4 className='font-bold text-lg mb-1 '>Candid & Natural</h4>
                  <p className='text-charcoal/70 font-light'>Real emotions, captured anytime, anywhere</p>
                </div>
              </div>
              <a href="https://www.instagram.com/perfect_digital_studios/">
                <div className='flex items-start gap-4'>
                  <div className='bg-gradient-gold p-3 rounded-full'>
                    <FaInstagram className='text-white text-xl' />
                  </div>
                  <div>
                    <h4 className='font-bold text-lg mb-1 '>Perfact Digital Studios</h4>
                    <p className='text-charcoal/70 font-light'>My phone is my diary, and these photos are the pages.</p>
                  </div>
                </div>
              </a>
            </div>
            
            <Link to='/contact'>
               <button 
                className='bg-gradient-rose text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-rose/30 transition duration-300 cursor-pointer'>
                  Let's Connect
                </button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About
