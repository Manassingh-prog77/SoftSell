import React, { createContext, useState, useEffect, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createAppTheme } from './theme';

// Create context
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light',
});

// Theme context provider
export const ThemeContextProvider = ({ children }) => {
  // Get stored theme preference or use system preference
  const getInitialMode = () => {
    const storedMode = localStorage.getItem('themeMode');
    if (storedMode) {
      return storedMode;
    }
    
    // Use system preference as fallback
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDarkMode ? 'dark' : 'light';
  };

  const [mode, setMode] = useState(getInitialMode);

  // Update localStorage when mode changes
  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  // Create the color mode context value
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );

  // Create the theme object based on the mode
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};