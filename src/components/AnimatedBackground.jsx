import React from 'react'
    import { motion } from 'framer-motion'
    import { Box } from '@mui/material'

    function AnimatedBackground() {
      const backgroundVariants = {
        initial: { opacity: 0 },
        animate: { 
          opacity: 1,
          transition: {
            duration: 1,
            ease: 'easeInOut'
          }
        }
      }

      return (
        <motion.div
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #F4F6F7 0%, #E8F4F8 100%)',
            zIndex: -1,
            opacity: 0.7
          }}
        />
      )
    }

    export default AnimatedBackground
