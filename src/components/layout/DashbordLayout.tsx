import React from "react"
import DashboardSidebar from "./DashboardSideBar"
import DashboardHeader from "./DashboardHeader"


interface DashboardLayoutProps {
    children:React.ReactNode
}

export default function DashbordLayout({children}:DashboardLayoutProps) {
  return (
    <div dir="rtl" className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <div className="hidden lg:block">
            <DashboardSidebar/>
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
                <DashboardHeader/>
                <main className="flex-1 p-4 md:p-8">
                    {children}
                </main>
        </div>
      </div>
    </div>
  )
}
