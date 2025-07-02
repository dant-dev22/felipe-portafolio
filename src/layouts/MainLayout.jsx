// src/layouts/MainLayout.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroVideo from '../components/HeroVideo';
import Home from '@mui/icons-material/Home';
import { Box } from '@mui/material';

const MainLayout = ({ children }) => (
  <Box sx={{ position: 'relative', minHeight: '100vh' }}>
    <HeroVideo />

    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        zIndex: 1,
      }}
    >
      <Navbar />
      <Home />

      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>

      <Footer />
    </Box>
  </Box>
);

export default MainLayout;