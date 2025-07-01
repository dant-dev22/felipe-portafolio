import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: 'white',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button sx={{ color: 'red' }}>Inicio</Button>
          <Button sx={{ color: 'red' }}>Portafolio</Button>
          <Button sx={{ color: 'red' }}>Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;