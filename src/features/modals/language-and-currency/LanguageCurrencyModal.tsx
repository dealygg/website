import React, { useState } from 'react'
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton as MuiIconButton,
  styled,
  useTheme
} from '@mui/material'
import { MdClose } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from 'hooks/store'
import { setIsLanguageCurrencyModalOpened } from 'store/slices/modalSlice'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import Cookie from 'js-cookie'
import { COOKIES, LANGUAGES } from 'consts'
import Image from 'mui-image'
import baFlag from 'assets/images/flags/ba.svg'
import enFlag from 'assets/images/flags/gb.svg'

const languages = [
  {
    id: 1,
    language: LANGUAGES.EN,
    flag: enFlag
  },
  {
    id: 2,
    language: LANGUAGES.BA,
    flag: baFlag
  }
]

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: 'rgba(238,239,239,0.1)',
  '&:hover': {
    backgroundColor: 'rgba(238,239,239,0.4)'
  }
}))

export const LanguageCurrencyModal = () => {
  const [language, setLanguage] = useState(
    Cookie.get(COOKIES.LANGUAGE) ?? LANGUAGES.EN
  )
  const { isLanguageCurrencyModalOpened } = useAppSelector(
    (state) => state.modal
  )
  const { t } = useTranslation('common')
  const theme = useTheme()

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
        {t('modals.choose-language')}
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
          pb: 0,
          mt: 2
        }}
      >
        <Grid container spacing={2}>
          {languages.map((lang) => {
            return (
              <Grid item xs={2}>
                <Box
                  sx={{
                    border: `${
                      lang.language === language ? '2px' : '1px'
                    } solid ${
                      lang.language === language
                        ? theme.palette.primary.main
                        : theme.palette.text.primary
                    }`,
                    borderRadius: '50%',
                    padding: '4px',
                    cursor: 'pointer',
                    '&:hover': {
                      border: `2px solid ${theme.palette.primary.main}`
                    },
                    transition: 'all 0.4s ease-in-out'
                  }}
                  onClick={() => {
                    // @ts-ignore
                    i18next.changeLanguage(lang.language)
                    // @ts-ignore
                    setLanguage(lang.language)
                    // @ts-ignore
                    Cookie.set(COOKIES.LANGUAGE, lang.language)
                  }}
                >
                  <Image
                    src={lang.flag}
                    style={{
                      transition: 'filter 0.4s ease-in-out',
                      borderRadius: '50%'
                    }}
                  />
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  )
}
