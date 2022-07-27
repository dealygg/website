import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dailyDealsPhotoHelper: true
}

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setDailyDealsPhotoHelper: (state, action) => {
      state.dailyDealsPhotoHelper = action.payload
    }
  }
})

export const { setDailyDealsPhotoHelper } = photoSlice.actions
