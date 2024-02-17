import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { CartItem } from "@/types";

type CartType = {
  cartItems: CartItem[];
  setCartItem: (cartItem: CartItem) => void;
  deleteItem: (cartItemId: string) => void;
};

export const useCart = create<CartType>()(
  persist(
    (set) => ({
      cartItems: [],
      setCartItem: (cartItem) =>
        set((state) => ({ cartItems: [...state.cartItems, cartItem] })),
      deleteItem: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((cartItem) => cartItem.id !== id),
        })),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
