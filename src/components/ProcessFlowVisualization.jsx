import React, { useState } from 'react'
    import { 
      Box, 
      Typography, 
      Dialog, 
      DialogTitle, 
      DialogContent 
    } from '@mui/material'
    import { motion } from 'framer-motion'
    import { ResponsiveNetwork } from '@nivo/network'

    function ProcessFlowVisualization({ processData }) {
      const [selectedProcess, setSelectedProcess] = useState(null)

      const networkData = {
        nodes: processData.categories.flatMap(category => 
          category.subcategories.map(subcategory => ({
            id: subcategory.id,
            label: subcategory.name,
            color: '#3498DB'
          }))
        ),
        links: processData.categories.flatMap(category => 
          category.subcategories.map((subcategory, index, arr) => 
            index > 0 ? {
              source: arr[index-1].id,
              target: subcategory.id
            } : null
          ).filter(Boolean)
        )
      }

      return (
        <Box sx={{ height: 500, width: '100%' }}>
          <ResponsiveNetwork
            nodes={networkData.nodes}
            links={networkData.links}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            repulsivity={10}
            iterations={60}
            nodeColor={node => node.color}
            linkThickness={2}
            motionStiffness={160}
            motionDamping={12}
            onClick={(node) => setSelectedProcess(node)}
          />
          {selectedProcess && (
            <Dialog 
              open={!!selectedProcess} 
              onClose={() => setSelectedProcess(null)}
            >
              <DialogTitle>{selectedProcess.label}</DialogTitle>
              <DialogContent>
                {/* Detailed process information */}
              </DialogContent>
            </Dialog>
          )}
        </Box>
      )
    }

    export default ProcessFlowVisualization
