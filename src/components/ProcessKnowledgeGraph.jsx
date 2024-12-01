import React, { useState } from 'react'
    import { 
      Box, 
      Typography, 
      Drawer, 
      List, 
      ListItem, 
      ListItemText,
      IconButton
    } from '@mui/material'
    import { Network } from 'react-vis-network-graph'
    import InfoIcon from '@mui/icons-material/Info'

    const PROCESS_KNOWLEDGE_DATA = {
      nodes: [
        { id: 1, label: 'Enterprise Management', group: 'root' },
        { id: 2, label: 'Leadership', group: 'primary' },
        { id: 3, label: 'Operations', group: 'primary' },
        { id: 4, label: 'Customer Focus', group: 'primary' },
        { id: 5, label: 'Strategic Planning', group: 'secondary', parent: 2 },
        { id: 6, label: 'Performance Management', group: 'secondary', parent: 2 },
        { id: 7, label: 'Process Standardization', group: 'secondary', parent: 3 },
        { id: 8, label: 'Continuous Improvement', group: 'secondary', parent: 3 },
        { id: 9, label: 'Customer Experience', group: 'secondary', parent: 4 },
        { id: 10, label: 'Market Analysis', group: 'secondary', parent: 4 }
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 1, to: 4 },
        { from: 2, to: 5 },
        { from: 2, to: 6 },
        { from: 3, to: 7 },
        { from: 3, to: 8 },
        { from: 4, to: 9 },
        { from: 4, to: 10 }
      ]
    }

    function ProcessKnowledgeGraph() {
      const [selectedNode, setSelectedNode] = useState(null)
      const [drawerOpen, setDrawerOpen] = useState(false)

      const options = {
        layout: {
          hierarchical: {
            direction: 'UD',
            sortMethod: 'directed'
          }
        },
        nodes: {
          color: {
            border: '#2B7CE9',
            background: '#97C2FC'
          },
          font: {
            size: 12
          }
        },
        edges: {
          color: { inherit: true },
          smooth: {
            type: 'continuous'
          }
        },
        height: '500px'
      }

      const nodeDetails = {
        5: {
          description: 'Develop and communicate organizational strategy',
          keyActivities: [
            'Create strategic plan',
            'Define organizational goals',
            'Align resources with strategy'
          ]
        },
        6: {
          description: 'Manage organizational performance',
          keyActivities: [
            'Set performance metrics',
            'Conduct performance reviews',
            'Provide performance feedback'
          ]
        }
      }

      const handleNodeSelect = (event) => {
        const { nodes } = event
        if (nodes.length > 0) {
          setSelectedNode(nodes[0])
          setDrawerOpen(true)
        }
      }

      return (
        <Box sx={{ width: '100%', height: 600, position: 'relative' }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Process Knowledge Interconnection
          </Typography>
          <Network
            graph={PROCESS_KNOWLEDGE_DATA}
            options={options}
            events={{
              select: handleNodeSelect
            }}
          />
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Box sx={{ width: 350, p: 3 }}>
              {selectedNode && nodeDetails[selectedNode] && (
                <>
                  <Typography variant="h6">
                    {PROCESS_KNOWLEDGE_DATA.nodes.find(n => n.id === selectedNode)?.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    {nodeDetails[selectedNode].description}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mt: 2 }}>
                    Key Activities:
                  </Typography>
                  <List>
                    {nodeDetails[selectedNode].keyActivities.map((activity, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={activity} />
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </Box>
          </Drawer>
        </Box>
      )
    }

    export default ProcessKnowledgeGraph
