'use client'
import { Dispatch, SetStateAction } from "react"
import { Steps } from "./dialog"
import {  z } from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCheckoutStore } from "@/stores/checkout-store"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"


const formSchema = z.object({
  name: z.string().min(2, 'Preencha seu nome')
})

type StepUserProps = {
  setStep:Dispatch<SetStateAction<Steps>>
}

export function StepUser({ setStep }:StepUserProps) {
  const { name,setName } = useCheckoutStore(state => state)


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name}
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setName(values.name)
    setStep('address')
  }

  return(
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField 
          control={form.control}
          name="name"
          render={({field}) => (
            <FormItem>
              <FormLabel>Seu nome</FormLabel>
              <FormControl>
                <Input 
                  autoFocus
                  placeholder="Qual o seu nome?"
                  {...field}
                />
              </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="outline">Proximo</Button>
      </form>
    </Form>
  )
}