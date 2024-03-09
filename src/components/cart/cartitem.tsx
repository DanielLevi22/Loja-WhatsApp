import { Cart } from "@/types/cart"
import Image from "next/image"
import { CartItemQuantity } from "./item-quantity"

type CartItemProps = {
  item: Cart
}

export function CartItem({ item }:CartItemProps) {
  return(
    <div className="flex items-center gap-5">
      <div className="w-16 overflow-hidden">
        <Image src={item.product.image} alt={item.product.name} width={300} height={300} sizes="100vw" className="w-full h-auto object-cover"/>
      </div>
      <div className="flex-1">
        <p className="">{item.product.name}</p>
        <p className="text-xs opacity-50">{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(item.product.price)}
        </p>
      </div>
      <div>
        <CartItemQuantity carItem={item} />
      </div>
      <div>

      </div>
    </div>
  )
}