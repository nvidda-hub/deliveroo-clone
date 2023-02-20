import { createSlice } from '@reduxjs/toolkit'

const initialBasketState = {
    items: []
  }
export const basketItemCounterSlice = createSlice({
  name: 'basket',
  initialState: initialBasketState,
  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload)
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)
      let tempBasket = [...state.items]
      if(index >= 0){
        tempBasket.splice(index, 1)
      }
      state.items = tempBasket
    }
  }
})

export const { addToBasket, removeFromBasket } = basketItemCounterSlice.actions

export const selectedBasketItems = state => state.basket.items
export const selectedBasketItemsWithId = (state, id) => state.basket.items.filter(item => item.id === id)

export default basketItemCounterSlice.reducer