import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import cv from '../assets/Amanda Etuka- Frontend Developer.pdf';

const style = {
  p: 0,
  width: '97%',
  borderRadius: 1,
  border: '1px solid',
  borderColor: 'divider',
  fontFamily: 'Roboto, sans-serif',
  backgroundColor: 'background.paper',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  '& .MuiListItemIcon-root': {
    minWidth: '80px',
  },

};


export default function Hero() {
  return (
    <Container maxWidth="md" className="h-hero" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px', overflow: 'hidden' }}>
        <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px', lineHeight: '1.8', padding: '40px 5px' }} className="h-hero-text">I build responsive, performance-focused web applications with HTML, React and modern frontend tools. I enjoy turning complex ideas into intuitive user experiences. I am always eager to learn new technologies and collaborate on innovative projects. Let's connect and create something amazing together! 
        </p>
    <List sx={style} aria-label="social links">
      <ListItem disablePadding>
        <ListItemButton component="a" href="https://github.com/kenke19" target="_blank" rel="noopener noreferrer">
          <ListItemIcon>
            <GitHubIcon sx={{ fontSize: 40, color: 'black' }} />
          </ListItemIcon>
          <ListItemText primary="Github" />
        </ListItemButton>
      </ListItem>
      <Divider component="li" />
      <ListItem disablePadding>
        <ListItemButton component="a" href="https://www.linkedin.com/in/nkechi-etuka-76561a330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
          <ListItemIcon>
            <LinkedInIcon sx={{ fontSize: 40, color: 'blue' }} />
          </ListItemIcon>
          <ListItemText primary="LinkedIn" />
        </ListItemButton>
      </ListItem>
      <Divider component="li" />
      <ListItem disablePadding>
        <ListItemButton component="a" href="https://x.com/kenke_e?s=21" target="_blank" rel="noopener noreferrer">
          <ListItemIcon>
            <XIcon sx={{ fontSize: 40, color: 'black' }} />
          </ListItemIcon>
          <ListItemText primary="X (formerly Twitter)" />
        </ListItemButton>
      </ListItem>
    </List>
    <Button
      component="a"
      href={cv}
      target="_blank"
      rel="noopener noreferrer"
      download="Amanda_Etuka-CV.pdf"
      style={{ marginTop: '20px', alignItems: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center' }}
      variant="outlined"
      startIcon={<DownloadIcon sx={{ fontSize: 25 }} />}
    >
      Download my CV
    </Button>
    </Container>
  );
}
