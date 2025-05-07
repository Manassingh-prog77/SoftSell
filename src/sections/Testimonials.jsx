import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Avatar, 
  Rating
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = ({ id }) => {
  const theme = useTheme();
  
  // Testimonials data
  const testimonials = [
    {
      quote: "SoftSell helped us recover over $35,000 from unused enterprise software licenses. The process was incredibly smooth, and their valuation was higher than competitors.",
      author: "Sarah Johnson",
      role: "IT Director",
      company: "TechCorp Solutions",
      rating: 5,
      avatar: "SJ"
    },
    {
      quote: "As a small business owner, every dollar counts. SoftSell made it easy to liquidate software assets we no longer needed, providing us with unexpected capital to reinvest.",
      author: "Michael Chen",
      role: "CEO",
      company: "Innovate Studios",
      rating: 5,
      avatar: "MC"
    }
  ];

  // Animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 50
      }
    }
  };

  // Use intersection observer to trigger animation when section is in view
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Random background colors for avatars
  const getRandomColor = (name) => {
    const colors = [
      theme.palette.primary.main,
      theme.palette.secondary.main,
      theme.palette.success.main,
      theme.palette.info.main
    ];
    
    // Use first letter of name to select a color (pseudorandom but consistent)
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

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
      <Container 
        maxWidth="lg" 
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
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
            SUCCESS STORIES
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
            What Our Clients Say
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
            Don't just take our word for it — hear from customers who have successfully turned their unused software licenses into cash.
          </Typography>
        </Box>

        {/* Testimonials Grid */}
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div variants={itemVariants}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    borderRadius: '16px',
                    border: `1px solid ${theme.palette.divider}`,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'visible',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                      borderColor: theme.palette.primary.main,
                    }
                  }}
                >
                  {/* Quote icon positioned at top-left */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '-20px',
                      left: '20px',
                      color: theme.palette.primary.main,
                      backgroundColor: theme.palette.background.paper,
                      borderRadius: '50%',
                      p: 1,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                  >
                    <FormatQuoteIcon fontSize="large" />
                  </Box>
                
                  <CardContent sx={{ p: 4, pt: 5 }}>
                    <Typography 
                      variant="body1" 
                      paragraph
                      sx={{ 
                        fontStyle: 'italic', 
                        mb: 3,
                        color: theme.palette.text.secondary
                      }}
                    >
                      "{testimonial.quote}"
                    </Typography>
                    
                    <Rating 
                      value={testimonial.rating} 
                      readOnly 
                      precision={0.5}
                      sx={{ mb: 2 }}
                    />
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: getRandomColor(testimonial.author),
                          mr: 2
                        }}
                      >
                        {testimonial.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          {testimonial.author}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {testimonial.role}, {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;