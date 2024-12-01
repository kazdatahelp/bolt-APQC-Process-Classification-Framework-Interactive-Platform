import React, { useState } from 'react'
    import { 
      Box, 
      Typography, 
      Grid, 
      Paper, 
      Select, 
      MenuItem, 
      FormControl, 
      InputLabel 
    } from '@mui/material'
    import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'

    const PROCESS_BENCHMARKS = {
      'leadership': [
        { name: 'Strategic Alignment', 'Your Org': 3.5, 'Industry Avg': 4.2 },
        { name: 'Vision Communication', 'Your Org': 3.0, 'Industry Avg': 3.8 },
        { name: 'Performance Management', 'Your Org': 2.8, 'Industry Avg': 3.5 }
      ],
      'operations': [
        { name: 'Process Standardization', 'Your Org': 3.2, 'Industry Avg': 4.0 },
        { name: 'Continuous Improvement', 'Your Org': 2.7, 'Industry Avg': 3.6 },
        { name: 'Operational Efficiency', 'Your Org': 3.0, 'Industry Avg': 3.7 }
      ]
    }

    function ProcessComparisonTool() {
      const [selectedDomain, setSelectedDomain] = useState('leadership')

      return (
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Process Performance Benchmarking
          </Typography>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Process Domain</InputLabel>
            <Select
              value={selectedDomain}
              label="Process Domain"
              onChange={(e) => setSelectedDomain(e.target.value)}
            >
              <MenuItem value="leadership">Leadership</MenuItem>
              <MenuItem value="operations">Operations</MenuItem>
            </Select>
          </FormControl>

          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <BarChart 
                  width={600} 
                  height={300} 
                  data={PROCESS_BENCHMARKS[selectedDomain]}
                >
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Your Org" fill="#8884d8" />
                  <Bar dataKey="Industry Avg" fill="#82ca9d" />
                </BarChart>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
                <Typography variant="h6">Insights</Typography>
                <Typography variant="body2" color="text.secondary">
                  Compare your organization's process performance against industry benchmarks. 
                  Identify areas of strength and opportunities for improvement.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )
    }

    export default ProcessComparisonTool
