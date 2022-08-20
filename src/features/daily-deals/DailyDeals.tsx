import Item from './Item'
import { Alert, Box, Card, Grid, Snackbar, Typography } from '@mui/material'
import Image from 'mui-image'
import { useDailyDeals } from 'hooks/queries'
import { useAppDispatch, useAppSelector } from 'hooks/store'
import { setIsAdForConsoleOpened } from 'store/slices/platformSlice'
import { PLATFORMS } from 'consts'

export const DailyDeals = () => {
  const { data: dailyDeals, isSuccess } = useDailyDeals()
  const { selectedPlatform, isAdForConsoleOpened } = useAppSelector(
    (state) => state.platform
  )
  const { dailyDealsPhotoHelper } = useAppSelector((state) => state.photo)
  const dispatch = useAppDispatch()

  const dailyDealsToMap = (platform: PLATFORMS) => {
    if (platform === PLATFORMS.STEAM) return dailyDeals.steam_games
    if (platform === PLATFORMS.PLAYSTATION) return dailyDeals.playstation_games
    if (platform === PLATFORMS.XBOX) return dailyDeals.xbox_games
  }

  const backgroundToDisplay = (platform: PLATFORMS) => {
    if (platform === PLATFORMS.STEAM) return dailyDeals.backgrounds.steam
    if (platform === PLATFORMS.PLAYSTATION)
      return dailyDeals.backgrounds.playstation
    if (platform === PLATFORMS.XBOX) return dailyDeals.backgrounds.xbox
  }

  return (
    <Grid item xs={12}>
      <Card>
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              minHeight: {
                xs: 200
              }
            }}
          >
            {dailyDealsPhotoHelper && isSuccess && (
              <Image
                src={isSuccess && backgroundToDisplay(selectedPlatform)}
                duration={1000}
              />
            )}
          </Grid>
          <Grid item xs={12} md={8}>
            {isSuccess &&
              dailyDealsToMap(selectedPlatform).map((item: any) => {
                return (
                  <Item
                    key={item.id}
                    name={item.name}
                    real_price={item.real_price}
                    current_price={item.current_price}
                    category={item.category}
                    icon={item.icon}
                    url={item.url}
                  />
                )
              })}
          </Grid>
        </Grid>
      </Card>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          my: 1
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: 10
          }}
        >
          Deals are updated on daily basis.
        </Typography>
      </Box>
      <Snackbar
        open={isAdForConsoleOpened}
        autoHideDuration={4000}
        onClose={() => dispatch(setIsAdForConsoleOpened(false))}
        onClick={() =>
          (window.location.href =
            selectedPlatform === PLATFORMS.PLAYSTATION
              ? 'https://www.kinguin.net/listing?active=1&hideUnavailable=0&phrase=playstation%20network%20card&page=0&size=50&sort=bestseller.total,DESC&r=dealygg'
              : 'https://www.kinguin.net/listing?active=1&hideUnavailable=0&phrase=xbox%20gift&page=0&size=50&sort=bestseller.total,DESCr=dealygg')
        }
        sx={{
          cursor: 'pointer'
        }}
      >
        <Alert severity="info" sx={{ width: '100%' }}>
          {selectedPlatform === PLATFORMS.PLAYSTATION &&
            'Buy cheapest PS Network Cards on Kinguin.net'}
          {selectedPlatform === PLATFORMS.XBOX &&
            'Buy cheapest XBOX Gift Cards on Kinguin.net'}
        </Alert>
      </Snackbar>
    </Grid>
  )
}
