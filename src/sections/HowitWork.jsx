import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  useTheme,
  useMediaQuery
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PaidIcon from '@mui/icons-material/Paid';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowItWorks = ({ id }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Steps data
  const steps = [
    {
      icon: <UploadFileIcon sx={{ fontSize: 48 }} />,
      title: 'Upload License',
      description: 'Simply upload your unused software license. We support all major software vendors.',
    },
    {
      icon: <AssessmentIcon sx={{ fontSize: 48 }} />,
      title: 'Get Valuation',
      description: 'Our algorithm analyzes the market value of your license and provides you with the best possible offer.',
    },
    {
      icon: <PaidIcon sx={{ fontSize: 48 }} />,
      title: 'Get Paid',
      description: 'Accept our offer and receive payment in as little as 24 hours via your preferred payment method.',
    },
  ];

  // Animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
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
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background pattern */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: `radial-gradient(circle at 20% 35%, ${theme.palette.primary.light}22 0%, transparent 50px), 
                       radial-gradient(circle at 85% 75%, ${theme.palette.secondary.light}22 0%, transparent 100px)`,
          opacity: 0.5,
          zIndex: 0,
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
            color="primary" 
            sx={{ 
              fontWeight: 600, 
              letterSpacing: 1.2,
              mb: 1,
              display: 'block'
            }}
          >
            SIMPLE PROCESS
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
                backgroundColor: theme.palette.primary.main,
                borderRadius: '2px',
              }
            }}
          >
            How It Works
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
            Our streamlined 3-step process makes selling your unused software licenses quick, easy, and profitable.
          </Typography>
        </Box>

        {/* Process Steps */}
        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.2 + (index * 0.2),
                  type: "spring",
                  stiffness: 50
                }}
              >
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    borderRadius: '16px',
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    position: 'relative',
                    overflow: 'visible',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-12px',
                      left: '-12px',
                      width: '100%',
                      height: '100%',
                      borderRadius: '16px',
                      background: `linear-gradient(135deg, ${theme.palette.primary.light}33, ${theme.palette.secondary.light}33)`,
                      zIndex: -1,
                      opacity: 1,
                      transition: 'all 0.3s ease',
                    },
                    '&:hover::before': {
                      top: '-15px',
                      left: '-15px',
                      opacity: 0.8,
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    {/* Step Number */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '-15px',
                        right: '-15px',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 700,
                        fontSize: '1.25rem',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                      }}
                    >
                      {index + 1}
                    </Box>
                    
                    {/* Icon Circle */}
                    <Box
                      sx={{
                        width: '96px',
                        height: '96px',
                        borderRadius: '50%',
                        backgroundColor: index === 0 
                          ? `${theme.palette.primary.main}15`
                          : index === 1 
                            ? `${theme.palette.secondary.main}15`
                            : `${theme.palette.success.main}15`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 auto 24px',
                        color: index === 0 
                          ? theme.palette.primary.main
                          : index === 1
                            ? theme.palette.secondary.main
                            : theme.palette.success.main,
                      }}
                    >
                      {step.icon}
                    </Box>
                    
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {step.title}
                    </Typography>
                    
                    <Typography variant="body1" color="text.secondary">
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Connector lines between steps (desktop only) */}
        {!isMobile && (
          <>
            <Box
              sx={{
                position: 'absolute',
                left: '31%',
                top: '58%',
                width: '15%',
                height: '2px',
                backgroundColor: theme.palette.divider,
                zIndex: 0,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  right: '-4px',
                  top: '-4px',
                  width: '10px',
                  height: '10px',
                  borderTop: `2px solid ${theme.palette.divider}`,
                  borderRight: `2px solid ${theme.palette.divider}`,
                  transform: 'rotate(45deg)',
                }
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                left: '54%',
                top: '58%',
                width: '15%',
                height: '2px',
                backgroundColor: theme.palette.divider,
                zIndex: 0,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  right: '-4px',
                  top: '-4px',
                  width: '10px',
                  height: '10px',
                  borderTop: `2px solid ${theme.palette.divider}`,
                  borderRight: `2px solid ${theme.palette.divider}`,
                  transform: 'rotate(45deg)',
                }
              }}
            />
          </>
        )}
      </Container>
    </Box>
  );
};

export default HowItWorks;