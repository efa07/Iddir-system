"use client"

import { Users, Wallet, CreditCard, PieChart, FileText, Bell, Moon, Sun, Home } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const menuItems = [
  { id: "dashboard", label: "የገንዘብ ሂሳብ", icon: Home },
  { id: "members", label: "የአባል መዝገብ", icon: Users },
  { id: "contributions", label: "የመዋጮ ቁጠባ", icon: Wallet },
  { id: "expenses", label: "የወጪ ክወና", icon: CreditCard },
  { id: "reports", label: "መዝገብ ሪፖርቶች", icon: FileText },
  { id: "notifications", label: "መታወቂያዎች", icon: Bell },
]

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <aside className="w-72 bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <PieChart className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">እድር</h1>
            <p className="text-xs text-muted-foreground">የማህበረሰብ ድጋፍ</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </button>
          )
        })}
      </nav>

      {/* Theme Toggle */}
      <div className="p-4 border-t border-border">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
        >
          {theme === "light" ? (
            <>
              <Moon className="w-5 h-5" />
              <span>ጨለማ ገጽታ</span>
            </>
          ) : (
            <>
              <Sun className="w-5 h-5" />
              <span>ብርሃን ገጽታ</span>
            </>
          )}
        </button>
      </div>

      {/* User Info */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="text-accent-foreground font-semibold">አ</span>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">አበበ ከበደ</p>
            <p className="text-xs text-muted-foreground">አስተዳዳሪ</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
