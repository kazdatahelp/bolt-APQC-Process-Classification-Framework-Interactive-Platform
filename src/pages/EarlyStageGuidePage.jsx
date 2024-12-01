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
      Divider,
      LinearProgress
    } from '@mui/material'
    import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
    import BuildIcon from '@mui/icons-material/Build'
    import TimelineIcon from '@mui/icons-material/Timeline'
    import CheckCircleIcon from '@mui/icons-material/CheckCircle'

    function EarlyStageGuidePage() {
      const [currentTab, setCurrentTab] = useState(0)
      const [progress, setProgress] = useState({
        quickStart: 30,
        implementation: 20,
        scaling: 10
      })

      const guideContent = {
        quickStart: [
          {
            title: 'Essential Processes First',
            description: 'Start with core business processes',
            steps: [
              'Customer acquisition process',
              'Service delivery process',
              'Revenue collection process',
              'Basic operational processes'
            ]
          },
          {
            title: 'Simple Documentation',
            description: 'Keep process documentation lightweight',
            steps: [
              'Basic process flowcharts',
              'Key responsibility assignments',
              'Essential metrics tracking',
              'Simple process guidelines'
            ]
          },
          {
            title: 'Focus Areas',
            description: 'Prioritize critical business areas',
            steps: [
              'Customer-facing processes',
              'Revenue-generating activities',
              'Compliance requirements',
              'Quality control basics'
            ]
          }
        ],
        implementation: [
          {
            title: 'Month 1: Foundation',
            description: 'Establish core processes',
            steps: [
              'Map core business processes',
              'Define basic workflows',
              'Assign process owners',
              'Set up simple metrics'
            ]
          },
          {
            title: 'Month 2: Standardization',
            description: 'Standardize operations',
            steps: [
              'Document standard procedures',
              'Train team members',
              'Implement basic controls',
              'Start performance tracking'
            ]
          },
          {
            title: 'Month 3: Optimization',
            description: 'Improve and refine',
            steps: [
              'Review process effectiveness',
              'Identify improvement areas',
              'Adjust workflows',
              'Scale successful processes'
            ]
          }
        ],
        scaling: [
          {
            title: 'Process Evolution',
            description: 'How processes mature with growth',
            steps: [
              'Start simple and add complexity as needed',
              'Build in flexibility for scaling',
              'Document process dependencies',
              'Plan for future integration'
            ]
          },
          {
            title: 'Growth Readiness',
            description: 'Prepare processes for scaling',
            steps: [
              'Design for repeatability',
              'Build in measurement points',
              'Enable process automation',
              'Consider future requirements'
            ]
          },
          {
            title: 'Risk Management',
            description: 'Manage process-related risks',
            steps: [
              'Identify critical control points',
              'Build in basic safeguards',
              'Plan contingency procedures',
              'Monitor key risk indicators'
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
              Early Stage Process Implementation Guide
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Practical guidance for implementing APQC PCF in early-stage organizations
            </Typography>
          </Box>

          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Implementation Progress
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle2" gutterBottom>
                  Quick Start Progress
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={progress.quickStart} 
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle2" gutterBottom>
                  Implementation Progress
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={progress.implementation} 
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle2" gutterBottom>
                  Scaling Progress
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={progress.scaling} 
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={{ mb: 3 }}>
            <Tabs
              value={currentTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Quick Start Guide" icon={<RocketLaunchIcon />} iconPosition="start" />
              <Tab label="Implementation Plan" icon={<BuildIcon />} iconPosition="start" />
              <Tab label="Scaling Strategy" icon={<TimelineIcon />} iconPosition="start" />
            </Tabs>
          </Paper>

          <Grid container spacing={3}>
            {currentTab === 0 && guideContent.quickStart.map((section, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {section.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {section.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <List dense>
                      {section.steps.map((step, stepIndex) => (
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

            {currentTab === 1 && guideContent.implementation.map((section, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {section.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {section.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <List dense>
                      {section.steps.map((step, stepIndex) => (
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

            {currentTab === 2 && guideContent.scaling.map((section, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {section.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {section.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <List dense>
                      {section.steps.map((step, stepIndex) => (
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
        </Container>
      )
    }

    export default EarlyStageGuidePage
