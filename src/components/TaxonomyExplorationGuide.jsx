import React from 'react'
    import { 
      Box, 
      Typography, 
      Paper, 
      List, 
      ListItem, 
      ListItemIcon, 
      ListItemText 
    } from '@mui/material'
    import CheckCircleIcon from '@mui/icons-material/CheckCircle'

    function TaxonomyExplorationGuide() {
      const explorationSteps = [
        {
          title: "1. Navigate the Hierarchy",
          description: "Use the tree view to expand and collapse process categories",
          example: "Click on '1.0 Develop & Manage Enterprise Strategy & Performance' to see its subcategories"
        },
        {
          title: "2. Select a Process",
          description: "Click on a specific process to view detailed information",
          example: "Select '1.1 Develop Enterprise Strategic Plan' to see its description and key activities"
        },
        {
          title: "3. Explore Detailed Information",
          description: "The side drawer provides comprehensive process insights",
          details: [
            "Process name and full hierarchy",
            "Detailed description",
            "Key activities and objectives"
          ]
        },
        {
          title: "4. Cross-Domain Navigation",
          description: "Easily switch between different process domains",
          example: "Move from Enterprise Strategy to Customer Service or Human Capital domains"
        }
      ]

      return (
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            How to Explore the APQC Taxonomy
          </Typography>
          
          {explorationSteps.map((step, index) => (
            <Paper 
              key={index} 
              elevation={3} 
              sx={{ 
                p: 2, 
                mb: 2, 
                borderLeft: '4px solid', 
                borderColor: 'primary.main' 
              }}
            >
              <Typography variant="h6" gutterBottom>
                {step.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {step.description}
              </Typography>
              
              {step.example && (
                <Typography variant="body2" color="text.primary" sx={{ fontStyle: 'italic', mb: 1 }}>
                  Example: {step.example}
                </Typography>
              )}
              
              {step.details && (
                <List>
                  {step.details.map((detail, detailIndex) => (
                    <ListItem key={detailIndex}>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={detail} />
                    </ListItem>
                  ))}
                </List>
              )}
            </Paper>
          ))}
        </Box>
      )
    }

    export default TaxonomyExplorationGuide
