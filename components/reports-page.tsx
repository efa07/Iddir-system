"use client"

import { useState } from "react"
import { Download, FileText, Calendar, Users, Wallet, CreditCard, BarChart3, Printer, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const reportTypes = [
  {
    id: "members",
    title: "የአባላት ሪፖርት",
    description: "የአባላት ዝርዝር እና መረጃ",
    icon: Users,
    color: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "contributions",
    title: "የመዋጮ ሪፖርት",
    description: "የወርሃዊ መዋጮ ክፍያዎች ዝርዝር",
    icon: Wallet,
    color: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    id: "expenses",
    title: "የወጪ ሪፖርት",
    description: "የወጪዎች እና ክፍያዎች ዝርዝር",
    icon: CreditCard,
    color: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-600 dark:text-red-400",
  },
  {
    id: "financial",
    title: "የገንዘብ ሪፖርት",
    description: "አጠቃላይ የገንዘብ ሁኔታ",
    icon: BarChart3,
    color: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
]

const recentReports = [
  {
    id: 1,
    name: "የካቲት_2016_አባላት_ሪፖርት.pdf",
    type: "የአባላት ሪፖርት",
    date: "የካቲት 10, 2016",
    size: "245 KB",
  },
  {
    id: 2,
    name: "ጥር_2016_መዋጮ_ሪፖርት.xlsx",
    type: "የመዋጮ ሪፖርት",
    date: "ጥር 30, 2016",
    size: "128 KB",
  },
  {
    id: 3,
    name: "ታህሳስ_2016_ወጪ_ሪፖርት.pdf",
    type: "የወጪ ሪፖርት",
    date: "ታህሳስ 28, 2016",
    size: "312 KB",
  },
  {
    id: 4,
    name: "Q1_2016_ገንዘብ_ሪፖርት.xlsx",
    type: "የገንዘብ ሪፖርት",
    date: "ታህሳስ 15, 2016",
    size: "456 KB",
  },
]

export function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null)
  const [dateRange, setDateRange] = useState({ from: "", to: "" })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">መዝገብ ሪፖርቶች</h1>
        <p className="text-muted-foreground mt-1">ሪፖርቶችን ይፍጠሩ እና ያውርዱ</p>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportTypes.map((report) => {
          const Icon = report.icon
          const isSelected = selectedReport === report.id
          return (
            <Card
              key={report.id}
              className={`border-0 shadow-sm bg-card cursor-pointer transition-all hover:shadow-md ${
                isSelected ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedReport(report.id)}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 ${report.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${report.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{report.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{report.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Generate Report Section */}
      <Card className="border-0 shadow-sm bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            ሪፖርት ያዘጋጁ
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">የሪፖርት ዓይነት</label>
              <select
                className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground"
                value={selectedReport || ""}
                onChange={(e) => setSelectedReport(e.target.value)}
              >
                <option value="">ይምረጡ...</option>
                {reportTypes.map((report) => (
                  <option key={report.id} value={report.id}>
                    {report.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">ከቀን</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="date"
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-background text-foreground"
                  value={dateRange.from}
                  onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">እስከ ቀን</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="date"
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-background text-foreground"
                  value={dateRange.to}
                  onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <Button className="h-12 px-8 gap-2">
              <FileText className="w-5 h-5" />
              ሪፖርት ይፍጠሩ
            </Button>
            <Button variant="outline" className="h-12 px-8 gap-2 bg-transparent">
              <Download className="w-5 h-5" />
              PDF ያውርዱ
            </Button>
            <Button variant="outline" className="h-12 px-8 gap-2 bg-transparent">
              <Download className="w-5 h-5" />
              Excel ያውርዱ
            </Button>
            <Button variant="outline" className="h-12 px-8 gap-2 bg-transparent">
              <Printer className="w-5 h-5" />
              ያትሙ
            </Button>
            <Button variant="outline" className="h-12 px-8 gap-2 bg-transparent">
              <Mail className="w-5 h-5" />
              ኢሜይል ይላኩ
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card className="border-0 shadow-sm bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">የቅርብ ጊዜ ሪፖርቶች</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            {recentReports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-5 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{report.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {report.type} • {report.date} • {report.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Download className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Printer className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
