import React from "react";
import { Container, Typography, Box, Divider, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link  from "@mui/material/Link";
import { Link as RouterLink } from 'react-router-dom';
import '../styles/fonts.css';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8, fontFamily: 'Poppins, sans-serif' }}>
      <Box>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 600, fontFamily: 'Poppins, sans-serif' }}
        >
          About Me
        </Typography>

        <Divider sx={{ mb: 4 }} />

        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
          I’m Nkechi Amanda Etuka, a software engineer with a background in
          mathematics and a strong focus on building structured, scalable systems.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
          I approach engineering from a systems perspective. I think in terms of
          architecture, patterns, and long-term maintainability rather than quick
          fixes. My mathematical training shapes how I break down complex problems
          and design clear, logical solutions.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
          I’ve built full e-commerce platforms, administrative dashboards, and
          responsive client applications from scratch. While I’m strongest on the
          frontend, my work is grounded in an understanding of the full system, not
          just the interface layer.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
          I care deeply about clean code, performance, and thoughtful component
          architecture. I aim to build interfaces that feel intuitive, efficient,
          and reliable under real-world conditions.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
          Beyond frontend development, I’m actively expanding into backend
          engineering and data-focused systems. I work with Python for data
          analysis and am interested in building systems that process and extract
          insight from complex datasets.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
           Long-term, I’m focused on the intersection of software engineering,
           data, and quantitative problem-solving—particularly where strong
           mathematical thinking meets scalable backend infrastructure. My goal is
           to become an engineer who can design both the interface and the systems
           that power intelligent, data-driven decisions.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
           I value reliability, accountability, and long-term thinking. I believe
           strong teams are built on trust, consistency, and people who take
           ownership of the systems they build.
        </Typography>
      </Box>
      <Link to="/" component={RouterLink} style={{ textDecoration: 'none' }}>
        <Button
          variant="text"
          startIcon={<ArrowBackIcon />}
          sx={{ mt: 4 }}>
          Back to Home
        </Button>
      </Link>
    </Container>
  );
};


export default About;
