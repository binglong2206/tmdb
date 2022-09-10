import { configureStore } from '@reduxjs/toolkit'
import testReducer from './test'

const store = configureStore({
  reducer: {
    test: testReducer
  },
})

export default store;