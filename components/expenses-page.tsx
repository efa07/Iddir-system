"use client"

import { useState } from "react"
import { Search, Plus, Download, Filter, X, Heart, Home, Gift, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const expenseCategories = [
  { name: "የሐዘን እርዳታ", value: 85000, color: "#3b82f6" },
  { name: "የቢሮ ወጪ", value: 15000, color: "#10b981" },
  { name: "የስጦታ ወጪ", value: 12000, color: "#f59e0b" },
  { name: "ሌሎች", value: 8000, color: "#6366f1" },
]

const expenses = [
  {
    id: 1,
    recipient: "ወ/ሮ ሀዋ ከበደ",
    type: "የሐዘን እርዳታ",
    amount: 15000,
    date: "የካቲት 12",
    description: "የቤተሰብ ሐዘን",
    icon: Heart,
  },
  {
    id: 2,
    recipient: "የቢሮ ኪራይ",
    type: "የቢሮ ወጪ",
    amount: 5000,
    date: "የካቲት 10",
    description: "ወርሃዊ ኪራይ",
    icon: Home,
  },
  {
    id: 3,
    recipient: "አቶ ተክለ ማርያም",
    type: "የሐዘን እርዳታ",
    amount: 15000,
    date: "የካቲት 5",
    description: "የቤተሰብ ሐዘን",
    icon: Heart,
  },
  {
    id: 4,
    recipient: "የሰነድ ማተሚያ",
    type: "የቢሮ ወጪ",
    amount: 2000,
    date: "የካቲት 3",
    description: "የደብዳቤ ማተሚያ",
    icon: FileText,
  },
  {
    id: 5,
    recipient: "ወ/ሮ ፀሐይ ገብሬ",
    type: "የስጦታ",
    amount: 5000,
    date: "ጥር 28",
    description: "የልደት ስጦታ",
    icon: Gift,
  },
  {
    id: 6,
    recipient: "አቶ በላቸው ደረጀ",
    type: "የሐዘን እርዳታ",
    amount: 15000,
    date: "ጥር 20",
    description: "የቤተሰብ ሐዘን",
    icon: Heart,
  },
]

export function ExpensesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddModal, setShowAddModal] = useState(false)

  const filteredExpenses = expenses.filter(
    (e) =>
      e.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const totalExpenses = expenseCategories.reduce((a, b) => a + b.value, 0)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">የወጪ ክወና</h1>
          <p className="text-muted-foreground mt-1">የእድር ወጪዎች እና ክፍያዎች መዝገብ</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="h-12 px-6 gap-2 bg-transparent">
            <Download className="w-5 h-5" />
            ወርድ
          </Button>
          <Button onClick={() => setShowAddModal(true)} className="h-12 px-6 gap-2">
            <Plus className="w-5 h-5" />
            ወጪ መዝግብ
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">ጠቅላላ ወጪ</p>
            <p className="text-3xl font-bold text-foreground mt-2">ብር {totalExpenses.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">የሐዘን እርዳታ</p>
            <p className="text-3xl font-bold text-primary mt-2">ብር 85,000</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">የቢሮ ወጪ</p>
            <p className="text-3xl font-bold text-success mt-2">ብር 15,000</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">ሌሎች ወጪዎች</p>
            <p className="text-3xl font-bold text-warning mt-2">ብር 20,000</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart and Recent */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <Card className="border-0 shadow-sm bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">የወጪ ክፍፍል</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseCategories}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {expenseCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                    formatter={(value: number) => [`ብር ${value.toLocaleString()}`, "መጠን"]}
                  />
                  <Legend formatter={(value) => <span className="text-foreground">{value}</span>} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="border-0 shadow-sm bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">የዚህ ወር ወጪዎች</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              {expenseCategories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium">{category.name}</span>
                    <span className="text-muted-foreground">ብር {category.value.toLocaleString()}</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(category.value / totalExpenses) * 100}%`,
                        backgroundColor: category.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card className="border-0 shadow-sm bg-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="ወጪ ወይም ተቀባይ ፈልግ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base"
              />
            </div>
            <Button variant="outline" className="h-12 px-6 gap-2 bg-transparent">
              <Filter className="w-5 h-5" />
              ማጣሪያ
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Expenses List */}
      <Card className="border-0 shadow-sm bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">የወጪ ዝርዝሮች</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            {filteredExpenses.map((expense) => {
              const Icon = expense.icon
              return (
                <div
                  key={expense.id}
                  className="flex items-center justify-between p-5 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-foreground">{expense.recipient}</p>
                      <p className="text-sm text-muted-foreground">
                        {expense.type} • {expense.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{expense.description}</p>
                      <p className="text-lg font-semibold text-destructive">-ብር {expense.amount.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Add Expense Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-lg border-0 shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-xl">ወጪ መዝግብ</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setShowAddModal(false)}>
                <X className="w-5 h-5" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">ተቀባይ</label>
                <Input placeholder="ስም ያስገቡ" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">የወጪ ዓይነት</label>
                <select className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground">
                  <option>የሐዘን እርዳታ</option>
                  <option>የቢሮ ወጪ</option>
                  <option>የስጦታ ወጪ</option>
                  <option>ሌሎች</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">መጠን (ብር)</label>
                <Input placeholder="0" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">ማብራሪያ</label>
                <Input placeholder="ማብራሪያ ያስገቡ..." className="h-12" />
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="outline" className="flex-1 h-12 bg-transparent" onClick={() => setShowAddModal(false)}>
                  ሰርዝ
                </Button>
                <Button className="flex-1 h-12">ያስቀምጡ</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
