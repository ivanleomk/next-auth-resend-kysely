export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

type MarketingConfig = {
  mainNav: NavItem[]
}

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "Features",
      href: "/#features",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },

  ],
}