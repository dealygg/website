import React from 'react'
import { Box, Button, Card, Typography, useTheme } from '@mui/material'
import Image from 'mui-image'
import { useTranslation } from 'react-i18next'

export const Subscribe = () => {
  const { t } = useTranslation('common')
  const theme = useTheme()
  return (
    <Card
      sx={{
        minHeight: '100%',
        maxHeight: '100%',
        height: '200px',
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          background: theme.palette.background.paper,
          opacity: 0.9,
          zIndex: 10
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          left: 10,
          right: 10,
          bottom: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          zIndex: 100
        }}
      >
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          {t('common.newsletter')}
        </Typography>
        <Button href="https://facebook.com/dealygg" variant="contained">
          {t('common.subscribe')}
        </Button>
      </Box>
      <Image src="https://www.mordeo.org/files/uploads/2018/06/No-Mans-Sky-Video-Game-HD-Mobile-Wallpaper-950x1689.jpg" />
    </Card>
  )
}
