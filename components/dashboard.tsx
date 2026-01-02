"use client"

import { Users, Wallet, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const monthlyData = [
  { month: "መስከረም", income: 45000, expense: 12000 },
  { month: "ጥቅምት", income: 52000, expense: 18000 },
  { month: "ህዳር", income: 48000, expense: 25000 },
  { month: "ታህሳስ", income: 61000, expense: 15000 },
  { month: "ጥር", income: 55000, expense: 22000 },
  { month: "የካቲት", income: 67000, expense: 30000 },
]

const recentTransactions = [
  { id: 1, name: "አቶ ገብሬ ታደሰ", type: "መዋጮ", amount: 500, date: "ህዳር 15" },
  { id: 2, name: "ወ/ሮ ትዕግስት ወርቁ", type: "መዋጮ", amount: 500, date: "ህዳር 14" },
  { id: 3, name: "የሐዘን እርዳታ", type: "ወጪ", amount: -15000, date: "ህዳር 12" },
  { id: 4, name: "አቶ ሰለሞን አበራ", type: "መዋጮ", amount: 500, date: "ህዳር 10" },
  { id: 5, name: "የቢሮ ወጪ", type: "ወጪ", amount: -2000, date: "ህዳር 8" },
]

const upcomingEvents = [
  { id: 1, title: "ወርሃዊ ስብሰባ", date: "ህዳር 25", type: "ስብሰባ" },
  { id: 2, title: "የመዋጮ መጨረሻ ቀን", date: "ህዳር 30", type: "ክፍያ" },
  { id: 3, title: "የበዓል ዝግጅት", date: "ታህሳስ 5", type: "ዝግጅት" },
]

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">የገንዘብ ሂሳብ</h1>
        <p className="text-muted-foreground mt-1">የእድር አጠቃላይ የገንዘብ ሁኔታ እይታ</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">ጠቅላላ ሂሳብ</p>
                <p className="text-3xl font-bold text-foreground mt-2">ብር 328,450</p>
                <div className="flex items-center gap-1 mt-2 text-success">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-sm">+12.5%</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center">
                <Wallet className="w-7 h-7 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">የአባላት ብዛት</p>
                <p className="text-3xl font-bold text-foreground mt-2">156</p>
                <div className="flex items-center gap-1 mt-2 text-success">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-sm">+4 አዲስ</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">የወሩ ገቢ</p>
                <p className="text-3xl font-bold text-foreground mt-2">ብር 67,000</p>
                <div className="flex items-center gap-1 mt-2 text-success">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">+8.2%</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">የወሩ ወጪ</p>
                <p className="text-3xl font-bold text-foreground mt-2">ብር 30,000</p>
                <div className="flex items-center gap-1 mt-2 text-destructive">
                  <ArrowDownRight className="w-4 h-4" />
                  <span className="text-sm">-5.3%</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center">
                <TrendingDown className="w-7 h-7 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <Card className="border-0 shadow-sm bg-card lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">የገቢ እና ወጪ ሪፖርት</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="income"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorIncome)"
                    strokeWidth={2}
                    name="ገቢ"
                  />
                  <Area
                    type="monotone"
                    dataKey="expense"
                    stroke="#ef4444"
                    fillOpacity={1}
                    fill="url(#colorExpense)"
                    strokeWidth={2}
                    name="ወጪ"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="border-0 shadow-sm bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              መጪ ዝግጅቶች
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card className="border-0 shadow-sm bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">የቅርብ ጊዜ ግብይቶች</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      transaction.amount > 0 ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30"
                    }`}
                  >
                    {transaction.amount > 0 ? (
                      <ArrowUpRight className="w-5 h-5 text-success" />
                    ) : (
                      <ArrowDownRight className="w-5 h-5 text-destructive" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{transaction.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {transaction.type} • {transaction.date}
                    </p>
                  </div>
                </div>
                <p className={`text-lg font-semibold ${transaction.amount > 0 ? "text-success" : "text-destructive"}`}>
                  {transaction.amount > 0 ? "+" : ""}ብር {Math.abs(transaction.amount).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
