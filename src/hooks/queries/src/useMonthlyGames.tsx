import { useQuery } from '@tanstack/react-query'
import { API_URL, QUERY_KEYS } from 'consts'

export const getMonthlyGames = async () => {
  const res = await fetch(`${API_URL}${QUERY_KEYS.MONTHLY_GAMES}`)
  const json = await res.json()
  return json
}

export const useMonthlyGames = () =>
  useQuery([QUERY_KEYS.MONTHLY_GAMES], getMonthlyGames)
