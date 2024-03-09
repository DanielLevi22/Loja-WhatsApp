'use client'
import { useState } from "react";
import { Dialog, DialogHeader ,DialogTitle,DialogContent} from "../ui/dialog";
import { Progress } from "../ui/progress";
import { StepUser } from "./step-user";
import { StepFinish } from "./step-finish";
import { StepAddress } from "./stpe-address";

type CheckoutDialogProps = {
  open: boolean
  onOpenChange: (open:boolean) => void
}

export type Steps = "user" | "address" | "finish";


export function CheckoutDialog({onOpenChange,open}:CheckoutDialogProps) {
  const [step,setStep] = useState<Steps>('user')
  let progressPct = 0;
  if(step === "user") {
    progressPct = 33
  }
  if(step === "address") {
    progressPct = 66
  }
  if(step === "finish") {
    progressPct = 100
  }
  return(
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <>

            {step === "user" && 'Dados Pessoais'}
            {step === "user" && 'Endereço de  entrega'}
            {step === "user" && 'Envio para o WhatsApp'}
            </>
          </DialogTitle>
        </DialogHeader>
        <Progress value={progressPct} />
        <div className="flex flex-col gap-3">
          {step === 'user' && <StepUser setStep={setStep} />}
          {step === 'address' && <StepAddress setStep={setStep}/>}
          {step === 'finish' && <StepFinish />}
        </div>
      </DialogContent>
    </Dialog>
  )
}