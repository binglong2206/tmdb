import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favorites'
import test from './test'

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    test: test
  },
})

export default store;