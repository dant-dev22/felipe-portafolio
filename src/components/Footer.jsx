// src/components/Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ mt: 4, py: 2, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
    <Typography variant="body2">&copy; {new Date().getFullYear()} Felipe. Todos los derechos reservados.</Typography>
  </Box>
);

export default Footer;