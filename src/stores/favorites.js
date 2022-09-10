import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: [7,7],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.list = state.list.indexOf(action.payload) >= 0 ? 
        state.list.filter(el => {return el !== action.payload}) :
        [...state.list, action.payload]
    },
  },
})

export const { addFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer