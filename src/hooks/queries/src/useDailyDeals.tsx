import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from 'consts'
import { addJsonExtensionToApi, devOrProd } from 'utils'

export const getDailyDeals = async () => {
  const res = await fetch(
    `${devOrProd()}${QUERY_KEYS.DAILY_DEALS}${addJsonExtensionToApi()}`
  )
  return await res.json()
}

export const useDailyDeals = () =>
  useQuery([QUERY_KEYS.DAILY_DEALS], getDailyDeals)
