"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart3, BookOpen, ChevronLeft, ChevronRight, Home, LineChart, PieChart, Settings } from 'lucide-react'

const sidebarItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Trades", href: "/trades", icon: LineChart },
  { name: "Portfolio", href: "/portfolio", icon: PieChart },
  { name: "Market Analysis", href: "/market-analysis", icon: BarChart3 },
  { name: "Education", href: "/education", icon: BookOpen },
  { name: "Settings", href: "/settings", icon: Settings },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "flex flex-col border-r transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <nav className="flex-1 space-y-2 p-4">
        {sidebarItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === item.href && "bg-muted"
              )}
            >
              <item.icon className="mr-2 h-5 w-5" />
              {!collapsed && <span>{item.name}</span>}
            </Button>
          </Link>
        ))}
      </nav>
      <Button
        variant="ghost"
        className="self-end p-2"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <ChevronRight className="h-5 w-5" />
        ) : (
          <ChevronLeft className="h-5 w-5" />
        )}
      </Button>
    </aside>
  )
}

