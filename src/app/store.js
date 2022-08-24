import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from './reducers/reducer'
// import icecreamReducer from '../features/icecream/icecreamSlice'
// import userReducer from '../features/user/userSlice'

const store = configureStore({
  reducer: {
    cake: cakeReducer
  }
})

export default store