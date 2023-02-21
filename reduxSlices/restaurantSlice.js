import { createSlice } from '@reduxjs/toolkit'

const initialBasketState = {
    restaurant:{
        id:null,
        imageUrl:null,
        title:null,
        rating:null,
        genre:null,
        address:null,
        short_desc:null,
        dishes:null
    }
  }
export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: initialBasketState,
  reducers: {
    setRestaurant:(state, action) => {
        state.restaurant = action.payload
    }
  }
})

export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurant = state => state.restaurant.restaurant

export default restaurantSlice.reducer