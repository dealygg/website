import React from 'react'
import { useRoutes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { routes } from 'routes'
import { createTheme } from 'theme'

const App = () => {
  const content = useRoutes(routes)

  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      {content}
    </ThemeProvider>
  )
}

export default App
