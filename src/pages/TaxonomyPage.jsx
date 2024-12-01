import React, { useState } from 'react'
    import { 
      Container, 
      Typography, 
      Box,
      Paper,
      List,
      ListItem,
      ListItemText,
      Grid,
      Accordion,
      AccordionSummary,
      AccordionDetails,
      Chip
    } from '@mui/material'
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

    const PCF_DATA = [
      {
        id: '1.0',
        title: '1.0 Develop Vision and Strategy',
        description: 'Processes for developing the organizational vision, strategy, and initiatives',
        processes: [
          '1.1 Define the business concept and long-term vision',
          '1.2 Develop business strategy',
          '1.3 Manage strategic initiatives',
          '1.4 Conduct strategic business planning',
          '1.5 Manage organization structure and governance'
        ]
      },
      {
        id: '2.0',
        title: '2.0 Develop and Manage Products and Services',
        description: 'Processes for designing, developing, and implementing products and services',
        processes: [
          '2.1 Manage product and service portfolio',
          '2.2 Develop products and services',
          '2.3 Launch products and services',
          '2.4 Manage product and service life cycle',
          '2.5 Manage product and service innovation'
        ]
      },
      {
        id: '3.0',
        title: '3.0 Market and Sell Products and Services',
        description: 'Processes for marketing and selling products and services to customers',
        processes: [
          '3.1 Understand markets, customers and capabilities',
          '3.2 Develop marketing strategy',
          '3.3 Develop sales strategy',
          '3.4 Develop and manage marketing plans',
          '3.5 Manage customer relationships'
        ]
      },
      {
        id: '4.0',
        title: '4.0 Deliver Products and Services',
        description: 'Processes for delivering products and services to customers',
        processes: [
          '4.1 Plan for and align supply chain resources',
          '4.2 Procure materials and services',
          '4.3 Produce/Manufacture/Deliver product',
          '4.4 Deliver service to customer',
          '4.5 Manage logistics and warehousing'
        ]
      },
      {
        id: '5.0',
        title: '5.0 Manage Customer Service',
        description: 'Processes for managing customer service and support',
        processes: [
          '5.1 Develop customer service strategy',
          '5.2 Plan and manage customer service operations',
          '5.3 Measure and evaluate customer service operations',
          '5.4 Manage customer service requests/inquiries',
          '5.5 Manage customer complaints'
        ]
      },
      {
        id: '6.0',
        title: '6.0 Develop and Manage Human Capital',
        description: 'Processes for managing human resources and workforce capabilities',
        processes: [
          '6.1 Develop and manage HR planning, policies, and strategies',
          '6.2 Recruit, source, and select employees',
          '6.3 Develop and counsel employees',
          '6.4 Reward and retain employees',
          '6.5 Redeploy and retire employees'
        ]
      },
      {
        id: '7.0',
        title: '7.0 Manage Information Technology',
        description: 'Processes for managing IT services and technology infrastructure',
        processes: [
          '7.1 Develop and manage IT customer relationships',
          '7.2 Develop and manage IT solutions',
          '7.3 Deliver and support IT services',
          '7.4 Manage IT infrastructure',
          '7.5 Manage IT security, privacy, and data risks'
        ]
      },
      {
        id: '8.0',
        title: '8.0 Manage Financial Resources',
        description: 'Processes for managing financial planning, accounting, and business performance',
        processes: [
          '8.1 Perform planning and management accounting',
          '8.2 Perform revenue accounting',
          '8.3 Perform general accounting and reporting',
          '8.4 Manage fixed assets',
          '8.5 Process payroll',
          '8.6 Process accounts payable and expense reimbursements',
          '8.7 Manage treasury operations',
          '8.8 Manage internal controls'
        ]
      },
      {
        id: '9.0',
        title: '9.0 Acquire, Construct, and Manage Assets',
        description: 'Processes for managing physical assets and facilities',
        processes: [
          '9.1 Design and construct productive assets',
          '9.2 Maintain productive assets',
          '9.3 Manage physical asset lifecycle',
          '9.4 Dispose of productive assets',
          '9.5 Manage facilities'
        ]
      },
      {
        id: '10.0',
        title: '10.0 Manage Enterprise Risk, Compliance, and Resilience',
        description: 'Processes for managing organizational risk, compliance, and business continuity',
        processes: [
          '10.1 Manage enterprise risk',
          '10.2 Manage compliance',
          '10.3 Manage business resilience',
          '10.4 Manage security and privacy',
          '10.5 Manage stakeholder relationships'
        ]
      },
      {
        id: '11.0',
        title: '11.0 Manage External Relationships',
        description: 'Processes for managing relationships with external stakeholders',
        processes: [
          '11.1 Build investor relationships',
          '11.2 Manage government and industry relationships',
          '11.3 Manage relations with board of directors',
          '11.4 Manage legal and ethical issues',
          '11.5 Manage public relations program'
        ]
      },
      {
        id: '12.0',
        title: '12.0 Develop and Manage Business Capabilities',
        description: 'Processes for managing knowledge, improvement, and change',
        processes: [
          '12.1 Manage business processes',
          '12.2 Manage portfolio, program, and projects',
          '12.3 Manage enterprise quality',
          '12.4 Manage change',
          '12.5 Develop and manage enterprise-wide knowledge management capability',
          '12.6 Measure and benchmark business performance'
        ]
      }
    ]

    function TaxonomyPage() {
      const [expanded, setExpanded] = useState(false)

      const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
      }

      return (
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              APQC Process Classification Framework
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Explore the complete hierarchical structure of business processes
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              {PCF_DATA.map((category) => (
                <Accordion
                  key={category.id}
                  expanded={expanded === category.id}
                  onChange={handleChange(category.id)}
                  sx={{ 
                    mb: 2,
                    '&:hover': {
                      bgcolor: 'action.hover'
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${category.id}-content`}
                    id={`${category.id}-header`}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography variant="h6">{category.title}</Typography>
                      <Chip 
                        label={`${category.processes.length} processes`}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="text.secondary" paragraph>
                      {category.description}
                    </Typography>
                    <List>
                      {category.processes.map((process, index) => (
                        <ListItem 
                          key={index}
                          sx={{
                            '&:hover': {
                              bgcolor: 'action.hover',
                              borderRadius: 1
                            }
                          }}
                        >
                          <ListItemText 
                            primary={process}
                            primaryTypographyProps={{
                              variant: 'body1'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        </Container>
      )
    }

    export default TaxonomyPage
