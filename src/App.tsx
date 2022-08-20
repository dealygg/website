import { useRoutes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { routes } from 'routes'
import { createTheme } from 'theme'
import { CookieConsent } from './features'

const App = () => {
  const content = useRoutes(routes)

  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      {content}
      <CookieConsent />
    </ThemeProvider>
  )
}

export default App
