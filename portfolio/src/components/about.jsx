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
          I’m Nkechi Amanda Etuka, a frontend-focused developer with a
          background in mathematics and a strong interest in building
          structured, scalable digital systems.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
          I approach engineering analytically because I think in patterns,
          architecture, and long-term maintainability rather than quick fixes.
          My mathematical training shapes how I break down complex problems and
          design clear, logical solutions.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
          I’ve built full e-commerce platforms, administrative dashboards, and
          responsive client applications from scratch. While I’m capable across
          the stack, I’ve intentionally specialized in frontend development
          because I’m most energized at the intersection of logic and user
          experience.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
          I value reliability and loyalty within teams. To me, loyalty means
          consistency, accountability, and commitment to shared goals. I
          believe strong engineering teams are built on trust and long-term
          thinking.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
          I care deeply about clean code, performance optimization, thoughtful
          component architecture, and interfaces that feel intuitive rather
          than overwhelming.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
          I’m ambitious and deliberate about growth. My current focus is
          strengthening my expertise in React and modern frontend systems, with
          long-term plans to expand into backend engineering and data-driven
          problem solving. I aim to be the kind of engineer teams rely on for
          clarity, structure, and sustained contribution.
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