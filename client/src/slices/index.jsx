import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './profileSlice'
import authReducer from './authSlice'
import userListReducer from './userListingSlice'
export const store = configureStore({
  reducer: {
    profile:profileReducer,
    auth:authReducer,
    userLists:userListReducer
  },
})