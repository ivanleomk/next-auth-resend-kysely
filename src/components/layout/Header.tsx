"use client"
import { buttonVariants } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import MainNav from "./MainNav"
import { marketingConfig } from "@/config/marketing"
import { useSelectedLayoutSegment } from "next/navigation"

const Header = () => {

  const user = null
  return (
    <header className="container z-40 bg-background">
      <div className="flex h-20 items-center justify-between py-6">
        <MainNav items={marketingConfig.mainNav} />
        <Link
          href={user ? "/dashboard" : "/login"}
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "px-4"
          )}
        >
          {user ? "Dashboard" : "Login"}
        </Link>
      </div>
    </header>

  )
}

export default Header