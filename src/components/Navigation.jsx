import React from 'react'
    import { 
      AppBar, 
      Toolbar, 
      Typography, 
      Button, 
      Box 
    } from '@mui/material'
    import { Link } from 'react-router-dom'

    function Navigation() {
      const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Process Framework', path: '/process-framework' },
        { label: 'Taxonomy', path: '/taxonomy' },
        { label: 'Taxonomy Guide', path: '/taxonomy-guide' },
        { label: 'Early Stage Guide', path: '/early-stage-guide' },
        { label: 'Demo', path: '/demo' },
        { label: 'Recommendation Engine', path: '/recommendation-engine' },
        { label: 'Case Studies', path: '/case-studies' }
      ]

      return (
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              APQC Process Framework
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Button 
                  key={item.path} 
                  color="inherit" 
                  component={Link} 
                  to={item.path}
                  sx={{ 
                    textTransform: 'none',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      )
    }

    export default Navigation
