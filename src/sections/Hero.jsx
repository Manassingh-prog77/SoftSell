/* eslint-disable no-unused-vars */

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ComputerIcon from '@mui/icons-material/Computer';
import { motion } from 'framer-motion';

const Hero = ({ id }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Animation variants
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const graphicVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 60, 
        duration: 0.8,
        delay: 0.3
      }
    }
  };

  return (
    <Box 
      id={id}
      component="section" 
      sx={{ 
        py: { xs: 6, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        background: theme.palette.mode === 'light' 
          ? 'linear-gradient(180deg, rgba(79, 70, 229, 0.03) 0%, rgba(79, 70, 229, 0.08) 100%)' 
          : 'linear-gradient(180deg, rgba(79, 70, 229, 0.05) 0%, rgba(79, 70, 229, 0.1) 100%)'
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          width: '40%',
          height: '40%',
          background: theme.palette.mode === 'light' 
            ? 'radial-gradient(circle, rgba(129, 140, 248, 0.2) 0%, rgba(255, 255, 255, 0) 70%)' 
            : 'radial-gradient(circle, rgba(129, 140, 248, 0.15) 0%, rgba(17, 24, 39, 0) 70%)',
          top: '-10%',
          right: '-10%',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '30%',
          height: '30%',
          background: theme.palette.mode === 'light' 
            ? 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(255, 255, 255, 0) 70%)' 
            : 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(17, 24, 39, 0) 70%)',
          bottom: '-5%',
          left: '-5%',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          component={motion.div}
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* Text Content */}
          <Box 
            component={motion.div}
            variants={itemVariants}
            sx={{ 
              flex: { xs: '1 1 100%', md: '1 1 50%' }, 
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { md: '600px' }
            }}
          >
            <Typography 
              variant="h1" 
              component={motion.h1}
              variants={itemVariants}
              gutterBottom
              sx={{ 
                color: 'text.primary',
                fontWeight: 800,
                mb: 2,
                backgroundImage: theme.palette.mode === 'light' 
                  ? 'linear-gradient(to right, #4F46E5, #0EA5E9)' 
                  : 'linear-gradient(to right, #818CF8, #67E8F9)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Turn Unused Software into Cash
            </Typography>
            
            <Typography 
              variant="h5" 
              component={motion.div}
              variants={itemVariants}
              color="text.secondary" 
              sx={{ 
                mb: 4,
                fontWeight: 500,
                lineHeight: 1.5
              }}
            >
              Sell your leftover licenses in minutes with SoftSell.
              Fast, secure, and hassle-free process.
            </Typography>
            
            <Box 
              component={motion.div}
              variants={itemVariants}
              sx={{ 
                display: 'flex', 
                gap: 2, 
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ 
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                }}
              >
                Get a Quote
              </Button>
              
              <Button 
                variant="outlined" 
                color="primary"
                size="large"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                }}
              >
                Learn More
              </Button>
            </Box>
            
            <Typography 
              component={motion.div}
              variants={itemVariants}
              variant="subtitle2" 
              color="text.secondary" 
              sx={{ mt: 3, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, alignItems: 'center' }}
            >
              <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                <Box 
                  component="span" 
                  sx={{ 
                    display: 'inline-block', 
                    width: 8, 
                    height: 8, 
                    bgcolor: 'success.main', 
                    borderRadius: '50%', 
                    mr: 1 
                  }} 
                />
                Trusted by 500+ businesses
              </Box>
              <Box component="span" sx={{ mx: 2 }}>•</Box>
              <Box component="span">$10M+ recovered</Box>
            </Typography>
          </Box>
          
          {/* Hero Image/Graphic - Improved */}
          <Box 
            component={motion.div}
            variants={graphicVariants}
            sx={{ 
              flex: { xs: '1 1 100%', md: '1 1 50%' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              mb: { xs: 4, md: 0 }
            }}
          >
            {/* Try to use actual image if available */}
            {false ? (
              <Box
                component="img"
                src="/hero-graphic.svg"
                alt="Software License Visualization"
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  aspectRatio: '16/9',
                  objectFit: 'contain',
                  borderRadius: '24px',
                  boxShadow: theme.shadows[4]
                }}
              />
            ) : (
              /* Fallback Placeholder Graphic */
              <Paper
                elevation={0}
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  aspectRatio: '16/9',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: theme.palette.mode === 'light' 
                    ? theme.palette.background.paper 
                    : theme.palette.background.default,
                  boxShadow: theme.shadows[4],
                  background: `linear-gradient(135deg, 
                    ${theme.palette.primary.main}20, 
                    ${theme.palette.secondary.light}30)`
                }}
              >
                {/* Software License Cards Visualization */}
                <Box
                  sx={{
                    width: '80%',
                    padding: '20px',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    color: '#fff',
                    borderRadius: '12px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    boxShadow: theme.shadows[8],
                    mb: 2,
                    mt: -2
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">PREMIUM LICENSE</Typography>
                </Box>

                <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <Box
                    sx={{
                      width: '70%',
                      padding: '16px',
                      background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
                      color: '#fff',
                      borderRadius: '12px',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      boxShadow: theme.shadows[4],
                      zIndex: 1
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="bold">BUSINESS SUITE</Typography>
                  </Box>

                  {/* Dollar sign indicating money */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '-20px',
                      right: '20%',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: theme.palette.success.main,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      boxShadow: theme.shadows[4],
                      zIndex: 2,
                    }}
                  >
                    <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700 }}>
                      $
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: '60%',
                    padding: '12px',
                    background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.success.light})`,
                    color: '#fff',
                    borderRadius: '12px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    boxShadow: theme.shadows[2],
                    mt: 2,
                    opacity: 0.9,
                    transform: 'translateY(-5px)'
                  }}
                >
                  <Typography variant="subtitle2" fontWeight="bold">ENTERPRISE PLAN</Typography>
                </Box>
              </Paper>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;