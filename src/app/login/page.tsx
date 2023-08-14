import LoginForm from '@/components/auth/LoginForm'
import { ArrowLeftIcon, ArrowTopLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className="mx-auto flex w-full h-screen flex-col justify-center space-y-6 sm:w-[350px]">
      <Link href="/" className='text-sm text-muted-foreground cursor-pointer flex space-x-2 items-center'>
        <ArrowLeftIcon /> Back
      </Link>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Sign In
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to get access to your account.
        </p>
      </div>
      <LoginForm />
      <p className="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  )
}

export default Login