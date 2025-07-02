import React from 'react';
import GalleryCarousel from './GalleryCarousel';

const mediaItems = [
  { type: 'image', src: 'https://source.unsplash.com/random/800x400?nature' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/hp5oPl5_R10?si=uhA_v_ijXj4GgpGf?autoplay=1&mute=1' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
];

function Portafolio() {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}> Portafolio</h2>
      <GalleryCarousel items={mediaItems} />
    </div>
  );
}

export default Portafolio;