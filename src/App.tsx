import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from 'theme'

const App = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      Theme
    </ThemeProvider>
  )
}

export default App
