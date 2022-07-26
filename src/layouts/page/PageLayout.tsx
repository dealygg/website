import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import { Container, Grid } from '@mui/material'

export const PageLayout = () => {
  return (
    <Container maxWidth="md">
      <Grid container>
        <Header />
        <Outlet />
      </Grid>
    </Container>
  )
}
