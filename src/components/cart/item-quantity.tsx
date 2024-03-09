import { Cart } from "@/types/cart"

type CartItemQuantityProps = {
  carItem: Cart
}

export  function CartItemQuantity({carItem}:CartItemQuantityProps) {
  return (
    <div>{carItem.quantity}</div>
  )
}
