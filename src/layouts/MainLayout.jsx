// src/layouts/MainLayout.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

const MainLayout = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <Navbar />

    <Box component="main" sx={{ flex: 1 }}>
      {children}
    </Box>

    <Footer />
  </Box>
);

export default MainLayout;
