import { FAKE_API_URL, REAL_API_URL } from 'consts'

export const devOrProd = () =>
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? FAKE_API_URL
    : REAL_API_URL

export const addJsonExtensionToApi = () =>
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? '' : '.json'
