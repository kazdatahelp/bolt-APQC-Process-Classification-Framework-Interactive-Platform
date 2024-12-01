import React from 'react'
    import { 
      Box, 
      Typography, 
      Button, 
      SvgIcon 
    } from '@mui/material'
    import { motion } from 'framer-motion'

    function EmptyState({ 
      title = 'No Data Available', 
      description = 'Explore more to find insights', 
      action 
    }) {
      return (
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 300,
            textAlign: 'center',
            p: 3
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <SvgIcon 
              component={() => (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 100 100" 
                  width="100" 
                  height="100"
                >
                  <circle cx="50" cy="50" r="45" fill="#E8F4F8" />
                  <path 
                    d="M30,40 Q50,20 70,40 T110,40" 
                    fill="none" 
                    stroke="#3498DB" 
                    strokeWidth="5" 
                  />
                </svg>
              )}
              sx={{ 
                fontSize: 100, 
                color: 'primary.main',
                mb: 2 
              }}
            />
            <Typography variant="h5" color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" color="text.disabled" paragraph>
              {description}
            </Typography>
            {action && (
              <Button 
                variant="contained" 
                color="primary"
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            )}
          </motion.div>
        </Box>
      )
    }

    export default EmptyState
