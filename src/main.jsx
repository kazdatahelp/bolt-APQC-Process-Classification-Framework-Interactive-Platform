import React from 'react'
    import ReactDOM from 'react-dom/client'
    import { BrowserRouter } from 'react-router-dom'
    import { ThemeProvider } from '@mui/material/styles'
    import CssBaseline from '@mui/material/CssBaseline'
    import { Provider } from 'react-redux'
    import { store } from './store/store'
    import App from './App'
    import { theme } from './theme/customTheme'
    import './index.css'

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    )
