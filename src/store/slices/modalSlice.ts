import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSelectPlatformModalOpened: false,
  isDonationModalOpened: false,
  isMonthlyGamesModalOpened: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsSelectPlatformModalOpened: (state, action) => {
      state.isSelectPlatformModalOpened = action.payload
    },
    setIsDonationModalOpened: (state, action) => {
      state.isDonationModalOpened = action.payload
    },
    setIsMonthlyGamesModalOpened: (state, action) => {
      state.isMonthlyGamesModalOpened = action.payload
    }
  }
})

export const {
  setIsSelectPlatformModalOpened,
  setIsDonationModalOpened,
  setIsMonthlyGamesModalOpened
} = modalSlice.actions
