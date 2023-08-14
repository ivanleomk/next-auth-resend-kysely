"use client"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import MainNav from "./MainNav"
import { marketingConfig } from "@/config/marketing"
import { useSelectedLayoutSegment } from "next/navigation"
import { Session } from "next-auth"
import { signOut } from "next-auth/react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type Props = {
  user: Session["user"];
}

const Header = ({ user }: Props) => {
  return (
    <header className="container z-40 bg-background">
      <div className="flex h-20 items-center justify-between py-6">
        <MainNav items={marketingConfig.mainNav} />
        <div>
          {user && (
            <span className="text-sm text-muted-foreground mr-4">
              {user.email && user.email.length > 20
                ? `${user.email.slice(0, 10)}...${user.email.slice(-7)}`
                : user.email}
            </span>
          )}
          <Link
            href={user ? "/dashboard" : "/login"}
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "px-4 mr-4"
            )}
          >
            {user ? "Dashboard" : "Log In"}
          </Link>

          {user && <AlertDialog>
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
          </AlertDialog>}
        </div>

      </div>
    </header>

  )
}

export default Header