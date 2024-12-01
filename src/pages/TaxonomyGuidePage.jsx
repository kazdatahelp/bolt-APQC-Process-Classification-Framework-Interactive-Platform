import React, { useState } from 'react'
    import { 
      Container, 
      Typography, 
      Box,
      Paper,
      Grid,
      Tabs,
      Tab,
      List,
      ListItem,
      ListItemIcon,
      ListItemText,
      Card,
      CardContent,
      Divider
    } from '@mui/material'
    import AccountTreeIcon from '@mui/icons-material/AccountTree'
    import SchemaIcon from '@mui/icons-material/Schema'
    import LightbulbIcon from '@mui/icons-material/Lightbulb'
    import CheckCircleIcon from '@mui/icons-material/CheckCircle'

    function TaxonomyGuidePage() {
      const [currentTab, setCurrentTab] = useState(0)

      const guideContent = {
        structure: [
          {
            title: 'Process Categories (Level 1)',
            description: 'Major business process areas',
            example: 'Example: 1.0 Develop Vision and Strategy'
          },
          {
            title: 'Process Groups (Level 2)',
            description: 'Groups of related processes',
            example: 'Example: 1.1 Define Business Concept'
          },
          {
            title: 'Processes (Level 3)',
            description: 'Specific business processes',
            example: 'Example: 1.1.1 Define Strategic Planning'
          }
        ],
        navigation: [
          'Start with major process categories',
          'Drill down into process groups',
          'Explore specific processes',
          'Use the expandable sections',
          'Reference process numbers'
        ],
        application: [
          {
            title: 'Process Mapping',
            description: 'Map your processes to PCF',
            steps: [
              'Identify current processes',
              'Match to PCF categories',
              'Document variations',
              'Maintain alignment'
            ]
          },
          {
            title: 'Performance Benchmarking',
            description: 'Compare process performance',
            steps: [
              'Select measures',
              'Collect data',
              'Compare standards',
              'Identify improvements'
            ]
          },
          {
            title: 'Process Improvement',
            description: 'Enhance process effectiveness',
            steps: [
              'Assess maturity',
              'Identify best practices',
              'Plan improvements',
              'Monitor progress'
            ]
          }
        ]
      }

      const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue)
      }

      return (
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              APQC Process Classification Framework Guide
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Learn how to effectively use and navigate the Process Classification Framework
            </Typography>
          </Box>

          <Paper sx={{ mb: 3 }}>
            <Tabs
              value={currentTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Framework Structure" icon={<AccountTreeIcon />} iconPosition="start" />
              <Tab label="Navigation Guide" icon={<SchemaIcon />} iconPosition="start" />
              <Tab label="Practical Application" icon={<LightbulbIcon />} iconPosition="start" />
            </Tabs>
          </Paper>

          {currentTab === 0 && (
            <Grid container spacing={3}>
              {guideContent.structure.map((level, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {level.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {level.description}
                      </Typography>
                      <Typography variant="body2" color="primary">
                        {level.example}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {currentTab === 1 && (
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                How to Navigate the Framework
              </Typography>
              <List>
                {guideContent.navigation.map((step, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={step} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}

          {currentTab === 2 && (
            <Grid container spacing={3}>
              {guideContent.application.map((scenario, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {scenario.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {scenario.description}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <List dense>
                        {scenario.steps.map((step, stepIndex) => (
                          <ListItem key={stepIndex}>
                            <ListItemIcon>
                              <CheckCircleIcon color="primary" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText 
                              primary={step}
                              primaryTypographyProps={{
                                variant: 'body2'
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      )
    }

    export default TaxonomyGuidePage
