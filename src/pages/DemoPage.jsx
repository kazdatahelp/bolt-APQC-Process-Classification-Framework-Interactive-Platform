import React from 'react'
    import { Container, Typography, Box } from '@mui/material'
    import ProcessFrameworkDemo from '../demos/ProcessFrameworkDemo'

    function DemoPage() {
      return (
        <Container maxWidth="lg">
          <Box textAlign="center" my={4}>
            <Typography variant="h3" gutterBottom>
              APQC Process Framework Explorer
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Interactive Demonstration of Process Management Assessment
            </Typography>
          </Box>
          <ProcessFrameworkDemo />
        </Container>
      )
    }

    export default DemoPage
