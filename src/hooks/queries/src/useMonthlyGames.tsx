import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from 'consts'
import { addJsonExtensionToApi, devOrProd } from 'utils'

export const getMonthlyGames = async () => {
  const res = await fetch(
    `${devOrProd()}${QUERY_KEYS.MONTHLY_GAMES}${addJsonExtensionToApi()}`
  )
  return await res.json()
}

export const useMonthlyGames = () =>
  useQuery([QUERY_KEYS.MONTHLY_GAMES], getMonthlyGames)
