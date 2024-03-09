import { Dispatch, SetStateAction } from "react"
import { Steps } from "./dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCheckoutStore } from "@/stores/checkout-store"
import { Button } from "../ui/button"
import { Select } from "../ui/select"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

type StepAddressProps = {
  setStep:Dispatch<SetStateAction<Steps>>
}
const formSchema = z.object({
  street: z.string().min(2, 'Preencha o endereço'),
  number: z.string().min(2, 'Preencha o numero'),
  complement: z.string().optional(),
  district: z.string().min(2, 'Preencha o bairro'),
  city: z.string().min(2, 'Preencha o bairro'),
  state: z.string().min(2, 'Preencha o estado'),
})

export function StepAddress({setStep}:StepAddressProps) {
  const { address, setAddress } = useCheckoutStore(state => state)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...address}
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setAddress(values)
    setStep('finish')
  }
  return(
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4">
        
        <FormField 
          control={form.control}
          name="number"
          render={({field}) => (
            <FormItem>
              <FormLabel>Numero</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="street"
          render={({field}) => (
            <FormItem>
              <FormLabel>Rua</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="complement"
          render={({field}) => (
            <FormItem>
              <FormLabel>Complemento</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="district"
          render={({field}) => (
            <FormItem>
              <FormLabel>Bairro</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="city"
          render={({field}) => (
            <FormItem>
              <FormLabel>Cidade</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="state"
          render={({field}) => (
            <FormItem>
              <FormLabel>Estado</FormLabel>
              <FormControl>
                <Select defaultValue={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Estado"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sp">São Paulo</SelectItem>
                    <SelectItem value="rj">Rio de janeiro</SelectItem>
                    <SelectItem value="df">Distrito Federal</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex items-center justify-between mt-4">
      <Button variant="link" onClick={() => setStep('user')}>Voltar</Button>
      <Button type="submit" variant="outline">Concluir</Button>
      </div>
    </form>
  </Form>
  )
}