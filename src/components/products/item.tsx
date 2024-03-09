'use client'
import { Product } from "@/types/product"
import Image from "next/image"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"
import { ToastAction } from "../ui/toast"

type ProductItemProps = {
  item: Product
}

export function ProductItem({ item }: ProductItemProps) {
  const {toast} = useToast()
  function handleAddButton() {
    toast({
      title: 'Adicionado ao carrinho!',
      description: item.name,
      action: <ToastAction altText="fechar">Fechar</ToastAction>
    })

  }
  return (
    <div>
      <div className="rounded-md overflow-hidden">
        <Image src={item.image} width={300} height={300} alt={item.name}  className="w-full object-cover" sizes="100vw" />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <p className="text-lg">{item.name}</p>
        <p className="text-sm opacity-50">{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(item.price)}
        </p>
          <Button 
            variant="outline"
            onClick={handleAddButton}
          >
            Adicionar
          </Button>
      </div>

    </div>
  )
}