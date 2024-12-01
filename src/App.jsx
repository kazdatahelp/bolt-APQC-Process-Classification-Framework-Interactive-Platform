import React, { Suspense } from 'react'
    import { Routes, Route } from 'react-router-dom'
    import { Box, CircularProgress } from '@mui/material'
    import Navigation from './components/Navigation'
    import Footer from './components/Footer'
    import AnimatedBackground from './components/AnimatedBackground'

    const HomePage = React.lazy(() => import('./pages/HomePage'))
    const ProcessFrameworkPage = React.lazy(() => import('./pages/ProcessFrameworkPage'))
    const TaxonomyPage = React.lazy(() => import('./pages/TaxonomyPage'))
    const TaxonomyGuidePage = React.lazy(() => import('./pages/TaxonomyGuidePage'))
    const EarlyStageGuidePage = React.lazy(() => import('./pages/EarlyStageGuidePage'))
    const DemoPage = React.lazy(() => import('./pages/DemoPage'))
    const RecommendationEnginePage = React.lazy(() => import('./pages/RecommendationEnginePage'))
    const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudiesPage'))
    const ResourceLibraryPage = React.lazy(() => import('./pages/ResourceLibraryPage'))

    function App() {
      return (
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh'
        }}>
          <AnimatedBackground />
          <Navigation />
          <Box sx={{ flex: 1, py: 4 }}>
            <Suspense fallback={
              <Box 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
                height="100vh"
              >
                <CircularProgress color="secondary" />
              </Box>
            }>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/process-framework" element={<ProcessFrameworkPage />} />
                <Route path="/taxonomy" element={<TaxonomyPage />} />
                <Route path="/taxonomy-guide" element={<TaxonomyGuidePage />} />
                <Route path="/early-stage-guide" element={<EarlyStageGuidePage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/recommendation-engine" element={<RecommendationEnginePage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/resources" element={<ResourceLibraryPage />} />
              </Routes>
            </Suspense>
          </Box>
          <Footer />
        </Box>
      )
    }

    export default App
