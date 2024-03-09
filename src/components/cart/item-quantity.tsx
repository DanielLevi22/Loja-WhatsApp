'use client'
import { useCartStore } from "@/stores/cart-store"
import { Cart } from "@/types/cart"
import { Button } from "../ui/button"
import { MinusIcon, PlusIcon } from "lucide-react"

type CartItemQuantityProps = {
  carItem: Cart
}

export  function CartItemQuantity({carItem}:CartItemQuantityProps) {

  const { upsertCartItem} = useCartStore(state => state)

  function handlePlusButton() {
    upsertCartItem(carItem.product,1)
  }
  
  function handleMinusButton() {
    upsertCartItem(carItem.product,-1)

  }
  return (
    <div  className="flex items-center gap-2">
      <Button 
      variant="outline"
      size="icon"
      className="size-5"
      onClick={handlePlusButton}
      >
        <PlusIcon size={12} />
      </Button>
      <div className="text-xs">{carItem.quantity}</div>
      <Button 
      variant="outline"
      size="icon"
      className="size-5"
      onClick={handleMinusButton}
      >
        <MinusIcon size={12} />
      </Button>
    </div>
  )
}
