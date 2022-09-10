import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: 'yo',
  },
  reducers: {
    testAction: (state, action) => {
      state.list = [...state.list, action.payload]
    },
  },
})

export const { testAction } = favoritesSlice.actions

export default favoritesSlice.reducer