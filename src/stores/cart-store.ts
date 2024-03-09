import { Cart } from "@/types/cart";
import { Product } from "@/types/product";
import { create } from "zustand";


type States = {
  cart: Cart[]
}

type Actions = {
  upsertCartItem: (product: Product, quantity: number) => void
}

const initialState: States = {
  cart: []
}

export const useCartStore = create<States & Actions>()(set => ({
  ...initialState,
    upsertCartItem:(product: Product, quantity: number) => set(state => {
      let  newCart = state.cart

      let productIndex = newCart.findIndex(item => item.product.id === product.id)

      if(productIndex < 0) {
        newCart.push({product: product, quantity: 0})
        productIndex = newCart.findIndex(item => item.product.id === product.id)
      }
      newCart[productIndex].quantity += quantity;

      if(newCart[productIndex].quantity <= 0) {
        newCart = newCart.filter(item => item.product.id !== product.id)
      }

      return { ...state, cart: newCart}
    })

}));