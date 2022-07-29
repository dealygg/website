import { useQuery } from '@tanstack/react-query'
import { API_URL, QUERY_KEYS } from 'consts'

export const getSliderDeals = async () => {
  const res = await fetch(`${API_URL}${QUERY_KEYS.SLIDER_DEALS}`)
  const json = await res.json()
  return json
}

export const useSliderDeals = () =>
  useQuery([QUERY_KEYS.SLIDER_DEALS], getSliderDeals)
