import { createTheme } from '@mui/material/styles'

    export const theme = createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#2C3E50',      // Deep blue-gray for professionalism
          light: '#34495E',
          dark: '#1A2530'
        },
        secondary: {
          main: '#3498DB',      // Bright blue for highlights
          light: '#5DADE2',
          dark: '#2874A6'
        },
        background: {
          default: '#F4F6F7',   // Soft light gray
          paper: '#FFFFFF'
        },
        text: {
          primary: '#2C3E50',
          secondary: '#7F8C8D'
        },
        success: {
          main: '#2ECC71'       // Vibrant green for positive actions
        },
        error: {
          main: '#E74C3C'       // Bright red for errors
        }
      },
      typography: {
        fontFamily: [
          'Inter', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          '"Segoe UI"', 
          'Roboto', 
          'Arial', 
          'sans-serif'
        ].join(','),
        h1: {
          fontWeight: 700,
          letterSpacing: '-0.05em'
        },
        h2: {
          fontWeight: 600,
          letterSpacing: '-0.03em'
        },
        body1: {
          lineHeight: 1.6
        }
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: 'none',
              borderRadius: 8,
              fontWeight: 600,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }
            },
            containedPrimary: {
              background: 'linear-gradient(45deg, #2C3E50 30%, #34495E 90%)',
              boxShadow: '0 3px 5px rgba(0,0,0,0.2)'
            }
          }
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 8px 15px rgba(0,0,0,0.15)'
              }
            }
          }
        }
      }
    })
