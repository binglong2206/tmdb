import { createSlice } from '@reduxjs/toolkit'

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    favoriteIds: {}, // Mainly for adding/removing css classes via key indexing
    favoriteList: [],
  },
  reducers: {
    initFavorite: (state) => {
      const localList = JSON.parse(localStorage.getItem('tmdb_favorites'))
      const localIds = JSON.parse(localStorage.getItem('tmdb_favoritesIds'))
      state.favoriteList = localList ? localList : []; // Incase user clear localstore
      state.favoriteIds = localIds ? localIds : {};
    },
    addFavorite: (state, action) => {
      const media = action.payload; //  For readability

      // Assign to new variables so localStorage can use it
      const updatedList = state.favoriteList.map((el) => el.id).indexOf(media.id) >= 0 ? 
      state.favoriteList.filter(el => el.id !== media.id) :
      [...state.favoriteList, media]

      // Will refactor, too many loops and abit confusing
      const updatedIds = {}
      for (let el of updatedList) {
        updatedIds[el.id] = 1;
      }

      localStorage.setItem('tmdb_favorites', JSON.stringify(updatedList));
      localStorage.setItem('tmdb_favoritesIds', JSON.stringify(updatedIds));

      state.favoriteIds = updatedIds
      state.favoriteList = updatedList
      
    },
  },
})

export const { addFavorite, initFavorite } = globalSlice.actions

export default globalSlice.reducer
