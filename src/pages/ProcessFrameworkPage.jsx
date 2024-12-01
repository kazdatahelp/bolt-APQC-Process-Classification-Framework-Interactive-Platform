import React, { useState } from 'react'
    import { 
      Container, 
      Typography, 
      Box,
      Tabs,
      Tab,
      Paper
    } from '@mui/material'
    import ProcessMaturityAssessment from '../components/ProcessMaturityAssessment'
    import ProcessBenchmarking from '../components/ProcessBenchmarking'

    function ProcessFrameworkPage() {
      const [currentTab, setCurrentTab] = useState(0)

      const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue)
      }

      return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Process Framework Assessment
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Evaluate and benchmark your organization's process maturity
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
              <Tab label="Maturity Assessment" />
              <Tab label="Benchmarking" />
            </Tabs>
          </Paper>

          <Box sx={{ py: 2 }}>
            {currentTab === 0 && <ProcessMaturityAssessment />}
            {currentTab === 1 && <ProcessBenchmarking />}
          </Box>
        </Container>
      )
    }

    export default ProcessFrameworkPage
