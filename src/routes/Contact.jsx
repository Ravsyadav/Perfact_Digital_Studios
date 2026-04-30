import React, { useState } from 'react'
import { assets, contactInfo, faqs } from '../assets/assets'

const Contact = () => {

  const[formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank You for your message! we will get back to you within 24hrs.")
    setFormData({
      name: '',
      email: '',
      bookingDate: '',
      service: '',
      message: ''
    })
  }

  return (
    <div id='contact' className='pt-30 pb-20 relative'>
     <div className='absolute inset-0 bg-linear-to-r from-champagne/20 to-cream/20 -z-10'></div>

      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>

          {/* Heading Section */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold font-playfair mb-6' data-aos='fade-up'>
              Let's <span className='text-gradient-gold'>Connect</span>
            </h2>
            <p className='text-xl text-charcoal/80 max-w-3xl mx-auto' data-aos='fade-up' data-aos-delay='200'>
              Ready to capture your moments? Get in touch to discuss your photography & videography needs.
            </p>
          </div>

          {/* Form and Info Grid Section */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>

            {/* Contact Form Left Section */}
            <div className='bg-white rounded-2xl p-8 shadow-xl' data-aos='fade-right'>
              <h3 className='text-2xl font-bold font-playfair mb-8'>Send a Message</h3>
              <form onSubmit={handleSubmit} className='space-y-4'>

                {/* Name & email for grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input 
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder='Enter your name'
                    required
                    className='w-full px-4 py-3 border border-champagne rounded focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-xs' 
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className='block mb-2'>Your Email</label>
                    <input 
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder='Enter your email'
                    required
                    className='w-full px-4 py-3 border border-champagne rounded focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-xs' 
                    />
                  </div>
                </div>

                {/* Booking Data */}
                <div>
                  <label htmlFor="bookingDate" className='block mb-2'>Booking Date</label>
                  <input 
                  id='bookingDate'
                  name='bookingDate'
                  value={formData.bookingDate}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-champagne rounded focus:outline-none focus:ring-2 focus:ring-gold'
                  type="date" />
                </div>

                {/* Services */}
                <div>
                  <label htmlFor="service" className='block mb-2'>Service Type</label>
                  <select 
                  name="service" 
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-champagne rounded focus:outline-none focus:ring-2 focus:ring-gold'
                  >
                    <option value="">Select a Service</option>
                    <option value="photography">Photography (₹1,999)</option>
                    <option value="videography">Videography (₹3,999)</option>
                    <option value="editing">Photo & Video Editing (₹999)</option>
                    <option value="all">All of These (₹5,499)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className='block mb-2'>Your Message</label>
                  <textarea 
                  name="message" 
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-champagne rounded focus:outline-none focus:ring-2 focus:ring-gold'
                  rows={4}
                  ></textarea>
                </div>

                {/* Button */}
                <button className='w-full bg-gradient-gold text-white py-4 rounded-full font-medium hover:shadow-xl transition duration-300 cursor-pointer'>
                  Send Message
                </button>

              </form>
            </div>

            {/* Info Section right Section */}
            <div className='' data-aos='fade-left'>

                <h3 className='font-playfair text-2xl font-bold mb-8'>Get in Touch</h3>

                <div className='space-y-8'>
                 {contactInfo.map((info, idx)=> (
                  <div key={idx} className='flex items-start gap-4'>
                    <div className='bg-gradient-gold p-4 rounded-full text-xl text-white'>
                      <info.icon />
                    </div>
                    <div>
                      <h4 className='font-bold text-lg mb-2'>{info.title}</h4>
                      {info.details.map((detail, idx)=>(
                        <p key={idx} className='text-charcoal/80 font-light'>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                 ))}
                </div>

                 <div className='bg-cream rounded-2xl p-8'>
                  <h4 className='font-bold text-2xl mb-6'>Frequently Asked Question</h4>
                  <div className='space-y-4'> 
                    {faqs.map((faq, idx)=>(
                      <div key={idx} className='border-b border-champagne pb-4 last:border-0'>
                        <h5 className='font-bold mb-2'>{faq.question}</h5>
                        <p className='text-charcoal/70 text-sm font-light'>{faq.answer}</p>
                      </div>
                    ))}
                  </div>                 
                 </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Contact
