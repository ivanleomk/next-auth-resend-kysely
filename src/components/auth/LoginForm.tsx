"use client"
import Link from 'next/link'
import React, { useTransition } from 'react'
import AutoForm from '../ui/auto-form'
import { UserEmail } from '@/types/auth'
import { Button } from '../ui/button'
import { PulseLoader } from 'react-spinners';
import { useToast } from '../ui/use-toast'
import { signIn } from 'next-auth/react'

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast()

  return (
    <>
      <AutoForm
        formSchema={UserEmail}
        onSubmit={(e) => {
          startTransition(async () => {
            await signIn("email", {
              email: e.email,
              redirect: false,
              callbackUrl: "/dashboard"
            }).then(() => {
              toast({
                title: "Success",
                description: `An email has been sent to your email at ${e.email}. Please check your inbox or spam.`,
              })
            })
          })
        }}
      >
        <Button
          disabled={isPending}
          className="w-full">
          {
            isPending ? <PulseLoader color='white' size={7} speedMultiplier={0.5} /> : "Sign In"
          }

        </Button>
      </AutoForm>

    </>
  )
}

export default LoginForm