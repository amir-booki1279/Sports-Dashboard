"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import DashboardSidebar from "./DashboardSideBar";
import DashboardHeader from "./DashboardHeader";



interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // با تغییر صفحه، منوی موبایل بسته شود
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <DashboardSidebar />
        </div>

        {/* Mobile Sidebar */}
        {isMobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
        )}

        <div
          onClick={() => setIsMobileOpen(false)}
          className={`fixed inset-y-0 right-0 z-50 transition-transform duration-300 lg:hidden ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <DashboardSidebar />
        </div>

        {/* Main Content */}
        <div className="flex min-w-0 flex-1 flex-col">
          <DashboardHeader
            onMenuClick={() => setIsMobileOpen(true)}
          />

          <main className="flex-1 p-4 md:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
