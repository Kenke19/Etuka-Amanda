import React, { useState } from 'react';
import {
  Card, CardMedia, CardContent, Typography, Grid, Box,
  Modal, Button, Chip, IconButton
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ecommerce from '../assets/Lumiere.png';
import zendy from '../assets/zendy.png';
import landing from '../assets/Exrep.png';  
import dashboard from '../assets/dashboard.png';
import PYP from '../assets/PYP.png';
import Link  from "@mui/material/Link";
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'Ecommerce Platform',
      image: ecommerce, 
      description: 'Html frontend with PHP/MySQL backend, Paystack integration, cart & orders.',
      tech: ['React', 'PHP', 'MySQL', 'Tailwind', 'Paystack'],
      github: 'https://github.com/kenke19/lumiere.git',
      live: 'https://lumiere.infy.uk'
    },
    {
      id: 2,
      title: 'Daily Planner',
      image: zendy,
      description: 'User auth, virtual cards, bill payments with Flutterwave.',
      tech: ['React', 'Node.js', 'Material UI'],
      github: 'https://github.com/kenke19/zendy.git',
      live: 'https://zendy-app-2.vercel.app/'
    },
    {
      id: 3,
      title: 'Landing Page',
      image: landing,
      description: 'Responsive landing page with modern UI design and contact form.',
      tech: ['Tailwind CSS', 'HTML', 'JavaScript','Formspree'],
      github: 'https://github.com/Kenke19/ExRep-Network.git',
      live: 'https://exrep-network.vercel.app/'
    },
    {
      id: 4,
      title: 'Admin Dashboard',
      image: dashboard,
      description: 'Admin dashboard with data visualization and user management.',
      tech: ['PHP', 'MySQL', 'Tailwind CSS', 'Chart.js'],
      github: 'https://github.com/Kenke19/admin-dashboard.git',
      live: 'https://lumiere.infy.uk/auth.php'
    },
    {
      id: 5,
      title: 'Real Estate Website',
      image: PYP,
      description: 'Real estate website with property listings and search functionality.',
      tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'Whatsapp API'],
      github: 'https://github.com/Kenke19/PickYourPlace.git',
      live: 'http://pickyourplace.ct.ws'
    },
  ]);
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ p: {xs:2, sm:3, md:4}, maxWidth: 1200, mx: 'auto', width: '100%' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb:{xs:4, md:6} }}>
        My Projects
      </Typography>
      <Grid container spacing={{xs:2, sm:3, md:4}} alignItems="stretch">
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card 
              sx={{ 
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'box-shadow 0.3s ease, transform 0.2s',
                '&:hover': { 
                    boxShadow: 8,
                    transform: 'translateY(-8px)' 
                },
                cursor: 'pointer',
                width: '100%',
                maxWidth:{xs: '100%', sm: 350}
              }} 
              onClick={() => handleOpen(project)}
            >
              <CardMedia 
                sx={{
                    height: {xs: 180, sm: 220},
                    objectFit: 'cover',
                    width: '100%',
                }} 
                image={project.image} 
                title={project.title}
              />
              <CardContent sx={{ 
                pb: '16px !important',
                pt: 0,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column'
                }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal open={open} onClose={handleClose} aria-labelledby="project-modal">
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: { xs: '95vw', sm: '90vw', md:500}, 
          maxWidth: 600,
          bgcolor: 'background.paper', 
          boxShadow: 24, 
          p: {xs: 2, sm: 4}, 
          borderRadius: 2,
          maxHeight: '90vh',
          overflowY: 'auto'
        }}>
          {selectedProject && (
            <>
              <Typography id="project-modal" variant="h5" gutterBottom sx={{ mb: 2 }}>
                {selectedProject.title}
              </Typography>
              <CardMedia 
                component="img" 
                height={{xs: 200, sm: 200}}
                image={selectedProject.image} 
                alt={selectedProject.title}
                sx={{ borderRadius: 1, mb: 3, width: '90%', objectFit: 'cover' ,}}
              />
              <Typography variant="body1" sx={{ mb: 3 }}>
                {selectedProject.description}
              </Typography>
              <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selectedProject.tech.map((tech) => (
                  <Chip key={tech} variant='outlined' label={tech} color="primary" sx={{m:0}} />
                ))}
              </Box>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                <IconButton 
                  href={selectedProject.github} 
                  target="_blank" rel="noopener" color="black" size="large"
                >
                  <GitHubIcon fontSize="medium" />
                </IconButton>
                <IconButton 
                  href={selectedProject.live} 
                  target="_blank" rel="noopener"
                  color="primary" size="large"
                >
                  <OpenInNewIcon fontSize="medium" />
                </IconButton>
                <Button variant='contained' onClick={handleClose} sx={{ ml: 'auto' }}>
                  Close
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
      <Link to="/" component={RouterLink} style={{ textDecoration: 'none' }}>
        <Button
          variant="text"
          startIcon={<ArrowBackIcon />}
          sx={{ mt: 4 }}>
          Back to Home
        </Button>
      </Link>
    </Box>
  );
};

export default Projects;
