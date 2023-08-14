import LogoutButton from "@/components/Header/LogoutButton"
import UserAvatar from "@/components/Header/UserAvatar"
import { DashboardNav } from "@/components/dashboard/DashboardNav"
import MainNav from "@/components/layout/MainNav"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { dashboardConfig } from "@/config/dashboard"
import { sanitizeUserEmail } from "@/lib/email"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { getServerSession } from "next-auth"
import Link from "next/link"


interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const session = await getServerSession();
  return (
    <div>
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={dashboardConfig.mainNav} />
          <div>
            <UserAvatar user={session?.user} />
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      {/* <SiteFooter className="border-t" /> */}
    </div>
  )
}