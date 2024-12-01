import React from 'react'
    import { 
      Box, 
      Typography, 
      Container, 
      Grid, 
      Card, 
      CardContent, 
      Button 
    } from '@mui/material'
    import { Link } from 'react-router-dom'

    function HomePage() {
      const features = [
        {
          title: 'Process Framework',
          description: 'Comprehensive assessment and visualization of organizational processes',
          path: '/process-framework',
          color: 'primary'
        },
        {
          title: 'Taxonomy Explorer',
          description: 'Detailed exploration of APQC Process Classification Framework',
          path: '/taxonomy',
          color: 'secondary'
        },
        {
          title: 'Early Stage Guide',
          description: 'Practical implementation strategies for young organizations',
          path: '/early-stage-guide',
          color: 'primary'
        }
      ]

      return (
        <Container maxWidth="lg">
          <Box textAlign="center" my={5}>
            <Typography variant="h2" gutterBottom>
              APQC Process Framework Explorer
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
              Discover, Analyze, and Optimize Your Business Processes
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid item xs={12} md={4} key={feature.title}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                    <Button 
                      component={Link}
                      to={feature.path}
                      variant="contained"
                      color={feature.color}
                      sx={{ mt: 2 }}
                    >
                      Explore
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      )
    }

    export default HomePage
