import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@mui/material/Container';



function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
} 

export default function Header() {
  return (
    <Container style={{ fontFamily: 'Roboto, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="header">
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '70px 0px 10px 0px' }} className='h-head'>Etuka Amanda .<span style={{ color: '#653afdec' }}> Web Developer</span></h2>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" component={RouterLink} to="/projects">
              Projects
            </Link>
            <Link underline="hover" color="inherit" component={RouterLink} to="/about">
              About
            </Link>
            <Link underline="hover" color="inherit" component={RouterLink} to="/contact">
              Contact
            </Link>
          </Breadcrumbs>
        </div>
    </Container>
  );
}
