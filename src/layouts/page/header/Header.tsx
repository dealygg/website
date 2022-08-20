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
import { DonationModal, MonthlyGamesModal, SelectPlatformModal } from 'features'
import {
  setIsSelectPlatformModalOpened,
  setIsDonationModalOpened,
  setIsMonthlyGamesModalOpened
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
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          maxWidth: 50
        }}
      >
        <Image
          src={logo}
          height={30}
          duration={400}
          easing="ease-in-out"
          style={{ objectFit: 'contain' }}
        />
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
      </Stack>
      <SelectPlatformModal />
      <DonationModal />
      <MonthlyGamesModal />
    </Grid>
  )
}

export default Header
