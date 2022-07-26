import React, { FC } from 'react'
import { Button, Chip, Grid, Typography } from '@mui/material'
import Image from 'mui-image'
import { TbDiscount2 } from 'react-icons/tb'

const Item: FC<any> = ({ name, real_price, current_price, category, icon }) => {
  return (
    <Grid
      container
      sx={{
        p: 2,
        transition: 'background-color 0.4s ease-in-out',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.1)'
        }
      }}
    >
      <Grid item xs={1}>
        <Image src={icon} height={40} width={40} />
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          pl: 1
        }}
      >
        <Typography noWrap variant="subtitle2" component="h2">
          {name}
        </Typography>
        <Typography noWrap variant="subtitle2" sx={{ fontSize: '0.7rem' }}>
          {category}
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography variant="subtitle2">{current_price}</Typography>
        <Typography
          color="primary"
          variant="subtitle2"
          sx={{
            textDecoration: 'line-through'
          }}
        >
          {real_price}
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Chip
          color="primary"
          icon={<TbDiscount2 />}
          label={`${Math.round(100 - (100 * current_price) / real_price)}%`}
        />
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button variant="contained">View more</Button>
      </Grid>
    </Grid>
  )
}

export default Item
