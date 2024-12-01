import React from 'react'
    import { 
      Container, 
      Typography, 
      Grid, 
      Card, 
      CardContent, 
      CardMedia 
    } from '@mui/material'

    function CaseStudiesPage() {
      const caseStudies = [
        {
          title: 'Manufacturing Process Optimization',
          description: 'How a global manufacturer reduced process cycle time by 40%',
          image: '/case-study-1.jpg'
        },
        {
          title: 'Financial Services Transformation',
          description: 'Streamlining customer onboarding through process redesign',
          image: '/case-study-2.jpg'
        }
      ]

      return (
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            Process Improvement Case Studies
          </Typography>
          <Grid container spacing={3}>
            {caseStudies.map((study, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={study.image}
                    alt={study.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{study.title}</Typography>
                    <Typography variant="body2">{study.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      )
    }

    export default CaseStudiesPage
