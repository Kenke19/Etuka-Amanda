import React from 'react';
import Header from './header';
import Hero from './hero';
import { Box } from '@mui/material';

function Index() {
  return (
    <Box
      sx={{
        minHeight: '100dvh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',
        backgroundColor: 'background.default', 
      }}
    >
      <Header />
      <Hero />
    </Box>
  );
}

export default Index;
