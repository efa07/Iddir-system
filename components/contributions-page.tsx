"use client"

import { useState } from "react"
import { Search, Plus, Download, Filter, CheckCircle, XCircle, Clock, Calendar, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const monthlyContributions = [
  { month: "መስከረም", amount: 45000, members: 90 },
  { month: "ጥቅምት", amount: 52000, members: 104 },
  { month: "ህዳር", amount: 48000, members: 96 },
  { month: "ታህሳስ", amount: 61000, members: 122 },
  { month: "ጥር", amount: 55000, members: 110 },
  { month: "የካቲት", amount: 67000, members: 134 },
]

const contributions = [
  {
    id: 1,
    member: "አቶ ገብሬ ታደሰ",
    amount: 500,
    month: "የካቲት 2016",
    date: "የካቲት 5",
    status: "የተከፈለ",
  },
  {
    id: 2,
    member: "ወ/ሮ ትዕግስት ወርቁ",
    amount: 500,
    month: "የካቲት 2016",
    date: "የካቲት 4",
    status: "የተከፈለ",
  },
  {
    id: 3,
    member: "አቶ ሰለሞን አበራ",
    amount: 500,
    month: "የካቲት 2016",
    date: "-",
    status: "በመጠበቅ",
  },
  {
    id: 4,
    member: "ወ/ሮ ሰላማዊት ደስታ",
    amount: 500,
    month: "የካቲት 2016",
    date: "የካቲት 3",
    status: "የተከፈለ",
  },
  {
    id: 5,
    member: "አቶ ዳዊት ሙሉጌታ",
    amount: 500,
    month: "የካቲት 2016",
    date: "-",
    status: "ዘግይቷል",
  },
  {
    id: 6,
    member: "ወ/ሮ ሄለን ተስፋዬ",
    amount: 500,
    month: "የካቲት 2016",
    date: "የካቲት 6",
    status: "የተከፈለ",
  },
]

export function ContributionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddModal, setShowAddModal] = useState(false)

  const filteredContributions = contributions.filter((c) => c.member.toLowerCase().includes(searchQuery.toLowerCase()))

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "የተከፈለ":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "በመጠበቅ":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "ዘግይቷል":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "የተከፈለ":
        return <CheckCircle className="w-4 h-4" />
      case "በመጠበቅ":
        return <Clock className="w-4 h-4" />
      case "ዘግይቷል":
        return <XCircle className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">የመዋጮ ቁጠባ</h1>
          <p className="text-muted-foreground mt-1">የአባላት መዋጮ ክፍያ መዝገብ</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="h-12 px-6 gap-2 bg-transparent">
            <Download className="w-5 h-5" />
            ወርድ
          </Button>
          <Button onClick={() => setShowAddModal(true)} className="h-12 px-6 gap-2">
            <Plus className="w-5 h-5" />
            ክፍያ መዝግብ
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">የወሩ ገቢ</p>
            <p className="text-3xl font-bold text-foreground mt-2">ብር 67,000</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">የከፈሉ አባላት</p>
            <p className="text-3xl font-bold text-success mt-2">134</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">በመጠበቅ ላይ</p>
            <p className="text-3xl font-bold text-warning mt-2">12</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">የዘገዩ ክፍያዎች</p>
            <p className="text-3xl font-bold text-destructive mt-2">10</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card className="border-0 shadow-sm bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">የወርሃዊ መዋጮ ሪፖርት</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyContributions}>
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
                <Bar dataKey="amount" fill="#3b82f6" radius={[8, 8, 0, 0]} name="መዋጮ (ብር)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Search */}
      <Card className="border-0 shadow-sm bg-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="አባል ወይም ወር ፈልግ..."
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

      {/* Contributions List */}
      <Card className="border-0 shadow-sm bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">የመዋጮ ክፍያዎች</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            {filteredContributions.map((contribution) => (
              <div
                key={contribution.id}
                className="flex items-center justify-between p-5 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-semibold text-primary">{contribution.member.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-foreground">{contribution.member}</p>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {contribution.month}
                      {contribution.date !== "-" && ` • ${contribution.date}`}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">የክፍያ መጠን</p>
                    <p className="text-lg font-semibold text-foreground">ብር {contribution.amount}</p>
                  </div>
                  <span
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full ${getStatusStyles(
                      contribution.status,
                    )}`}
                  >
                    {getStatusIcon(contribution.status)}
                    {contribution.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add Contribution Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-lg border-0 shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-xl">ክፍያ መዝግብ</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setShowAddModal(false)}>
                <X className="w-5 h-5" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">አባል ይምረጡ</label>
                <select className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground">
                  <option>አባል ይምረጡ...</option>
                  {contributions.map((c) => (
                    <option key={c.id}>{c.member}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">የክፍያ መጠን (ብር)</label>
                <Input placeholder="500" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">ወር</label>
                <select className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground">
                  <option>የካቲት 2016</option>
                  <option>ጥር 2016</option>
                  <option>ታህሳስ 2016</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">ማስታወሻ (አማራጭ)</label>
                <Input placeholder="ማስታወሻ ያስገቡ..." className="h-12" />
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
