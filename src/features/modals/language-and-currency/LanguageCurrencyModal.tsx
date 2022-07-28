import React, { useState } from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton as MuiIconButton,
  FormControl,
  Grid,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  styled
} from '@mui/material'
import { MdClose } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from 'hooks/store'
import { setIsLanguageCurrencyModalOpened } from 'store/slices/modalSlice'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: 'rgba(238,239,239,0.1)',
  '&:hover': {
    backgroundColor: 'rgba(238,239,239,0.4)'
  }
}))

const Select = styled(MuiSelect)(({ theme }) => ({
  '& > fieldset': {
    borderColor: theme.palette.text.primary
  },
  '& > svg': {
    color: theme.palette.text.primary
  }
}))

export const LanguageCurrencyModal = () => {
  const [language, setLanguage] = useState('en')
  const { isLanguageCurrencyModalOpened } = useAppSelector(
    (state) => state.modal
  )
  const { t } = useTranslation('common')

  const dispatch = useAppDispatch()

  return (
    <Dialog
      open={isLanguageCurrencyModalOpened}
      onClose={() => dispatch(setIsLanguageCurrencyModalOpened(false))}
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
        Set language
        <IconButton
          onClick={() => dispatch(setIsLanguageCurrencyModalOpened(false))}
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
          p: 2,
          pb: 0
        }}
      >
        <Grid container spacing={2} sx={{ my: 2 }}>
          <Grid item xs={12}>
            <FormControl sx={{ width: '100%' }} size="small">
              <InputLabel id="choose-language">
                {t('modals.choose-language')}
              </InputLabel>
              <Select
                labelId="choose-language"
                label={t('modals.choose-language')}
                onChange={(event) => {
                  // @ts-ignore
                  i18next.changeLanguage(event.target.value)
                  // @ts-ignore
                  setLanguage(event.target.value)
                }}
                value={language}
              >
                <MenuItem value={'bs'}>{t('languages.bs')}</MenuItem>
                <MenuItem value={'en'}>{t('languages.en')}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  )
}
