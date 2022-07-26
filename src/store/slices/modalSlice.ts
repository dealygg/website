import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSelectPlatformModalOpened: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsSelectPlatformModalOpened: (state, action) => {
      state.isSelectPlatformModalOpened = action.payload
    }
  }
})

export const { setIsSelectPlatformModalOpened } = modalSlice.actions
