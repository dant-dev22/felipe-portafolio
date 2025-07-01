// src/components/Home.jsx
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Home = () => (
  <Container sx={{ py: 10 }} maxWidth="xl">
    <Typography variant="h3" gutterBottom>
      ¡Hola! Soy Felipe
    </Typography>
    <Typography variant="h5">
      Bienvenido a mi portafolio personal.
    </Typography>
  </Container>
);

export default Home;