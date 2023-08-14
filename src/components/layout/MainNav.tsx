"use client"

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react'

type Props = {
  items: NavItem[];

}

const MainNav = ({ items }: Props) => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex gap-6 md:gap-10">
      <h1 className="font-bold">
        {siteConfig.name}
      </h1>
      {items.length ? (
        <nav className="hidden gap-6 md:flex">
          {items.map((item, index) => (
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
  )
}

export default MainNav