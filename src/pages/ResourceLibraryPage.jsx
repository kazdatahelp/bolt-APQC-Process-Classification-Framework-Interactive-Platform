import React from 'react'
    import { 
      Container, 
      Typography, 
      List, 
      ListItem, 
      ListItemText, 
      ListItemIcon, 
      Paper 
    } from '@mui/material'
    import PdfIcon from '@mui/icons-material/PictureAsPdf'
    import ArticleIcon from '@mui/icons-material/Article'

    function ResourceLibraryPage() {
      const resources = [
        {
          title: 'APQC Process Classification Framework Overview',
          type: 'pdf',
          link: '/resources/apqc-overview.pdf'
        },
        {
          title: 'Process Improvement Best Practices Guide',
          type: 'pdf',
          link: '/resources/best-practices.pdf'
        }
      ]

      return (
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Resource Library
          </Typography>
          <Paper elevation={3}>
            <List>
              {resources.map((resource, index) => (
                <ListItem 
                  key={index} 
                  button 
                  component="a" 
                  href={resource.link} 
                  target="_blank"
                >
                  <ListItemIcon>
                    {resource.type === 'pdf' ? <PdfIcon /> : <ArticleIcon />}
                  </ListItemIcon>
                  <ListItemText primary={resource.title} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Container>
      )
    }

    export default ResourceLibraryPage
