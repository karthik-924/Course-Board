import { configureStore } from '@reduxjs/toolkit'
import courseReducer from './features/courseSlice'

const store = configureStore({
  reducer: {
    course: courseReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>