import { useQuery } from '@tanstack/react-query'
import { API_URL, QUERY_KEYS } from 'consts'

export const getDailyDeals = async () => {
  const res = await fetch(`${API_URL}${QUERY_KEYS.DAILY_DEALS}`)
  const json = await res.json()
  return json
}

export const useDailyDeals = () =>
  useQuery([QUERY_KEYS.DAILY_DEALS], getDailyDeals)
