import React from 'react'
import Item from './Item'
import { Card, Grid } from '@mui/material'
import Image from 'mui-image'
import { useDailyDeals } from 'hooks/queries'
import { useAppSelector } from 'hooks/store'
import { PLATFORMS } from 'consts'

export const DailyDeals = () => {
  const { data: dailyDeals, isSuccess } = useDailyDeals()
  const { selectedPlatform } = useAppSelector((state) => state.platform)

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
          <Grid item sm={4}>
            <Image src={isSuccess && backgroundToDisplay(selectedPlatform)} />
          </Grid>
          <Grid item sm={8}>
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
    </Grid>
  )
}
