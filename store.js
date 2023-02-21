import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./reduxSlices/basketSlice"
import restaurantReducer from "./reduxSlices/restaurantSlice"

export default configureStore({
  reducer: {
    basket:basketReducer,
    restaurant:restaurantReducer,
  }
})