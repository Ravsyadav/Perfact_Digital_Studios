import React from 'react'
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


const Gallery = () => {

  const onInit = () => {
        console.log('lightGallery has been initialized');
    };

  return (
    <div className="App px-50 py-50 text-2xl md:text-9xl text-center">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
              Gallery Page 
            </LightGallery>
        </div>
  )
}

export default Gallery
