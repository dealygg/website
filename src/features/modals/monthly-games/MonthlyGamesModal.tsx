import React from 'react'
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton as MuiIconButton,
  Grid,
  styled,
  Typography
} from '@mui/material'
import Image from 'mui-image'
import { MdClose } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from 'hooks/store'
import { setIsMonthlyGamesModalOpened } from 'store/slices/modalSlice'
import rdr2 from 'assets/images/monthly-games/rdr2.jpeg'
import valheim from 'assets/images/monthly-games/valheim.jpeg'
import dayz from 'assets/images/monthly-games/days.jpeg'
import { useTranslation } from 'react-i18next'

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: 'rgba(238,239,239,0.1)',
  '&:hover': {
    backgroundColor: 'rgba(238,239,239,0.4)'
  }
}))

export const MonthlyGamesModal = () => {
  const { isMonthlyGamesModalOpened } = useAppSelector((state) => state.modal)
  const { t } = useTranslation('common')

  const dispatch = useAppDispatch()

  return (
    <Dialog
      open={isMonthlyGamesModalOpened}
      onClose={() => dispatch(setIsMonthlyGamesModalOpened(false))}
      sx={{
        '& > div > .MuiPaper-root': {
          padding: 2
        }
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 0
        }}
      >
        {t('modals.monthly-games')}
        <IconButton
          onClick={() => dispatch(setIsMonthlyGamesModalOpened(false))}
        >
          <MdClose size={14} />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pb: 0 }}>
        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Grid
          sx={{
            minWidth: {
              xs: 300,
              sm: 350
            },
            my: 4,
            padding: 2
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box>
                <Image src={rdr2} />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Image src={valheim} />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Image src={dayz} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
