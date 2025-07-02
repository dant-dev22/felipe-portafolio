// src/components/HeroVideo.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroVideo = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/fondo.mp4" type="video/mp4" />
      </video>

      {/* Overlay opcional */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // oscurece el fondo
          zIndex: 0,
        }}
      />

      {/* Contenido encima del video */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          color: 'white',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Felipe - Arte en Movimiento
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Fotografía y video de alto impacto visual
        </Typography>
        <Button variant="contained" color="secondary">
          Ver portafolio
        </Button>
      </Box>
    </Box>
  );
};

export default HeroVideo;