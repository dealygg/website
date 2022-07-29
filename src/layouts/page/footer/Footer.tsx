import React from 'react'
import {
  Grid,
  IconButton as MuiIconButton,
  Link,
  Stack,
  styled,
  Typography
} from '@mui/material'
import { SiInstagram, SiFacebook, SiTwitter } from 'react-icons/si'

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.background.paper
  }
}))

const Footer = () => {
  return (
    <Grid item xs={12} sx={{ mt: 2 }}>
      <Grid container>
        {/*        <Grid item xs={12} display="flex" justifyContent="center">
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            sx={{
              '& > p': {
                fontSize: {
                  xs: 9,
                  sm: 'default'
                }
              }
            }}
          >
            <Typography>About</Typography>
            <Typography>FAQ</Typography>
            <Typography>Contact</Typography>
            <Typography>Terms of service</Typography>
            <Typography>Privacy policy</Typography>
          </Stack>
        </Grid>*/}
        <Grid
          item
          xs={12}
          sx={{ my: 2 }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            sx={{
              fontSize: {
                xs: 9,
                sm: 'default'
              }
            }}
          >
            Copyright 2022 - Dealy.gg
          </Typography>
          <Stack
            direction="row"
            sx={{
              '& > a > button > svg': {
                fontSize: 14
              }
            }}
          >
            <Link href="https://facebook.com/dealygg">
              <IconButton>
                <SiFacebook />
              </IconButton>
            </Link>
            <Link href="https://twitter.com/dealygg">
              <IconButton>
                <SiTwitter />
              </IconButton>
            </Link>
            <Link href="https://instagram.com/dealygg">
              <IconButton>
                <SiInstagram />
              </IconButton>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer
