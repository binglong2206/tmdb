import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: [],
  },
  reducers: {
    initFavorite: (state) => {
      const localData = JSON.parse(localStorage.getItem('tmdb_favorites'))
      state.list = localData ? localData : [];
    },
    addFavorite: (state, action) => {
      const arr = [...state.list];
      const media = action.payload; //  For readability

      // Assign to new variables so localStorage can use it
      const updatedList = arr.map((el) => el.id).indexOf(media.id) >= 0 ? 
        arr.filter(el => el.id !== media.id) :
        [...state.list, media]

        localStorage.setItem('tmdb_favorites', JSON.stringify(updatedList))

        state.list = updatedList;
    },
  },
})

export const { addFavorite, initFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer