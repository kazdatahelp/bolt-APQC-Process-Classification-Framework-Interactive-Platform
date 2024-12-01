import React, { useState } from 'react'
    import {
      Box,
      Typography,
      Paper,
      Drawer,
      List,
      ListItem,
      ListItemText,
      TreeView,
      TreeItem,
      Divider,
      Chip
    } from '@mui/material'
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
    import ChevronRightIcon from '@mui/icons-material/ChevronRight'

    const PCF_DATA = {
      id: 'root',
      name: 'APQC Process Classification Framework',
      children: [
        {
          id: '1.0',
          name: '1.0 Develop Vision and Strategy',
          description: 'Processes for developing the organizational vision, strategy, and initiatives',
          children: [
            {
              id: '1.1',
              name: '1.1 Define the business concept and long-term vision',
              processes: [
                '1.1.1 Assess the external environment',
                '1.1.2 Survey market and determine customer needs and wants',
                '1.1.3 Perform internal organizational assessment',
                '1.1.4 Establish strategic vision'
              ]
            },
            {
              id: '1.2',
              name: '1.2 Develop business strategy',
              processes: [
                '1.2.1 Develop overall mission statement',
                '1.2.2 Evaluate strategic options',
                '1.2.3 Select long-term business strategy',
                '1.2.4 Coordinate and align functional and process strategies'
              ]
            }
          ]
        },
        {
          id: '2.0',
          name: '2.0 Develop and Manage Products and Services',
          description: 'Processes for designing, developing, and implementing products and services',
          children: [
            {
              id: '2.1',
              name: '2.1 Manage product and service portfolio',
              processes: [
                '2.1.1 Define product/service development strategy',
                '2.1.2 Manage product/service life cycle',
                '2.1.3 Perform product/service portfolio analysis'
              ]
            },
            {
              id: '2.2',
              name: '2.2 Develop products and services',
              processes: [
                '2.2.1 Design products and services',
                '2.2.2 Test market for new products/services',
                '2.2.3 Prepare for production'
              ]
            }
          ]
        },
        {
          id: '3.0',
          name: '3.0 Market and Sell Products and Services',
          description: 'Processes for marketing and selling products and services to customers',
          children: [
            {
              id: '3.1',
              name: '3.1 Understand markets, customers, and capabilities',
              processes: [
                '3.1.1 Perform customer and market intelligence analysis',
                '3.1.2 Evaluate and prioritize market opportunities',
                '3.1.3 Monitor competitive landscape'
              ]
            },
            {
              id: '3.2',
              name: '3.2 Develop marketing strategy',
              processes: [
                '3.2.1 Define offering and value proposition',
                '3.2.2 Define pricing strategy',
                '3.2.3 Define and manage channel strategy'
              ]
            }
          ]
        }
      ]
    }

    function ProcessTaxonomyExplorer() {
      const [selectedNode, setSelectedNode] = useState(null)
      const [expanded, setExpanded] = useState([])

      const handleNodeSelect = (event, nodeId) => {
        const node = findNodeById(PCF_DATA, nodeId)
        setSelectedNode(node)
      }

      const handleNodeToggle = (event, nodeIds) => {
        setExpanded(nodeIds)
      }

      const renderTree = (node) => (
        <TreeItem 
          key={node.id} 
          nodeId={node.id} 
          label={
            <Typography variant="body2" sx={{ py: 1 }}>
              {node.name}
            </Typography>
          }
        >
          {Array.isArray(node.children)
            ? node.children.map((child) => renderTree(child))
            : null}
        </TreeItem>
      )

      return (
        <Box sx={{ display: 'flex', height: '100%' }}>
          <Box sx={{ width: '40%', pr: 2 }}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                expanded={expanded}
                onNodeToggle={handleNodeToggle}
                onNodeSelect={handleNodeSelect}
              >
                {renderTree(PCF_DATA)}
              </TreeView>
            </Paper>
          </Box>

          <Box sx={{ width: '60%', pl: 2 }}>
            {selectedNode ? (
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  {selectedNode.name}
                </Typography>
                
                {selectedNode.description && (
                  <>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {selectedNode.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                  </>
                )}

                {selectedNode.processes && (
                  <>
                    <Typography variant="subtitle1" gutterBottom>
                      Processes:
                    </Typography>
                    <List>
                      {selectedNode.processes.map((process, index) => (
                        <ListItem key={index}>
                          <ListItemText 
                            primary={process}
                            primaryTypographyProps={{
                              variant: 'body2'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}

                <Box sx={{ mt: 2 }}>
                  <Chip 
                    label={`Level ${selectedNode.id.split('.').length - 1}`}
                    color="primary"
                    size="small"
                  />
                </Box>
              </Paper>
            ) : (
              <Paper sx={{ p: 3, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography color="text.secondary">
                  Select a process category to view details
                </Typography>
              </Paper>
            )}
          </Box>
        </Box>
      )
    }

    // Utility function to find node by ID
    function findNodeById(node, id) {
      if (node.id === id) return node
      if (node.children) {
        for (let child of node.children) {
          const found = findNodeById(child, id)
          if (found) return found
        }
      }
      return null
    }

    export default ProcessTaxonomyExplorer
