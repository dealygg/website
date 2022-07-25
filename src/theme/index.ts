import { createTheme as createMuiTheme } from '@mui/material'
import { components, shadows, typography } from './theme-override'

export const createTheme = () => {
  const theme = {
    palette: {
      primary: {
        main: 'rgb(161,211,223)',
        light: 'rgb(179, 219, 229)',
        dark: 'rgb(112, 147, 156)',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      text: {
        primary: 'rgb(238,239,239)',
        secondary: 'rgba(238,239,239,0.8)'
      },
      background: {
        default: '#0b3438',
        paper: '#05151d'
      }
    },
    components,
    typography,
    shadows
  }

  return createMuiTheme(theme)
}
