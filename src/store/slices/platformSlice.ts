import { createSlice } from '@reduxjs/toolkit'
import { PLATFORMS } from 'consts'

const initialState = {
  selectedPlatform: PLATFORMS.STEAM
}

export const platformSlice = createSlice({
  name: 'platform',
  initialState,
  reducers: {
    setSelectedPlatform: (state, action) => {
      state.selectedPlatform = action.payload
    }
  }
})

export const { setSelectedPlatform } = platformSlice.actions
