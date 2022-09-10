import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: [7,7],
  },
  reducers: {
    addFavorite: (state, action) => {
      const arr = [...state.list];
      const media = action.payload; //  For readability

      state.list = arr.map((el) => el.id).indexOf(media.id) > 0 ? 
        arr.filter(el => el.id !== media.id) :
        [...state.list, media]
    },
  },
})

export const { addFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer