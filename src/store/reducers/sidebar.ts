import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Dish } from '../../pages/Home'

type CartItem = {
  dish: Dish
  quantity: number
}

type SidebarState = {
  items: CartItem[]
  isOpen: boolean
  checkout: boolean
}

const initialState: SidebarState = {
  items: [],
  isOpen: false,
  checkout: false
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
    },
    clear: (state) => {
      state.items = []
    },
    checkoutOpen: (state) => {
      state.checkout = true
    },
    checkoutClose: (state) => {
      state.checkout = false
    }
  }
})

export const { add, remove, close, open, clear, checkoutClose, checkoutOpen } = cartSlice.actions
export default cartSlice.reducer
