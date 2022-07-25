import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, IconButton as MuiIconButton, Stack } from '@mui/material'
import { styled } from '@mui/material'
import Image from 'mui-image'
import logo from 'assets/images/logo/logo.png'
import { FaPlaystation } from 'react-icons/fa'
import { BiDonateHeart } from 'react-icons/bi'
import { AiFillGift } from 'react-icons/ai'
import { IoLanguage } from 'react-icons/io5'

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.background.paper
  }
}))

const Header = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: 'flex',
        py: 2
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
        <IconButton>
          <FaPlaystation />
        </IconButton>
        <IconButton>
          <BiDonateHeart />
        </IconButton>
        <IconButton>
          <AiFillGift />
        </IconButton>
        <IconButton>
          <IoLanguage />
        </IconButton>
      </Stack>
    </Grid>
  )
}

export default Header
