import React from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Grid,
  IconButton as MuiIconButton,
  Stack,
  styled
} from '@mui/material'
import Image from 'mui-image'
import logo from 'assets/images/logo/logo.png'
import { FaSteam, FaPlaystation, FaXbox } from 'react-icons/fa'
import { BiDonateHeart } from 'react-icons/bi'
import { AiFillGift } from 'react-icons/ai'
import { IoLanguage } from 'react-icons/io5'
import {
  DonationModal,
  MonthlyGamesModal,
  SelectPlatformModal,
  LanguageCurrencyModal
} from 'features'
import {
  setIsSelectPlatformModalOpened,
  setIsDonationModalOpened,
  setIsMonthlyGamesModalOpened,
  setIsLanguageCurrencyModalOpened
} from 'store/slices/modalSlice'
import { useAppDispatch, useAppSelector } from 'hooks/store'
import { PLATFORMS } from 'consts'

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.background.paper
  }
}))

const Header = () => {
  const { selectedPlatform } = useAppSelector((state) => state.platform)
  const dispatch = useAppDispatch()

  return (
    <Grid
      item
      xs={12}
      sx={{
        display: 'flex',
        p: 2
      }}
    >
      <Box
        component={Link}
        to="/"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Image src={logo} height={30} duration={400} easing="ease-in-out" />
      </Box>
      <Box flexGrow={1} />
      <Stack direction="row" spacing={1}>
        <IconButton
          onClick={() => dispatch(setIsSelectPlatformModalOpened(true))}
        >
          {selectedPlatform === PLATFORMS.STEAM && <FaSteam />}
          {selectedPlatform === PLATFORMS.PLAYSTATION && <FaPlaystation />}
          {selectedPlatform === PLATFORMS.XBOX && <FaXbox />}
        </IconButton>
        <IconButton onClick={() => dispatch(setIsDonationModalOpened(true))}>
          <BiDonateHeart />
        </IconButton>
        <IconButton
          onClick={() => dispatch(setIsMonthlyGamesModalOpened(true))}
        >
          <AiFillGift />
        </IconButton>
        <IconButton
          onClick={() => dispatch(setIsLanguageCurrencyModalOpened(true))}
        >
          <IoLanguage />
        </IconButton>
      </Stack>
      <SelectPlatformModal />
      <DonationModal />
      <MonthlyGamesModal />
      <LanguageCurrencyModal />
    </Grid>
  )
}

export default Header
