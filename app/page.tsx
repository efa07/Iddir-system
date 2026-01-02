"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Dashboard } from "@/components/dashboard"
import { MembersPage } from "@/components/members-page"
import { ContributionsPage } from "@/components/contributions-page"
import { ExpensesPage } from "@/components/expenses-page"
import { ReportsPage } from "@/components/reports-page"
import { NotificationsPage } from "@/components/notifications-page"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />
      case "members":
        return <MembersPage />
      case "contributions":
        return <ContributionsPage />
      case "expenses":
        return <ExpensesPage />
      case "reports":
        return <ReportsPage />
      case "notifications":
        return <NotificationsPage />
      default:
        return <Dashboard />
    }
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="flex h-screen bg-background">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-auto">
          <div className="p-8">{renderContent()}</div>
        </main>
      </div>
    </ThemeProvider>
  )
}
