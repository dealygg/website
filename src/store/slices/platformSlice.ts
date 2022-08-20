import { createSlice } from '@reduxjs/toolkit'
import { PLATFORMS } from 'consts'

const initialState = {
  selectedPlatform: PLATFORMS.STEAM,
  isAdForConsoleOpened: false
}

export const platformSlice = createSlice({
  name: 'platform',
  initialState,
  reducers: {
    setSelectedPlatform: (state, action) => {
      state.selectedPlatform = action.payload
    },
    setIsAdForConsoleOpened: (state, action) => {
      state.isAdForConsoleOpened = action.payload
    }
  }
})

export const { setSelectedPlatform, setIsAdForConsoleOpened } =
  platformSlice.actions
