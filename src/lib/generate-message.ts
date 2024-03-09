import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store";

export const useGenerateMessage = () => {
  const { name, address } = useCheckoutStore(state => state)
  const { cart } = useCartStore(state => state)
  let orderProducts = []

  for(let item of cart) {
    orderProducts.push(`${item.quantity} x ${item.product.name}`)
  }

  return `**Dados do Client:**
  Nome: ${name}
  Endereço: ${address.district}, ${address.number} (${address.complement})
  ${address.district}, ${address.city}/${address.state}
  ----------
  **Pedido:**
  ${orderProducts.join("\n")}
  `
}