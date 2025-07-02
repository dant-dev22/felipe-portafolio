import React from 'react';
import Slider from 'react-slick';
import { Box, Card, CardMedia } from '@mui/material';

const GalleryCarousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: 'auto',
        mt: 8,
        position: 'relative',
        zIndex: 0,
      }}
    >
      <Slider {...settings}>
        {items.map((item, index) => (
          <Card
            key={index}
            sx={{
              outline: 'none',
              position: 'relative',
              zIndex: 0,
            }}
          >
            {item.type === 'image' ? (
              <CardMedia
                component="img"
                height="400"
                image={item.src}
                alt={`Image ${index}`}
              />
            ) : item.type === 'video' ? (
              <CardMedia
                component="video"
                height="400"
                src={item.src}
                controls
              />
            ) : item.type === 'youtube' ? (
              <Box
                sx={{
                  position: 'relative',
                  paddingTop: '56.25%',
                }}
              >
                <iframe
                  src={`${item.src}&autoplay=1&mute=1`}
                  title={`YouTube video ${index}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Box>
            ) : null}
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default GalleryCarousel;