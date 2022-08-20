import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Drawer, Grid, Typography } from '@mui/material'
import Cookies from 'js-cookie'
import { COOKIES } from 'consts'

export const CookieConsent = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(
    !Cookies.get(COOKIES.COOKIE_CONSENT)
  )
  const navigate = useNavigate()

  return (
    <Drawer open={isDrawerOpened} anchor="bottom" variant="temporary">
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            p: 2
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h6">We value your privacy</Typography>
            <Typography variant="subtitle2">
              We use cookies to enhance your browsing experience, serve
              personalized ads or content, and analyze our traffic. By clicking
              "Accept All", you consent to our use of cookies.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            columnGap={2}
          >
            <Button
              size="small"
              onClick={() => {
                navigate('/cookies-rejected')
                setIsDrawerOpened(false)
              }}
            >
              Reject All
            </Button>
            <Button
              size="small"
              onClick={() => {
                Cookies.set(COOKIES.COOKIE_CONSENT, 'accepted')
                setIsDrawerOpened(false)
              }}
            >
              Accept All
            </Button>
            <Button
              size="small"
              onClick={() => {
                navigate('/privacy-policy')
                setIsDrawerOpened(false)
              }}
            >
              Privacy policy
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Drawer>
  )
}
