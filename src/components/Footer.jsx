// src/components/Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      mt: 'auto', // empuja hacia abajo si se usa layout flex
      py: 2,
      textAlign: 'center',
      bgcolor: 'transparent',
      color: 'red',
      zIndex: 1,
    }}
  >
    <Typography variant="body2">
      &copy; {new Date().getFullYear()} Felipe. Todos los derechos reservados.
    </Typography>
  </Box>
);

export default Footer;
