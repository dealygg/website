import React from 'react'
import Item from './Item'
import { Box, Card, Grid, Typography } from '@mui/material'
import Image from 'mui-image'
import { useDailyDeals } from 'hooks/queries'
import { useAppSelector } from 'hooks/store'
import { PLATFORMS } from 'consts'
import { useTranslation } from 'react-i18next'

export const DailyDeals = () => {
  const { data: dailyDeals, isSuccess } = useDailyDeals()
  const { selectedPlatform } = useAppSelector((state) => state.platform)
  const { dailyDealsPhotoHelper } = useAppSelector((state) => state.photo)
  const { t } = useTranslation('common')

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
          {t('daily-deals.updates-daily')}
        </Typography>
      </Box>
    </Grid>
  )
}
