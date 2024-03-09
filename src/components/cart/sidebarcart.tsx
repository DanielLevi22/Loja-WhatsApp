'use client'
import { RocketIcon } from "lucide-react";
import {Sheet, SheetContent,  SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useCartStore } from "@/stores/cart-store";
import { CartItem } from "./cartitem";

export  function SidebarCart() {
  const { cart } = useCartStore(state => state)

  let subtotal =  0;
  for(let item of cart) {
    subtotal += item.quantity * item.product.price
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <RocketIcon className="mr-2 " />
          <p>Carrinho</p>
          { cart.length > 0 &&
            <div  className="absolute size-3 bg-red-600 rounded-full -right-1 -top-1"/>
          }
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
          <div className="flex flex-col gap-5 my-3">
            {cart.map(item => (
              <CartItem key={item.product.id}  item={item}/>
            ))

            }
          </div>
          <Separator className="my-4" />

          <div className="flex justify-between items-center text-xs">
            <div>SubTotal:</div>
            <div>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(subtotal)}
          </div>
          </div>

          <Separator className="my-4" />

          <div className="text-center">
              <Button disabled={cart.length === 0}>Finalizar compra</Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
