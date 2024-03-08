import { RocketIcon } from "lucide-react";
import {Sheet, SheetContent,  SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export  function SidebarCart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <RocketIcon className="mr-2" />
          <p>Carrinho</p>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
          <div className="flex flex-col gap-5 my-3">

          </div>
          <Separator className="my-4" />

          <div className="flex justify-between items-center text-xs">
            <div>SubTotal:</div>
            <div></div>
          </div>

          <Separator className="my-4" />

          <div className="text-center">
              <Button>Finalizar compra</Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
