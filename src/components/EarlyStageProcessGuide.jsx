import React, { useState } from 'react'
    import { 
      Box, 
      Typography, 
      Grid, 
      Paper, 
      Tabs, 
      Tab, 
      List, 
      ListItem, 
      ListItemText,
      Collapse,
      IconButton
    } from '@mui/material'
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
    import { motion } from 'framer-motion'

    const PRACTICAL_EXAMPLES = {
      softwareSaaS: {
        companyType: 'Early-Stage SaaS Startup',
        processImplementationStages: [
          {
            stage: 'Week 1-2: Process Discovery',
            activities: [
              'Conduct team interviews to map current workflows',
              'Create initial process flow for customer acquisition',
              'Document existing sales and onboarding processes'
            ],
            realWorldExample: `
              Example: A CRM automation startup maps their current lead generation process
              - Whiteboard session with sales and marketing teams
              - Create initial process map showing lead capture → qualification → conversion
              - Identify key touchpoints and potential bottlenecks
            `
          },
          {
            stage: 'Week 3-4: Initial Documentation',
            activities: [
              'Develop standardized sales qualification criteria',
              'Create customer onboarding checklist',
              'Define initial performance metrics'
            ],
            realWorldExample: `
              Example: Develop a repeatable sales qualification framework
              - Create BANT (Budget, Authority, Need, Timing) scoring system
              - Design a standardized demo and follow-up process
              - Implement basic CRM workflow to track lead progression
            `
          },
          {
            stage: 'Month 2: Performance Tracking',
            activities: [
              'Set up key performance indicators (KPIs)',
              'Implement basic reporting mechanisms',
              'Create feedback loops'
            ],
            realWorldExample: `
              Example: Establish sales and customer success metrics
              - Track conversion rates at each funnel stage
              - Monitor customer acquisition cost (CAC)
              - Set up weekly team performance review
            `
          }
        ]
      },
      ecommerceBrand: {
        companyType: 'Direct-to-Consumer E-commerce Brand',
        processImplementationStages: [
          {
            stage: 'Week 1-2: Process Discovery',
            activities: [
              'Map customer journey',
              'Analyze current order fulfillment process',
              'Review customer support interactions'
            ],
            realWorldExample: `
              Example: Mapping customer experience from discovery to post-purchase
              - Create journey map showing ad → product page → checkout → delivery → support
              - Identify friction points in current process
              - Document existing customer communication channels
            `
          },
          {
            stage: 'Week 3-4: Initial Documentation',
            activities: [
              'Standardize order processing workflow',
              'Create customer support response guidelines',
              'Develop return and refund policy'
            ],
            realWorldExample: `
              Example: Design consistent order fulfillment process
              - Create step-by-step shipping and handling procedure
              - Develop template for order confirmation and shipping notifications
              - Establish standard response times for customer inquiries
            `
          },
          {
            stage: 'Month 2: Performance Tracking',
            activities: [
              'Set up customer satisfaction tracking',
              'Monitor logistics and shipping performance',
              'Implement customer feedback collection'
            ],
            realWorldExample: `
              Example: Establish key e-commerce performance metrics
              - Track Net Promoter Score (NPS)
              - Monitor average shipping time
              - Create post-purchase survey mechanism
            `
          }
        ]
      }
    }

    function EarlyStageProcessGuide() {
      const [selectedCompany, setSelectedCompany] = useState('softwareSaaS')
      const [expandedStages, setExpandedStages] = useState({})

      const handleToggleExpand = (stage) => {
        setExpandedStages(prev => ({
          ...prev,
          [stage]: !prev[stage]
        }))
      }

      const currentExample = PRACTICAL_EXAMPLES[selectedCompany]

      return (
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            APQC PCF: Practical Implementation Examples
          </Typography>

          <Tabs 
            value={selectedCompany}
            onChange={(e, newValue) => setSelectedCompany(newValue)}
            variant="fullWidth"
            sx={{ mb: 3 }}
          >
            <Tab value="softwareSaaS" label="SaaS Startup" />
            <Tab value="ecommerceBrand" label="E-commerce Brand" />
          </Tabs>

          <Typography variant="h5" gutterBottom>
            {currentExample.companyType}
          </Typography>

          {currentExample.processImplementationStages.map((stage, index) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 2, 
                  mb: 2, 
                  borderLeft: '4px solid', 
                  borderColor: 'primary.main' 
                }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center' 
                  }}
                >
                  <Typography variant="h6">{stage.stage}</Typography>
                  <IconButton onClick={() => handleToggleExpand(stage.stage)}>
                    <ExpandMoreIcon 
                      sx={{ 
                        transform: expandedStages[stage.stage] 
                          ? 'rotate(180deg)' 
                          : 'rotate(0deg)',
                        transition: 'transform 0.3s'
                      }} 
                    />
                  </IconButton>
                </Box>

                <List>
                  {stage.activities.map((activity, actIndex) => (
                    <ListItem key={actIndex}>
                      <ListItemText primary={activity} />
                    </ListItem>
                  ))}
                </List>

                <Collapse in={expandedStages[stage.stage]}>
                  <Paper variant="outlined" sx={{ p: 2, mt: 2, bgcolor: 'grey.100' }}>
                    <Typography variant="body2" color="text.secondary">
                      {stage.realWorldExample}
                    </Typography>
                  </Paper>
                </Collapse>
              </Paper>
            </motion.div>
          ))}
        </Box>
      )
    }

    export default EarlyStageProcessGuide
