import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import animalReducer from './animalSlice'
import apiSlice from './apiSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    animals: animalReducer,
    api: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(apiSlice.middleware)

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store