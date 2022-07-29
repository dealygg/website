import React from 'react'
import { DailyDeals, SliderDeals, Subscribe } from 'features'
import { Grid } from '@mui/material'

export const Homepage = () => {
  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <DailyDeals />
        <Grid item xs={12} sm={8}>
          <SliderDeals />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Subscribe />
        </Grid>
      </Grid>
    </Grid>
  )
}
