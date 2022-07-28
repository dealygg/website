import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton as MuiIconButton,
  styled,
  Typography
} from '@mui/material'
import { MdClose } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from 'hooks/store'
import { setIsDonationModalOpened } from 'store/slices/modalSlice'
import { KO_FI_URL } from 'consts'
import { useTranslation } from 'react-i18next'

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: 'rgba(238,239,239,0.1)',
  '&:hover': {
    backgroundColor: 'rgba(238,239,239,0.4)'
  }
}))

export const DonationModal = () => {
  const { isDonationModalOpened } = useAppSelector((state) => state.modal)
  const { t } = useTranslation('common')

  const dispatch = useAppDispatch()

  return (
    <Dialog
      open={isDonationModalOpened}
      onClose={() => dispatch(setIsDonationModalOpened(false))}
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
        {t('modals.support-us')}
        <IconButton onClick={() => dispatch(setIsDonationModalOpened(false))}>
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
          padding: 2,
          pb: 0
        }}
      >
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          padding: 0
        }}
      >
        <Button href={KO_FI_URL}>{t('modals.support-us-on-kofi')}</Button>
      </DialogActions>
    </Dialog>
  )
}
