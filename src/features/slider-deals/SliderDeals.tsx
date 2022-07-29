import React from 'react'
import { Box, Button, Card } from '@mui/material'
import Image from 'mui-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'

export const SliderDeals = () => {
  return (
    <Card
      sx={{
        position: 'relative'
      }}
    >
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide
          style={{
            height: 'unset'
          }}
        >
          <Image
            src="https://geek.hr/wp-content/uploads/2021/09/grand-theft-auto-5.jpg"
            fit="cover"
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Button variant="contained">Just 12$ on Kinguin.com</Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://assets2.rockpapershotgun.com/Stray-cat-art.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/Stray-cat-art.jpg" />
          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Button variant="contained">Just 12$ on Kinguin.com</Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://s1.gaming-cdn.com/images/products/612/orig/battlefield-5-pc-game-origin-cover.jpg?v=1655505217" />
          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Button variant="contained">Just 12$ on Kinguin.com</Button>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Card>
  )
}
