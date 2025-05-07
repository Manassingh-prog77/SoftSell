import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper
} from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaidIcon from '@mui/icons-material/Paid';
import SpeedIcon from '@mui/icons-material/Speed';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@mui/material/styles';

const WhyChooseUs = ({ id }) => {
  const theme = useTheme();
  
  // Features data
  const features = [
    {
      icon: <ShieldIcon sx={{ fontSize: 40 }} />,
      title: 'Secure & Compliant',
      description: 'All transactions are encrypted and compliant with software licensing laws, ensuring risk-free transactions.'
    },
    {
      icon: <PaidIcon sx={{ fontSize: 40 }} />,
      title: 'Best Market Value',
      description: 'Our algorithm ensures you get the maximum value for your unused licenses based on real-time market data.'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Fast Processing',
      description: 'Get valuations instantly and receive payment within 24 hours of accepting our offer.'
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      title: '24/7 Support',
      description: 'Our dedicated customer service team is available around the clock to assist with any questions.'
    }
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

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
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
      {/* Subtle background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '30%',
          height: '40%',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.primary.light}05)`,
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          zIndex: 0
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '40%',
          height: '50%',
          background: `linear-gradient(135deg, ${theme.palette.secondary.main}10, ${theme.palette.secondary.light}05)`,
          clipPath: 'polygon(0 100%, 0 30%, 100% 100%)',
          zIndex: 0
        }}
      />

      <Container 
        maxWidth="lg" 
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        sx={{ position: 'relative', zIndex: 1 }}
      >
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            component={motion.div}
            variants={titleVariants}
            variant="overline" 
            color="secondary" 
            sx={{ 
              fontWeight: 600, 
              letterSpacing: 1.2,
              mb: 1,
              display: 'block'
            }}
          >
            OUR ADVANTAGES
          </Typography>
          <Typography 
            component={motion.h2}
            variants={titleVariants}
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
            Why Choose Us
          </Typography>
          <Typography 
            component={motion.p}
            variants={titleVariants}
            variant="subtitle1" 
            color="text.secondary"
            sx={{ 
              maxWidth: '650px',
              mx: 'auto',
              mt: 3
            }}
          >
            SoftSell stands out from the competition with our commitment to security, value, speed, and customer service.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + (index * 0.15),
                  type: "spring",
                  stiffness: 50
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: '16px',
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                      borderColor: theme.palette.primary.main,
                    }
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    textAlign: 'center' 
                  }}>
                    <Box 
                      sx={{ 
                        color: theme.palette.primary.main,
                        mb: 2,
                        p: 1.5,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.mode === 'light' 
                          ? theme.palette.primary.light + '30'
                          : theme.palette.primary.dark + '30',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      gutterBottom
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;