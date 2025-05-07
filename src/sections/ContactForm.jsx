import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  MenuItem, 
  Paper,
  Snackbar,
  Alert
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@mui/material/styles';

const ContactForm = ({ id }) => {
  const theme = useTheme();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  // Error state
  const [errors, setErrors] = useState({});
  
  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    // Validate company
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    // Validate license type
    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Log form data to console
      console.log('Form submitted:', formData);
      
      // Show success message
      setSnackbarOpen(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      });
    }
  };
  
  // Handle snackbar close
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  
  // License type options
  const licenseTypes = [
    'MS Office',
    'Adobe Suite',
    'AutoCAD',
    'SAP',
    'Oracle',
    'Salesforce',
    'Other'
  ];
  
  // Animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Use intersection observer to trigger animation when section is in view
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box 
      id={id}
      component="section" 
      ref={ref}
      sx={{ 
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.mode === 'light' 
          ? 'rgba(243, 244, 246, 0.7)' 
          : 'rgba(17, 24, 39, 0.7)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container 
        maxWidth="lg" 
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            component={motion.div}
            variants={itemVariants}
            variant="overline" 
            color="secondary" 
            sx={{ 
              fontWeight: 600, 
              letterSpacing: 1.2,
              mb: 1,
              display: 'block'
            }}
          >
            GET IN TOUCH
          </Typography>
          <Typography 
            component={motion.h2}
            variants={itemVariants}
            variant="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '60px',
                height: '4px',
                bottom: '-10px',
                left: 'calc(50% - 30px)',
                background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                borderRadius: '2px',
              }
            }}
          >
            Contact Us
          </Typography>
          <Typography 
            component={motion.p}
            variants={itemVariants}
            variant="subtitle1" 
            color="text.secondary"
            sx={{ 
              maxWidth: '650px',
              mx: 'auto',
              mt: 3
            }}
          >
            Have questions about selling your software licenses? Fill out the form below and our team will get back to you within 24 hours.
          </Typography>
        </Box>

        {/* Contact Form and Info */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <motion.div variants={itemVariants}>
              <Paper
                elevation={0}
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: { xs: 3, sm: 5 },
                  borderRadius: '16px',
                  border: `1px solid ${theme.palette.divider}`,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Company"
                      name="company"
                      variant="outlined"
                      value={formData.company}
                      onChange={handleChange}
                      error={!!errors.company}
                      helperText={errors.company}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      fullWidth
                      label="License Type"
                      name="licenseType"
                      variant="outlined"
                      value={formData.licenseType}
                      onChange={handleChange}
                      error={!!errors.licenseType}
                      helperText={errors.licenseType || "Select the type of license you want to sell"}
                      required
                    >
                      {licenseTypes.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      variant="outlined"
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        py: 1.5,
                        px: 4,
                        borderRadius: '8px',
                        fontWeight: 600,
                        boxShadow: `0 4px 14px ${theme.palette.primary.main}50`,
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: `0 6px 20px ${theme.palette.primary.main}80`,
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100%',
                  pl: { md: 4 }
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Other Ways to Reach Us
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                  <EmailIcon sx={{ color: theme.palette.primary.main, mr: 2 }} />
                  <Typography variant="body1">
                    support@softsell.example.com
                  </Typography>
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
                  Our team is available Monday through Friday, 9am-5pm EST. We typically respond to all inquiries within 24 hours.
                </Typography>
                
                <Box 
                  sx={{ 
                    mt: 4, 
                    p: 3, 
                    backgroundColor: theme.palette.primary.main + '10',
                    borderRadius: '8px',
                    border: `1px dashed ${theme.palette.primary.main}40`
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Quick Response Guarantee
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Submit your information today and receive an initial valuation for your licenses within 24 hours.
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      
      {/* Success Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity="success" 
          variant="filled"
          sx={{ width: '100%' }}
        >
          Thank you! We'll be in touch soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;