import { configureStore } from '@reduxjs/toolkit'
import itemReducer from '../reducers'

const store = configureStore({
  reducer: itemReducer
})

export default store