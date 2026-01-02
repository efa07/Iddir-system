"use client"

import { useState } from "react"
import {
  Search,
  Plus,
  MoreHorizontal,
  Phone,
  Mail,
  MapPin,
  Edit,
  Trash2,
  Eye,
  X,
  Calendar,
  CreditCard,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const members = [
  {
    id: 1,
    name: "አቶ ገብሬ ታደሰ",
    phone: "0911234567",
    email: "gebre@email.com",
    address: "አዲስ አበባ፣ ቦሌ",
    joinDate: "መስከረም 2015",
    status: "ንቁ",
    totalContribution: 24000,
  },
  {
    id: 2,
    name: "ወ/ሮ ትዕግስት ወርቁ",
    phone: "0922345678",
    email: "tigist@email.com",
    address: "አዲስ አበባ፣ ካዛንችስ",
    joinDate: "ጥቅምት 2015",
    status: "ንቁ",
    totalContribution: 22500,
  },
  {
    id: 3,
    name: "አቶ ሰለሞን አበራ",
    phone: "0933456789",
    email: "solomon@email.com",
    address: "አዲስ አበባ፣ መገናኛ",
    joinDate: "ህዳር 2015",
    status: "ንቁ",
    totalContribution: 21000,
  },
  {
    id: 4,
    name: "ወ/ሮ ሰላማዊት ደስታ",
    phone: "0944567890",
    email: "selamawit@email.com",
    address: "አዲስ አበባ፣ ሜክሲኮ",
    joinDate: "ታህሳስ 2015",
    status: "በእረፍት",
    totalContribution: 18000,
  },
  {
    id: 5,
    name: "አቶ ዳዊት ሙሉጌታ",
    phone: "0955678901",
    email: "dawit@email.com",
    address: "አዲስ አበባ፣ ገርጂ",
    joinDate: "ጥር 2016",
    status: "ንቁ",
    totalContribution: 15000,
  },
  {
    id: 6,
    name: "ወ/ሮ ሄለን ተስፋዬ",
    phone: "0966789012",
    email: "helen@email.com",
    address: "አዲስ አበባ፣ ሳሪስ",
    joinDate: "የካቲት 2016",
    status: "ንቁ",
    totalContribution: 13500,
  },
]

export function MembersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedMember, setSelectedMember] = useState<(typeof members)[0] | null>(null)

  const filteredMembers = members.filter((member) => member.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">የአባል መዝገብ</h1>
          <p className="text-muted-foreground mt-1">የእድር አባላት ዝርዝር እና መረጃ</p>
        </div>
        <Button onClick={() => setShowAddModal(true)} className="h-12 px-6 text-base gap-2">
          <Plus className="w-5 h-5" />
          አዲስ አባል
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">ጠቅላላ አባላት</p>
            <p className="text-3xl font-bold text-foreground mt-2">156</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">ንቁ አባላት</p>
            <p className="text-3xl font-bold text-success mt-2">142</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">በእረፍት ላይ</p>
            <p className="text-3xl font-bold text-warning mt-2">14</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">አዲስ በዚህ ወር</p>
            <p className="text-3xl font-bold text-primary mt-2">4</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="border-0 shadow-sm bg-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="አባል ፈልግ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base border-border"
              />
            </div>
            <Button variant="outline" className="h-12 px-6 bg-transparent">
              ማጣሪያ
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Members List */}
      <Card className="border-0 shadow-sm bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">የአባላት ዝርዝር</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-3">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-5 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-semibold text-primary">{member.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-foreground">{member.name}</p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {member.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {member.address}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">ጠቅላላ መዋጮ</p>
                    <p className="font-semibold text-foreground">ብር {member.totalContribution.toLocaleString()}</p>
                  </div>
                  <span
                    className={`px-4 py-2 text-sm font-medium rounded-full ${
                      member.status === "ንቁ"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    }`}
                  >
                    {member.status}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-10 w-10">
                        <MoreHorizontal className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem onClick={() => setSelectedMember(member)} className="gap-2">
                        <Eye className="w-4 h-4" />
                        ዝርዝር ይመልከቱ
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <Edit className="w-4 h-4" />
                        አርትዕ
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-destructive">
                        <Trash2 className="w-4 h-4" />
                        ሰርዝ
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add Member Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-lg border-0 shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-xl">አዲስ አባል ያስገቡ</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setShowAddModal(false)}>
                <X className="w-5 h-5" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">ሙሉ ስም</label>
                <Input placeholder="ስም ያስገቡ" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">ስልክ ቁጥር</label>
                <Input placeholder="09xxxxxxxx" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">ኢሜይል</label>
                <Input placeholder="email@example.com" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">አድራሻ</label>
                <Input placeholder="አድራሻ ያስገቡ" className="h-12" />
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

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-lg border-0 shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-xl">የአባል ዝርዝር</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setSelectedMember(null)}>
                <X className="w-5 h-5" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">{selectedMember.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{selectedMember.name}</h3>
                  <span
                    className={`inline-block mt-2 px-4 py-1 text-sm font-medium rounded-full ${
                      selectedMember.status === "ንቁ"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    }`}
                  >
                    {selectedMember.status}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">ስልክ</p>
                    <p className="font-medium text-foreground">{selectedMember.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">ኢሜይል</p>
                    <p className="font-medium text-foreground">{selectedMember.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">አድራሻ</p>
                    <p className="font-medium text-foreground">{selectedMember.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">የተቀላቀሉበት</p>
                    <p className="font-medium text-foreground">{selectedMember.joinDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">ጠቅላላ መዋጮ</p>
                    <p className="text-xl font-bold text-primary">
                      ብር {selectedMember.totalContribution.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full h-12" onClick={() => setSelectedMember(null)}>
                ዝጋ
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
