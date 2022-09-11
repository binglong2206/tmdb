import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: {}, // Mainly for adding/removing css classes via key indexing
    list: [],
  },
  reducers: {
    initFavorite: (state) => {
      const localList = JSON.parse(localStorage.getItem('tmdb_favorites'))
      const localIds = JSON.parse(localStorage.getItem('tmdb_favoritesIds'))
      state.list = localList ? localList : []; // Incase user clear localstore
      state.ids = localIds ? localIds : {};
    },
    addFavorite: (state, action) => {
      const media = action.payload; //  For readability

      // Assign to new variables so localStorage can use it
      const updatedList = state.list.map((el) => el.id).indexOf(media.id) >= 0 ? 
      state.list.filter(el => el.id !== media.id) :
      [...state.list, media]

      // Will refactor, too many loops and abit confusing
      const updatedIds = {}
      for (let el of updatedList) {
        updatedIds[el.id] = 1;
      }

      localStorage.setItem('tmdb_favorites', JSON.stringify(updatedList));
      localStorage.setItem('tmdb_favoritesIds', JSON.stringify(updatedIds));

      state.ids = updatedIds
      state.list = updatedList
      
    },
  },
})

export const { addFavorite, initFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
