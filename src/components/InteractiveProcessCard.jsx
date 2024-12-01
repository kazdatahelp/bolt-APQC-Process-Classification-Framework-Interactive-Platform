import React from 'react'
    import { 
      Card, 
      CardContent, 
      Typography, 
      Box, 
      LinearProgress 
    } from '@mui/material'
    import { motion } from 'framer-motion'

    function InteractiveProcessCard({ process }) {
      return (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card 
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              borderRadius: 3,
              boxShadow: 3
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {process.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {process.description}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="caption">
                  Maturity Level
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={process.maturityLevel || 50} 
                  color="secondary"
                />
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      )
    }

    export default InteractiveProcessCard
