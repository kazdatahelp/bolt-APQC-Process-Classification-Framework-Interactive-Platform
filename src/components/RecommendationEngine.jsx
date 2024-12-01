import React, { useState } from 'react'
    import { 
      Box, 
      Typography, 
      TextField, 
      Button, 
      Stepper, 
      Step, 
      StepLabel, 
      StepContent,
      Chip
    } from '@mui/material'
    import { motion, AnimatePresence } from 'framer-motion'

    function RecommendationEngine() {
      const [activeStep, setActiveStep] = useState(0)
      const [selectedIndustries, setSelectedIndustries] = useState([])
      const [businessDescription, setBusinessDescription] = useState('')
      const [strategicGoals, setStrategicGoals] = useState('')

      const industries = [
        'Manufacturing', 'Finance', 'Healthcare', 
        'Technology', 'Retail', 'Education'
      ]

      const steps = [
        {
          label: 'Business Description',
          content: (
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Describe Your Business"
              value={businessDescription}
              onChange={(e) => setBusinessDescription(e.target.value)}
            />
          )
        },
        {
          label: 'Select Industries',
          content: (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {industries.map(industry => (
                <Chip
                  key={industry}
                  label={industry}
                  color={selectedIndustries.includes(industry) ? 'primary' : 'default'}
                  onClick={() => {
                    setSelectedIndustries(prev => 
                      prev.includes(industry)
                        ? prev.filter(i => i !== industry)
                        : [...prev, industry]
                    )
                  }}
                />
              ))}
            </Box>
          )
        },
        {
          label: 'Strategic Goals',
          content: (
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Define Your Strategic Goals"
              value={strategicGoals}
              onChange={(e) => setStrategicGoals(e.target.value)}
            />
          )
        }
      ]

      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
      }

      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
      }

      const handleSubmit = () => {
        // Recommendation logic
        console.log('Generating recommendations...')
      }

      return (
        <Box>
          <Typography variant="h4" gutterBottom>
            Process Recommendation Engine
          </Typography>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
                <StepContent>
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      {step.content}
                    </motion.div>
                  </AnimatePresence>
                  <Box sx={{ mb: 2 }}>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      onClick={
                        index === steps.length - 1 
                          ? handleSubmit 
                          : handleNext
                      }
                      color={index === steps.length - 1 ? 'success' : 'primary'}
                    >
                      {index === steps.length - 1 ? 'Generate Recommendations' : 'Next'}
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      )
    }

    export default RecommendationEngine
