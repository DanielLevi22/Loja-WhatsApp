import { useCheckoutStore } from "@/stores/checkout-store"
import { Button } from "../ui/button"
import Link from "next/link"
import { useGenerateMessage } from "@/lib/generate-message"

export function StepFinish() {
  const {name} = useCheckoutStore()

  const message = useGenerateMessage()
  const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`

  return(
    <div className="text-center flex flex-col gap-5">
      <p>Perfeito <strong>{name}</strong>!</p>
      <p>Agora envies seu pedido ao nosso WhatsApp para concluir.Nosso atendente ira te guiar o andamento do pedido.</p>
      <Button>
        <Link target="_blank" href={linkZap}>Enviar para o WhatsApp</Link>
      </Button>
    </div>
  )
}