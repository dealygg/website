import { Box, Button, Card } from '@mui/material'
import Image from 'mui-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import { useSliderDeals } from 'hooks/queries/src/useSliderDeals'

export const SliderDeals = () => {
  const { data: sliderDeals, isSuccess } = useSliderDeals()

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
        {isSuccess &&
          sliderDeals.map((slider: any) => {
            return (
              <SwiperSlide
                style={{
                  height: 'unset'
                }}
                key={slider.id}
              >
                <Image src={slider.picture} fit="cover" />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Button href={slider.url} variant="contained">
                    Just {slider.price}€ on {slider.shop_name}
                  </Button>
                </Box>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </Card>
  )
}
