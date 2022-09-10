import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: {},
  },
  reducers: {
    initFavorite: (state) => {
      const localData = JSON.parse(localStorage.getItem('tmdb_favorites'))
      state.list = localData ? localData : {};
    },
    addFavorite: (state, action) => {
      const list = {...state.list};
      const media = action.payload; //  For readability

      // Assign to new variables so localStorage can use it
      // const updatedList = list[media.id] ? 
      //   arr.filter(el => el.id !== media.id) :
      //   [...state.list, media]

      if (list[media.id]) {
        delete list[media.id]
      } else {
        list[media.id] = media
      }

      localStorage.setItem('tmdb_favorites', JSON.stringify(list))

      // Update State
      state.list = list;
    },
  },
})

export const { addFavorite, initFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer