import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from 'consts'
import { addJsonExtensionToApi, devOrProd } from 'utils'

export const getSliderDeals = async () => {
  const res = await fetch(
    `${devOrProd()}${QUERY_KEYS.SLIDER_DEALS}${addJsonExtensionToApi()}`
  )
  return await res.json()
}

export const useSliderDeals = () =>
  useQuery([QUERY_KEYS.SLIDER_DEALS], getSliderDeals)
