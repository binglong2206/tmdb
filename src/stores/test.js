import { createSlice } from '@reduxjs/toolkit'

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    test: 987,
  },
  reducers: {
    testAction: (state, action) => {
      state.test = action.payload
    },
  },
})

export const { testAction } = testSlice.actions

export default testSlice.reducer