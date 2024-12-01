import React, { useState } from 'react'
    import { 
      Box, 
      Typography, 
      Grid, 
      Card, 
      CardContent, 
      Accordion, 
      AccordionSummary, 
      AccordionDetails 
    } from '@mui/material'
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
    import { useSelector, useDispatch } from 'react-redux'
    import { selectCategory, selectSubcategory } from '../store/processSlice'

    function ProcessVisualizer() {
      const { processData, selectedCategory } = useSelector(state => state.process)
      const dispatch = useDispatch()

      return (
        <Box>
          <Typography variant="h4">APQC Process Classification Framework</Typography>
          <Grid container spacing={3}>
            {processData.categories.map(category => (
              <Grid item xs={12} md={4} key={category.id}>
                <Card 
                  onClick={() => dispatch(selectCategory(category))}
                  sx={{ cursor: 'pointer', height: '100%' }}
                >
                  <CardContent>
                    <Typography variant="h6">{category.name}</Typography>
                    {selectedCategory?.id === category.id && (
                      <Box>
                        {category.subcategories.map(subcategory => (
                          <Accordion key={subcategory.id}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography>{subcategory.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>{subcategory.description}</Typography>
                            </AccordionDetails>
                          </Accordion>
                        ))}
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )
    }

    export default ProcessVisualizer
