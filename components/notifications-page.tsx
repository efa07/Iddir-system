"use client"

import { useState } from "react"
import { Bell, Calendar, Plus, X, Clock, Users, AlertCircle, CheckCircle, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const notifications = [
  {
    id: 1,
    title: "የመዋጮ ማስታወሻ",
    message: "የየካቲት ወር መዋጮ መጨረሻ ቀን ደርሷል",
    date: "የካቲት 25",
    type: "ማስታወሻ",
    isRead: false,
  },
  {
    id: 2,
    title: "አዲስ አባል ተቀላቀለ",
    message: "አቶ ዮሐንስ ገብሬ ወደ እድሩ ተቀላቅለዋል",
    date: "የካቲት 20",
    type: "መረጃ",
    isRead: false,
  },
  {
    id: 3,
    title: "የሐዘን ማስታወቂያ",
    message: "የወ/ሮ ሀዋ ከበደ ቤተሰብ ሐዘን",
    date: "የካቲት 15",
    type: "አስቸኳይ",
    isRead: true,
  },
  {
    id: 4,
    title: "ስብሰባ ተቀይሯል",
    message: "የሳምንቱ ስብሰባ ወደ እሁድ ተዛውሯል",
    date: "የካቲት 12",
    type: "ማስታወሻ",
    isRead: true,
  },
]

const events = [
  {
    id: 1,
    title: "ወርሃዊ ስብሰባ",
    date: "የካቲት 28, 2016",
    time: "ከቀኑ 3:00",
    location: "የእድር ቢሮ",
    attendees: 45,
    type: "ስብሰባ",
  },
  {
    id: 2,
    title: "የመዋጮ መጨረሻ ቀን",
    date: "የካቲት 30, 2016",
    time: "-",
    location: "-",
    attendees: 0,
    type: "ክፍያ",
  },
  {
    id: 3,
    title: "የበዓል ዝግጅት ስብሰባ",
    date: "ታህሳስ 5, 2016",
    time: "ከቀኑ 2:00",
    location: "የእድር ቢሮ",
    attendees: 30,
    type: "ዝግጅት",
  },
  {
    id: 4,
    title: "ዓመታዊ ጠቅላላ ስብሰባ",
    date: "ታህሳስ 20, 2016",
    time: "ከቀኑ 9:00",
    location: "ሰሚት ሆቴል",
    attendees: 150,
    type: "ስብሰባ",
  },
]

export function NotificationsPage() {
  const [showAddModal, setShowAddModal] = useState(false)
  const [activeTab, setActiveTab] = useState<"notifications" | "events">("notifications")

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "ማስታወሻ":
        return <Bell className="w-5 h-5" />
      case "መረጃ":
        return <CheckCircle className="w-5 h-5" />
      case "አስቸኳይ":
        return <AlertCircle className="w-5 h-5" />
      default:
        return <Bell className="w-5 h-5" />
    }
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "ማስታወሻ":
        return "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
      case "መረጃ":
        return "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
      case "አስቸኳይ":
        return "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  const getEventColor = (type: string) => {
    switch (type) {
      case "ስብሰባ":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
      case "ክፍያ":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "ዝግጅት":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">መታወቂያዎች እና ዝግጅቶች</h1>
          <p className="text-muted-foreground mt-1">ማስታወቂያዎች እና የመጪ ዝግጅቶች</p>
        </div>
        <Button onClick={() => setShowAddModal(true)} className="h-12 px-6 gap-2">
          <Plus className="w-5 h-5" />
          አዲስ ዝግጅት
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">ያልተነበቡ</p>
            <p className="text-3xl font-bold text-primary mt-2">2</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">መጪ ዝግጅቶች</p>
            <p className="text-3xl font-bold text-success mt-2">4</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">በዚህ ሳምንት</p>
            <p className="text-3xl font-bold text-warning mt-2">2</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">አስቸኳይ</p>
            <p className="text-3xl font-bold text-destructive mt-2">1</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-secondary rounded-xl w-fit">
        <button
          onClick={() => setActiveTab("notifications")}
          className={`px-6 py-3 rounded-lg text-base font-medium transition-all ${
            activeTab === "notifications"
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <span className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            ማስታወቂያዎች
          </span>
        </button>
        <button
          onClick={() => setActiveTab("events")}
          className={`px-6 py-3 rounded-lg text-base font-medium transition-all ${
            activeTab === "events" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <span className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            ዝግጅቶች
          </span>
        </button>
      </div>

      {/* Content */}
      {activeTab === "notifications" ? (
        <Card className="border-0 shadow-sm bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">ማስታወቂያዎች</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-start gap-4 p-5 rounded-xl transition-colors ${
                    notification.isRead
                      ? "bg-secondary/30 hover:bg-secondary/50"
                      : "bg-primary/5 hover:bg-primary/10 border-l-4 border-primary"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${getNotificationColor(
                      notification.type,
                    )}`}
                  >
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground">{notification.title}</h4>
                      <span className="text-sm text-muted-foreground">{notification.date}</span>
                    </div>
                    <p className="text-muted-foreground mt-1">{notification.message}</p>
                    <span
                      className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full ${getNotificationColor(
                        notification.type,
                      )}`}
                    >
                      {notification.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-0 shadow-sm bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">መጪ ዝግጅቶች</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex flex-col items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{event.title}</h4>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </span>
                          {event.time !== "-" && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {event.time}
                            </span>
                          )}
                        </div>
                        {event.location !== "-" && (
                          <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                        )}
                        {event.attendees > 0 && (
                          <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4" />
                            {event.attendees} ተሳታፊዎች ይጠበቃሉ
                          </div>
                        )}
                      </div>
                    </div>
                    <span className={`px-4 py-2 text-sm font-medium rounded-full ${getEventColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add Event Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-lg border-0 shadow-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-xl">አዲስ ዝግጅት</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setShowAddModal(false)}>
                <X className="w-5 h-5" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">የዝግጅት ርዕስ</label>
                <Input placeholder="ርዕስ ያስገቡ" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">የዝግጅት ዓይነት</label>
                <select className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground">
                  <option>ስብሰባ</option>
                  <option>ክፍያ</option>
                  <option>ዝግጅት</option>
                  <option>ሌላ</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">ቀን</label>
                  <input
                    type="date"
                    className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">ሰዓት</label>
                  <input
                    type="time"
                    className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">ቦታ</label>
                <Input placeholder="ቦታ ያስገቡ" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">ማብራሪያ</label>
                <textarea
                  className="w-full h-24 px-4 py-3 rounded-xl border border-border bg-background text-foreground resize-none"
                  placeholder="ማብራሪያ ያስገቡ..."
                />
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
