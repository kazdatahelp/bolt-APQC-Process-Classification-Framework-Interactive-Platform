import React, { useState } from 'react'
    import {
      Box,
      Typography,
      Paper,
      Rating,
      Grid,
      List,
      ListItem,
      ListItemText,
      Button,
      Divider
    } from '@mui/material'

    const PROCESS_AREAS = [
      {
        name: "Strategic Planning",
        description: "Processes for developing and executing organizational strategy",
        criteria: [
          "Documented strategic planning process",
          "Regular strategy review and updates",
          "Strategic alignment across organization"
        ]
      },
      {
        name: "Customer Management",
        description: "Processes for managing customer relationships and service delivery",
        criteria: [
          "Customer feedback collection process",
          "Service level management",
          "Customer communication channels"
        ]
      },
      {
        name: "Operations Management",
        description: "Core operational processes and execution",
        criteria: [
          "Process documentation and standardization",
          "Performance measurement system",
          "Continuous improvement mechanisms"
        ]
      }
    ]

    function ProcessMaturityAssessment() {
      const [ratings, setRatings] = useState({})
      const [showResults, setShowResults] = useState(false)

      const handleRatingChange = (area, criterion, value) => {
        setRatings(prev => ({
          ...prev,
          [`${area}-${criterion}`]: value
        }))
      }

      const calculateAreaScore = (areaName) => {
        const areaRatings = PROCESS_AREAS
          .find(area => area.name === areaName)
          .criteria
          .map(criterion => ratings[`${areaName}-${criterion}`] || 0)
        
        return areaRatings.reduce((a, b) => a + b, 0) / areaRatings.length
      }

      const handleSubmit = () => {
        setShowResults(true)
      }

      return (
        <Box>
          <Typography variant="h5" gutterBottom>
            Process Maturity Assessment
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Rate your organization's process maturity in key areas (1-5 scale)
          </Typography>

          {PROCESS_AREAS.map((area) => (
            <Paper key={area.name} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                {area.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {area.description}
              </Typography>
              <List>
                {area.criteria.map((criterion) => (
                  <ListItem key={criterion}>
                    <Grid container alignItems="center" spacing={2}>
                      <Grid item xs={8}>
                        <ListItemText primary={criterion} />
                      </Grid>
                      <Grid item xs={4}>
                        <Rating
                          value={ratings[`${area.name}-${criterion}`] || 0}
                          onChange={(event, newValue) => {
                            handleRatingChange(area.name, criterion, newValue)
                          }}
                        />
                      </Grid>
                    </Grid>
                  </ListItem>
                ))}
              </List>
            </Paper>
          ))}

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Button 
              variant="contained" 
              color="primary"
              onClick={handleSubmit}
              size="large"
            >
              Calculate Maturity Score
            </Button>
          </Box>

          {showResults && (
            <Paper sx={{ p: 3, bgcolor: 'primary.light', color: 'white' }}>
              <Typography variant="h6" gutterBottom>
                Maturity Assessment Results
              </Typography>
              <Grid container spacing={3}>
                {PROCESS_AREAS.map((area) => (
                  <Grid item xs={12} md={4} key={area.name}>
                    <Box>
                      <Typography variant="subtitle1">
                        {area.name}
                      </Typography>
                      <Typography variant="h4">
                        {calculateAreaScore(area.name).toFixed(1)}
                      </Typography>
                      <Typography variant="body2">
                        out of 5.0
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          )}
        </Box>
      )
    }

    export default ProcessMaturityAssessment
