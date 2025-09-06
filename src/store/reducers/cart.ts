import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Dish } from '../../pages/Home'

type CartItem = {
  dish: Dish
  quantity: number
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dish>) => {
      const existing = state.items.find((item) => item.dish.nome === action.payload.nome)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ dish: action.payload, quantity: 1 })
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => item.dish.nome === action.payload)
      if (index !== -1) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1
        } else {
          state.items.splice(index, 1)
        }
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, close, open } = cartSlice.actions
export default cartSlice.reducer
