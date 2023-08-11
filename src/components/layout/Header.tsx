"use client"
import { buttonVariants } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import MainNav from "./MainNav"
import { marketingConfig } from "@/config/links"
import { useSelectedLayoutSegment } from "next/navigation"
import { useUser } from "@clerk/nextjs"

const Header = () => {
  const segment = useSelectedLayoutSegment();
  const user = useUser();
  return (
    <header className="container z-40 bg-background">
      <div className="flex h-20 items-center justify-between py-6">
        <div className="flex gap-6 md:gap-10">
          <h1 className="font-bold">
            Brain Dump
          </h1>
          {marketingConfig.mainNav?.length ? (
            <nav className="hidden gap-6 md:flex">
              {marketingConfig.mainNav?.map((item, index) => (
                <Link
                  key={index}
                  href={item?.disabled ? "#" : item.href}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.href.startsWith(`/${segment}`)
                      ? "text-foreground"
                      : "text-foreground/60",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
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