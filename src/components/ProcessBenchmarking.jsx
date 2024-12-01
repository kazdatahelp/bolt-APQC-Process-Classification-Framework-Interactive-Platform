import React from 'react'
    import {
      Box,
      Typography,
      Paper,
      Grid
    } from '@mui/material'
    import {
      BarChart,
      Bar,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      Legend,
      ResponsiveContainer
    } from 'recharts'

    const BENCHMARK_DATA = [
      {
        name: 'Strategic Planning',
        'Your Organization': 3.2,
        'Industry Average': 4.1,
      },
      {
        name: 'Customer Management',
        'Your Organization': 3.8,
        'Industry Average': 3.9,
      },
      {
        name: 'Operations',
        'Your Organization': 3.5,
        'Industry Average': 4.2,
      }
    ]

    function ProcessBenchmarking() {
      return (
        <Box>
          <Typography variant="h5" gutterBottom>
            Process Performance Benchmarking
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Compare your process maturity against industry standards
          </Typography>

          <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={BENCHMARK_DATA}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Your Organization" fill="#8884d8" />
                  <Bar dataKey="Industry Average" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Strategic Planning
                </Typography>
                <Typography variant="body2">
                  Your organization shows room for improvement in strategic planning processes compared to industry standards.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Customer Management
                </Typography>
                <Typography variant="body2">
                  Customer management processes are closely aligned with industry averages, indicating competitive performance.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Operations
                </Typography>
                <Typography variant="body2">
                  Operational processes show potential for optimization to reach industry benchmark levels.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )
    }

    export default ProcessBenchmarking
