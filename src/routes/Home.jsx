import React, { useState } from 'react'
import {assets, stats, galleryItems} from '../assets/assets'
import {Link} from 'react-router-dom'
import Counter from '../components/Counter'

const Home = () => {
  const [filter, setFilter] = useState('all')

  const filterItems = filter== 'all'
  ? galleryItems
  :galleryItems.filter(item => item.category === filter)

  const filters =[
    {id:'all', label:"All Photos"},
    {id:'landscape', label:"Landscape"},
    {id:'portrait', label:"Portraits"},
    {id:'architectural', label:"Architectural"}
  ]
  return (

    <section>

      {/* Cover Section */}
      <div id='home' className='pt-20 md:pt-24 relative clip-path-hero'>
        <div className='relative h-screen flex items-center'>
        
        {/* Bg Image */}
          <div className='absolute inset-0 z-0 hero-bg'>
            <img className='h-full w-full object-cover' src={assets.bgImg} alt="bg photo" />
            <div className='absolute inset-0 bg-linear-to-r from-charcoal/70 to-charcoal/50'></div>
          </div>

        {/* Hero Content */}
          <div className='container mx-auto sm:px-4 md:px-6 lg:px-8 z-10 relative'>
            <div className='max-w-3xl'>
              <h1 className='text-5xl pl-6 md:text-7xl lg:text-8xl font-playfair text-white mb-6 font-bold'>Perfact <span className='text-gradient-gold'> Digital </span> Studios</h1>
              <div className='pl-6 text-2xl md:text-3xl lg:text-4xl font-playfair text-gradient-gold mb-6 font-semibold'>CAPTURE || CREATE || SHARE</div>
              <p className='text-xl text-white/90 pl-6 font-thin mb-10'> My Phone is my <span className='text-gradient-gold'> DIARY,</span> and these <span className='text-gradient-gold'>PHOTOS</span> are the pages.</p>

              <div className='flex flex-col sm:flex-row gap-4'>

                <Link to='/gallery'>
                  <button className='bg-gradient-gold text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl hover:shadow-gold/30 transition duration-300 cursor-pointer'> View Our Work </button>
                </Link>

                <Link to='/contact'>
                  <button className='bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition duration-300 cursor-pointer'> Get in Touch </button>
                </Link> 
                
              </div>
            </div>
          </div>

        </div>
      </div> 

      {/* States Section */}
      <div className='py-16 bg-linear-to-r from-champagne to-cream'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
              {stats.map((stat, index)=>(
                <div key={index} 
                className='stats-counter'
                data-aos='fade-up'
                data-aos-delay={index*100}
                >
                  <div className='text-5xl md:text-6xl font-playfair font-bold text-gradient-gold mb-2'>
                   {/* {stat.number}  */}
                    <Counter target={stat.number} /> 
                  </div>
                  <div className='text-charcoal/80 font-medium/80'>
                    {stat.label}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div id='gallery' className='py-20 bg-champagne/30'>
        <div className='container mx-auto px-4'> 
            {/* Header */}
            <div className='text-center mb-16'> 
              <h2 
              data-aos='fade-up'
              className='text-4xl md:text-5xl font-playfair font-bold mb-6'
              > 
                Our <span className='text-gradient-gold'>Gallery</span>
              </h2>
              <p 
              data-aos='fade-up'
              data-aos-delay='200'
              className='text-xl text-charcoal/80 max-w-3xl mx-auto'>Proof that the best stories are captured in the palm of your hand.</p>
            </div>

            {/* Filter Button */}
            <div className='flex flex-wrap justify-center gap-4 mb-12' data-aos='fade-up'>
              {filters.map((filterItem) =>(
                <button
                onClick={()=>setFilter(filterItem.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${filter === filterItem.id ? 'bg-gradient-gold text-white' : 'bg-white text-charcoal hover-gradient-gold' }`}
                >
                  {filterItem.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-6'>
              {
                filterItems.map((item, index)=>(
                  <div
                  key={index}
                  className='image-overlay rounded-2xl overflow-hidden shadow-lg cursor-pointer group'
                  data-aos='fade-up'
                  data-aos-delay={index * 100}
                  >
                    <img className='w-full h-96 object-cover group-hover:scale-110 transition duration-700 scroll-smooth' src={item.image} alt={item.title} />
                    <div className='absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-110 transition duration-500'>
                      <div className='absolute bottom-0 left-0 right-0 p-6'>
                        <h4 className='text-white text-xl font-bold'>{item.title}</h4>
                        <span className='inline-block mt-2 px-3 py-1 bg-gradient-gold text-charcoal text-sm rounded-full '>
                          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </span>                       
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            {/* View Full Gallery */}
            <Link to ='/gallery'>
              <div className='text-center mt-12' data-aos='fade-up'>
                <button className='inline-block border-2 border-gold text-gold px-8 py-4 rounded-full font-medium hover-gradient-gold transition duration-500 cursor-pointer'>
                  View Full Gallery
                </button>
              </div>
            </Link>

        </div>
      </div>

    </section>
  )
}

export default Home
