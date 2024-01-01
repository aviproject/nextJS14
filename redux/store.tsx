import { combineReducers, configureStore } from '@reduxjs/toolkit'
import HomeReducer from './home/homeSlice'


const rootReducer = combineReducers({
  counter: HomeReducer,
  //add all your reducers here
},); 

export const store = configureStore({
  reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch