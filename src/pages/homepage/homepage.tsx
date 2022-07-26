import React from 'react'
import { DailyDeals } from 'features'
import { Grid } from '@mui/material'

export const Homepage = () => {
  return (
    <Grid item xs={12}>
      <Grid container>
        <DailyDeals />
      </Grid>
    </Grid>
  )
}
