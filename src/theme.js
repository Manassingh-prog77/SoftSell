import { createTheme } from '@mui/material/styles';

// Function to create a theme based on mode (light/dark)
export const createAppTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#4F46E5', // Indigo
        light: '#818CF8',
        dark: '#3730A3',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#06B6D4', // Cyan
        light: '#67E8F9',
        dark: '#0E7490',
        contrastText: '#FFFFFF',
      },
      success: {
        main: '#10B981', // Emerald
        light: '#6EE7B7',
        dark: '#047857',
      },
      background: {
        default: mode === 'light' ? '#F9FAFB' : '#111827',
        paper: mode === 'light' ? '#FFFFFF' : '#1F2937',
        accent: mode === 'light' ? '#F3F4F6' : '#374151',
      },
      text: {
        primary: mode === 'light' ? '#111827' : '#F9FAFB',
        secondary: mode === 'light' ? '#4B5563' : '#D1D5DB',
      },
      divider: mode === 'light' ? '#E5E7EB' : '#374151',
    },
    typography: {
      fontFamily: '"Plus Jakarta Sans", "Inter", "Helvetica", "Arial", sans-serif',
      h1: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 700,
        fontSize: '3.5rem',
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
        '@media (max-width:900px)': {
          fontSize: '2.75rem',
        },
      },
      h2: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 700,
        fontSize: '2.75rem',
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
        '@media (max-width:900px)': {
          fontSize: '2.25rem',
        },
      },
      h3: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 600,
        fontSize: '2rem',
        lineHeight: 1.3,
        '@media (max-width:900px)': {
          fontSize: '1.75rem',
        },
      },
      h4: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.4,
      },
      h5: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 600,
        fontSize: '1.25rem',
        lineHeight: 1.5,
      },
      h6: {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: 600,
        fontSize: '1.125rem',
        lineHeight: 1.5,
      },
      subtitle1: {
        fontSize: '1.125rem',
        lineHeight: 1.5,
        fontWeight: 500,
      },
      subtitle2: {
        fontSize: '0.875rem',
        lineHeight: 1.57,
        fontWeight: 500,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.57,
      },
      button: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 600,
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            padding: '10px 24px',
            boxShadow: 'none',
            ':hover': {
              boxShadow: mode === 'light' 
                ? '0px 4px 12px rgba(79, 70, 229, 0.2)' 
                : '0px 4px 12px rgba(79, 70, 229, 0.4)',
              transform: 'translateY(-2px)',
              transition: 'all 0.2s',
            },
          },
          containedPrimary: {
            backgroundImage: 'linear-gradient(to right, #4F46E5, #6366F1)',
            ':hover': {
              backgroundImage: 'linear-gradient(to right, #4338CA, #4F46E5)',
            },
          },
          containedSecondary: {
            backgroundImage: 'linear-gradient(to right, #06B6D4, #0EA5E9)',
            ':hover': {
              backgroundImage: 'linear-gradient(to right, #0891B2, #06B6D4)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: mode === 'light' 
              ? '0px 4px 20px rgba(0, 0, 0, 0.05)' 
              : '0px 4px 20px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            ':hover': {
              transform: 'translateY(-5px)',
              boxShadow: mode === 'light' 
                ? '0px 8px 30px rgba(0, 0, 0, 0.08)' 
                : '0px 8px 30px rgba(0, 0, 0, 0.4)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? '#FFFFFF' : '#1F2937',
            boxShadow: mode === 'light' 
              ? '0px 1px 3px rgba(0, 0, 0, 0.08)' 
              : '0px 1px 3px rgba(0, 0, 0, 0.2)',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: mode === 'light' ? '#4F46E5' : '#818CF8',
              },
            },
          },
        },
      },
    },
  });
};