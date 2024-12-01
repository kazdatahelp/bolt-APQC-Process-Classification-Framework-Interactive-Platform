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
      TreeItem
    } from '@mui/material'
    import ChevronRightIcon from '@mui/icons-material/ChevronRight'
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
    import { APQC_TAXONOMY } from '../data/APQCTaxonomyData'

    function TaxonomyExplorer() {
      const [selectedNode, setSelectedNode] = useState(null)
      const [expanded, setExpanded] = useState([])

      const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds)
      }

      const handleSelect = (event, nodeId) => {
        const selectedNode = findNodeByName(APQC_TAXONOMY, nodeId)
        setSelectedNode(selectedNode)
      }

      const renderTree = (nodes) => (
        <TreeItem 
          key={nodes.name} 
          nodeId={nodes.name} 
          label={nodes.name}
        >
          {nodes.children && nodes.children.map(renderTree)}
        </TreeItem>
      )

      return (
        <Box sx={{ display: 'flex', height: '100%' }}>
          <Box sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" gutterBottom>
              APQC Process Classification Framework
            </Typography>
            <Paper elevation={3} sx={{ p: 2 }}>
              <TreeView
                aria-label="APQC Taxonomy"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                expanded={expanded}
                onNodeToggle={handleToggle}
                onNodeSelect={handleSelect}
                multiSelect={false}
              >
                {renderTree(APQC_TAXONOMY)}
              </TreeView>
            </Paper>
          </Box>

          {selectedNode && (
            <Drawer
              anchor="right"
              open={!!selectedNode}
              onClose={() => setSelectedNode(null)}
              sx={{ 
                '& .MuiDrawer-paper': { 
                  width: 400, 
                  p: 3 
                } 
              }}
            >
              <Typography variant="h6" gutterBottom>
                {selectedNode.name}
              </Typography>
              {selectedNode.description && (
                <Typography variant="body2" color="text.secondary" paragraph>
                  {selectedNode.description}
                </Typography>
              )}
              {selectedNode.keyProcesses && (
                <>
                  <Typography variant="subtitle1">Key Processes:</Typography>
                  <List>
                    {selectedNode.keyProcesses.map((process, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={process} />
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </Drawer>
          )}
        </Box>
      )
    }

    function findNodeByName(tree, name) {
      if (tree.name === name) return tree
      if (tree.children) {
        for (let child of tree.children) {
          const found = findNodeByName(child, name)
          if (found) return found
        }
      }
      return null
    }

    export default TaxonomyExplorer
