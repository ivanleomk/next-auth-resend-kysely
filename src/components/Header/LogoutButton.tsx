"use client"
import React from 'react'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog'
import { signOut } from 'next-auth/react'

const LogoutButton = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <p className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>Log Out</p>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Sign Out</AlertDialogTitle>
          <AlertDialogDescription>
            Please confirm if you&apos;d like to sign out
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
          >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default LogoutButton