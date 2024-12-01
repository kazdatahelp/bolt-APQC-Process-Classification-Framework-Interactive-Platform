import React, { useState } from 'react'
    import { 
      Box, 
      Typography, 
      Container, 
      Stepper, 
      Step, 
      StepLabel, 
      StepContent, 
      Button, 
      Paper 
    } from '@mui/material'

    function ProcessFrameworkDemo() {
      const [activeStep, setActiveStep] = useState(0)

      const demoSteps = [
        {
          label: 'Initial Assessment',
          description: `A manufacturing company begins by assessing their current process maturity.
            They'll evaluate key organizational domains like Leadership, Operations, and Customer Focus.`
        },
        {
          label: 'Maturity Evaluation',
          description: `Using the Process Maturity Assessment, they rate their processes:
            - Leadership: Partially structured strategic planning
            - Operations: Basic process standardization
            - Customer Focus: Inconsistent customer experience management`
        },
        {
          label: 'Benchmarking Insights',
          description: `The Performance Comparison Tool reveals:
            - Below industry average in strategic alignment
            - Moderate operational efficiency
            - Opportunities for improvement in customer experience management`
        },
        {
          label: 'Recommendation Generation',
          description: `The Recommendation Engine suggests:
            - Develop more robust strategic planning process
            - Implement continuous improvement methodologies
            - Create systematic customer feedback mechanisms`
        },
        {
          label: 'Continuous Improvement',
          description: `Next steps:
            - Create action plan based on assessment
            - Prioritize process improvement initiatives
            - Regular reassessment and tracking of progress`
        }
      ]

      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
      }

      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
      }

      const handleReset = () => {
        setActiveStep(0)
      }

      return (
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
            <Typography variant="h4" gutterBottom>
              APQC Process Framework: Demonstration Scenario
            </Typography>
            <Stepper activeStep={activeStep} orientation="vertical">
              {demoSteps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>{step.label}</StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === demoSteps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === demoSteps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>
                  Process Framework Assessment Complete
                </Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Restart Demonstration
                </Button>
              </Paper>
            )}
          </Paper>
        </Container>
      )
    }

    export default ProcessFrameworkDemo
