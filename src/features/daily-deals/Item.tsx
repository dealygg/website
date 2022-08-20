import { FC } from 'react'
import {
  Button,
  Chip as MuiChip,
  Grid,
  styled,
  Typography
} from '@mui/material'
import Image from 'mui-image'
import { TbDiscount2 } from 'react-icons/tb'
import { useAppSelector } from 'hooks/store'

const Chip = styled(MuiChip)(({ theme }) => ({
  background: theme.palette.secondary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark
  }
}))

const Item: FC<any> = ({
  name,
  real_price,
  current_price,
  category,
  icon,
  url
}) => {
  const { dailyDealsPhotoHelper } = useAppSelector((state) => state.photo)

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
      <Grid item xs={2} sm={1}>
        {dailyDealsPhotoHelper && (
          <Image src={icon} height={40} width={40} duration={1000} />
        )}
      </Grid>
      <Grid
        item
        xs={3}
        md={4}
        sx={{
          pl: 1
        }}
      >
        <Typography
          noWrap
          variant="subtitle2"
          component="h2"
          sx={{
            fontSize: {
              xs: 10,
              sm: 'default'
            }
          }}
        >
          {name}
        </Typography>
        <Typography
          noWrap
          variant="subtitle2"
          sx={{
            fontSize: {
              xs: 8,
              sm: 10
            }
          }}
        >
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
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: {
              xs: 9,
              sm: 'default'
            }
          }}
        >
          {current_price}
        </Typography>
        <Typography
          color="primary"
          variant="subtitle2"
          sx={{
            textDecoration: 'line-through',
            fontSize: {
              xs: 9,
              sm: 'default'
            }
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
          sx={{
            fontSize: {
              xs: 9,
              sm: 'default'
            }
          }}
        />
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        <Button
          variant="contained"
          href={url}
          sx={{
            fontSize: {
              xs: 9,
              sm: 12
            },
            height: {
              xs: 30
            }
          }}
        >
          View more
        </Button>
      </Grid>
    </Grid>
  )
}

export default Item
