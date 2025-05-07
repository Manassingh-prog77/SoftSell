import React, { useContext, useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Container, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  useMediaQuery, 
  Switch, 
  FormControlLabel,
  useScrollTrigger,
  Slide,
  Fab
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ColorModeContext } from '../ThemeContext';

// Hide AppBar on scroll down
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// Back to top button
function ScrollTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1000,
      }}
    >
      <Slide in={trigger}>
        <Fab
          color="primary"
          size="small"
          aria-label="scroll back to top"
          onClick={handleClick}
          sx={{ 
            opacity: 0.9,
            '&:hover': {
              opacity: 1,
              transform: 'translateY(-4px)',
            },
            transition: 'all 0.3s'
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Slide>
    </Box>
  );
}

function Footer() {
  const theme = useTheme();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 6, 
        backgroundColor: theme.palette.background.accent,
        mt: 8 
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'center', md: 'flex-start' },
          textAlign: { xs: 'center', md: 'left' }
        }}>
          <Box sx={{ mb: { xs: 4, md: 0 } }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              SoftSell
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '300px' }}>
              The trusted platform for software license resale.
              Turn your unused licenses into cash quickly and securely.
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
                Company
              </Typography>
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                {['About Us', 'Blog', 'Careers', 'Press'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <Typography 
                      variant="body2" 
                      component="a" 
                      href="#" 
                      sx={{ 
                        color: 'text.secondary',
                        textDecoration: 'none',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
                Legal
              </Typography>
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                {['Terms', 'Privacy', 'Cookies', 'Licenses'].map((item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <Typography 
                      variant="body2" 
                      component="a" 
                      href="#" 
                      sx={{ 
                        color: 'text.secondary',
                        textDecoration: 'none',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        
        <Box 
          sx={{ 
            mt: 6, 
            pt: 3, 
            borderTop: `1px solid ${theme.palette.divider}`,
            textAlign: 'center'
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} SoftSell. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default function Layout({ children }) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Features', id: 'features' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    setDrawerOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Detect active section
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HideOnScroll>
        <AppBar 
          position="sticky" 
          color="inherit" 
          elevation={0}
          sx={{ 
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
              {/* Logo */}
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box 
                  component="span" 
                  sx={{ 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    width: 32, 
                    height: 32, 
                    borderRadius: 1, 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mr: 1,
                    fontWeight: 800
                  }}
                >
                  S
                </Box>
                SoftSell
              </Typography>

              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      sx={{
                        mx: 1,
                        color: activeSection === item.id ? 'primary.main' : 'text.primary',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: activeSection === item.id ? '100%' : '0%',
                          height: '2px',
                          bgcolor: 'primary.main',
                          transition: 'width 0.3s',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              )}

              {/* Theme Toggle & Mobile Menu Button */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={colorMode.mode === 'dark'}
                      onChange={colorMode.toggleColorMode}
                      icon={<LightModeIcon sx={{ color: '#FDB813' }} />}
                      checkedIcon={<DarkModeIcon sx={{ color: '#FDB813' }} />}
                    />
                  }
                  label=""
                />
                
                {isMobile && (
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={toggleDrawer}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          <List>
            {navItems.map((item) => (
              <ListItem 
                button 
                key={item.id} 
                onClick={() => handleNavClick(item.id)}
                sx={{
                  backgroundColor: activeSection === item.id ? 'background.accent' : 'transparent',
                  borderLeft: activeSection === item.id ? `4px solid ${theme.palette.primary.main}` : 'none',
                  pl: activeSection === item.id ? 2 : 3,
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            <ListItem 
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                mt: 2,
                borderTop: `1px solid ${theme.palette.divider}`,
                pt: 2
              }}
            >
              <Typography variant="body2">Dark Mode</Typography>
              <Switch
                checked={colorMode.mode === 'dark'}
                onChange={colorMode.toggleColorMode}
                size="small"
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      <ScrollTop />
    </Box>
  );
}