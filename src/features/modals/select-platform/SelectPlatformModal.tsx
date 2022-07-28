import React, { useState } from 'react'
import {
  Badge as MuiBadge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton as MuiIconButton,
  styled
} from '@mui/material'
import { MdClose } from 'react-icons/md'
import { FaPlaystation, FaSteam, FaXbox } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from 'hooks/store'
import { PLATFORMS } from 'consts'
import { setSelectedPlatform } from 'store/slices/platformSlice'
import { setIsSelectPlatformModalOpened } from 'store/slices/modalSlice'
import { setDailyDealsPhotoHelper } from 'store/slices/photoSlice'
import { useTranslation } from 'react-i18next'

const Badge = styled(MuiBadge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}))

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: 'rgba(238,239,239,0.1)',
  '&:hover': {
    backgroundColor: 'rgba(238,239,239,0.4)'
  }
}))

export const SelectPlatformModal = () => {
  const { selectedPlatform } = useAppSelector((state) => state.platform)
  const isSelectPlaftormModalOpened = useAppSelector(
    (state) => state.modal.isSelectPlatformModalOpened
  )
  const [currentSelectedPlatform, setCurrentSelectedPlatform] =
    useState(selectedPlatform)
  const { t } = useTranslation('common')

  const dispatch = useAppDispatch()

  return (
    <Dialog
      open={isSelectPlaftormModalOpened}
      onClose={() => dispatch(setIsSelectPlatformModalOpened(false))}
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
        {t('modals.select-platform')}
        <IconButton
          onClick={() => dispatch(setIsSelectPlatformModalOpened(false))}
        >
          <MdClose size={14} />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          minWidth: {
            xs: 300,
            sm: 350
          },
          my: 4,
          padding: 2
        }}
      >
        <Grid container>
          <Grid item xs={4} display="flex" justifyContent="center">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              invisible={currentSelectedPlatform !== PLATFORMS.STEAM && true}
            >
              <IconButton
                onClick={() => setCurrentSelectedPlatform(PLATFORMS.STEAM)}
              >
                <FaSteam size={34} />
              </IconButton>
            </Badge>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="center">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              invisible={
                currentSelectedPlatform !== PLATFORMS.PLAYSTATION && true
              }
            >
              <IconButton
                onClick={() =>
                  setCurrentSelectedPlatform(PLATFORMS.PLAYSTATION)
                }
              >
                <FaPlaystation size={34} />
              </IconButton>
            </Badge>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="center">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
              invisible={currentSelectedPlatform !== PLATFORMS.XBOX && true}
            >
              <IconButton
                onClick={() => setCurrentSelectedPlatform(PLATFORMS.XBOX)}
              >
                <FaXbox size={34} />
              </IconButton>
            </Badge>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions
        sx={{
          padding: 0
        }}
      >
        <Button onClick={() => dispatch(setIsSelectPlatformModalOpened(false))}>
          {t('common.cancel')}
        </Button>
        <Button
          onClick={() => {
            dispatch(setSelectedPlatform(currentSelectedPlatform))
            dispatch(setIsSelectPlatformModalOpened(false))
            dispatch(setDailyDealsPhotoHelper(false))
            setTimeout(() => {
              dispatch(setDailyDealsPhotoHelper(true))
            }, 100)
          }}
        >
          {t('common.submit')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
