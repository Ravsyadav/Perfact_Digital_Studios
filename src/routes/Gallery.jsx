import React from 'react'
import LightGallery from 'lightgallery/react';

import {assets} from '../assets/assets'

import { images } from '../assets/images/images';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';


const Gallery = () => {

  const onInit = () => {
        console.log('lightGallery has been initialized');
    };

  return (
    <div className="App py-25 px-2 bg-linear-to-r from-champagne/20 to-cream/20 -z-10" data-aos='fade-up'
          data-aos-delay='200'>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgShare, lgRotate]}
            >
              {
                images.map((image, idx)=>{
                    return (
                      <a href={image.img} key={idx}>
                        <img className='rounded-2xl mb-2 hover:scale-105 transition-transform duration-500 opacity-100 hover:opacity-80' 
                        
                        alt={image.alt} src={image.img} />
                      </a>
                   )
                })}
            </LightGallery>
        </div>
  )
}

export default Gallery
