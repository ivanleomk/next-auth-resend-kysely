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
import UserEmail from "../Header/UserEmail"
import LogoutButton from "../Header/LogoutButton"

type Props = {
  user: Session["user"];
}

const Header = ({ user }: Props) => {
  return (
    <header className="container z-40 bg-background">
      <div className="flex h-20 items-center justify-between py-6">
        <MainNav items={marketingConfig.mainNav} />
        <div>
          <UserEmail user={user} />
          <Link
            href={user ? "/dashboard" : "/login"}
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "px-4 mr-4"
            )}
          >
            {user ? "Dashboard" : "Log In"}
          </Link>
          {user && <LogoutButton />}
        </div>

      </div>
    </header>

  )
}

export default Header