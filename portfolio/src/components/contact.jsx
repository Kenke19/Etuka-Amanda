import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Box, Typography, Button, TextField, Container, IconButton,
  Paper, useTheme, useMediaQuery
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import { Link as RouterLink } from 'react-router-dom';

function Contact() {
  const [state, handleSubmit] = useForm("mpqjovjq");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const hasEmailError = state.errors && state.errors.email;
  const hasMessageError = state.errors && state.errors.message;

  if (state.succeeded) {
    return (
      <Container maxWidth="sm">
        <Paper sx={{ p: 4, mt: 8, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom fontWeight={600}>
             Thanks for reaching out!
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            I'll get back to you within 24 hours.
          </Typography>
          <Button 
            component={RouterLink} 
            to="/" 
            variant="outlined" 
            startIcon={<ArrowBackIcon />}
            size="large"
          >
            Back to Home
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper 
        elevation={1} 
        sx={{ 
          p: { xs: 3, sm: 4, md: 6 }, 
          mx: 'auto', 
          maxWidth: 600,
          transition: 'box-shadow 0.1s ease',
          '&:hover': { boxShadow: 2 }
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{ 
            fontWeight: 700, 
            mb: 5,
          }}
        >
          Contact me!
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Email Address"
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={state.submitting}
            sx={{ mb: 3 }}
            error={hasEmailError} 
            helperText={hasEmailError ? state.errors.email[0] : ''}
          />

          <TextField
            fullWidth
            label="...."
            id="message"
            name="message"
            multiline
            rows={6}
            placeholder="I need a full-stack e-commerce app with Paystack integration..."
            required
            disabled={state.submitting}
            sx={{ mb: 4 }}
            error={hasMessageError}
            helperText={hasMessageError ? state.errors.message[0] : ''}
          />

          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            gap: 2, 
            justifyContent: 'space-between',
            alignItems: { xs: 'stretch', sm: 'center' }
          }}>
            <Button
              component={RouterLink}
              to="/"
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              size={isMobile ? "medium" : "large"}
              sx={{ flex: 1, py: 1.5 }}
            >
              Back to Home
            </Button>

            <Button
              type="submit"
              variant="contained"
              disabled={state.submitting || state.succeeded}
              endIcon={<SendIcon />}
              size={isMobile ? "medium" : "large"}
              sx={{ 
                flex: 1, 
                py: 1.5,
                px: 4,
                fontWeight: 600
              }}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default Contact;
