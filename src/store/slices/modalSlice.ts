import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSelectPlatformModalOpened: false,
  isDonationModalOpened: true
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
    }
  }
})

export const { setIsSelectPlatformModalOpened, setIsDonationModalOpened } =
  modalSlice.actions
