import { CostType, Level } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  title: string;
  price?: number;
  costType: CostType;
  level: Level;
};

type CartState = {
  cartItems: CartItem[];
};

const initialState: CartState = {
  cartItems: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart(state, action) {
      state.cartItems = action.payload;
    },
    setCart(state, action: PayloadAction<CartItem>) {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeCart(state, action: PayloadAction<CartItem>) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id,
      );
    },
  },
});

export const { initializeCart, setCart, removeCart } = cart.actions;

export default cart.reducer;
