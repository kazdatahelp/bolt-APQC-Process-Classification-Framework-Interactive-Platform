import React from 'react'
    import { 
      Box, 
      Container, 
      Typography, 
      Link as MuiLink 
    } from '@mui/material'

    function Footer() {
      return (
        <Box 
          component="footer" 
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) => theme.palette.background.paper,
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body2" color="text.secondary" align="center">
              {'© '}
              <MuiLink color="inherit" href="https://apqc.org/">
                APQC Process Framework Explorer
              </MuiLink>{' '}
              {new Date().getFullYear()}
              {'. All Rights Reserved.'}
            </Typography>
          </Container>
        </Box>
      )
    }

    export default Footer
