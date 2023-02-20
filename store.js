import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./reduxSlices/basketSlice"

export default configureStore({
  reducer: {
    basket:basketReducer
  }
})