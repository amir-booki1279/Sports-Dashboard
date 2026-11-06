"use client"

import {Award, CalendarDays, ChartNoAxesCombined, ClipboardCheck, Dumbbell, LayoutDashboard, LogOut, ShieldCheck, UserRound, Users, Wallet} from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation"

const menuGroups = [
   {
     title:"مدیریت فروشگاه",
    items:[
        {
          title:"داشبورد",
          href:"/dashboard",
          icon:LayoutDashboard
        },
        {
          title:"ورزشکاران",
          href:"/dashboard/athletes",
          icon:Users
        },
        {
          title:"مربیان",
          href:"/dashboard/coaches",
          icon:UserRound
        },
        {
          title:"رشته های ورزشی",
          href:"/dashboard/sports",
          icon:Dumbbell
        },
        {
          title:"درجه ها و کمربندها",
          href:"/dashboard/belts",
          icon:Award
        },
    ]
   },
   {
    title:"برنامه ریزی و حضور",
    items:[
        {
          title: "کلاس ها",
          href:"/dashboard/classes",
          icon:CalendarDays
        },
        {
          title: "حضور و غیاب",
          href:"/dashboard/attendance",
          icon:ClipboardCheck
        },
    ]
   },
   {
    title:"مالی و گزارش",
    items:[
        {
          title: "امور مالی",
          href:"/dashboard/finance",
          icon:Wallet
        },
        {
          title: "گزارش ها",
          href:"/dashboard/reports",
          icon:ChartNoAxesCombined
        },
    ]
   }
]

export default function DashboardSidebar(){
    const pathname = usePathname();

    return(
        <aside className="flex h-screen w-72 shrink-0 flex-col border-l border-border bg-card text-muted-foreground">
            {/* logo */}
            <div className="flex h-20 items-center gap-3 border-b border-border px-6">
                <div className="flex size-11 items-center justify-center rounded-xl bg-orange-500 text-xl font-black text-muted-foreground">
                    N
                </div>
                <div>
                    <h1 className="text-xl font-black tracking-wider">
                        NOVA <span className="text-orange-500">SPORT</span>
                    </h1>
                    <p className="mt-0.5 text-[13px] text-gray-500">
                        سیستم مدیریت باشگاه
                    </p>
                </div>
            </div>
            {/* Navigation */}
            <nav className="flex-1 space-y-7 overflow-y-auto px-4 py-6">
                {menuGroups.map((group)=>(
                    <div key={group.title}>
                        <h2 className="mb-3 px-3 text-xs font-semibold text-orange-500/80">
                            {group.title}
                        </h2>
                        <div className="space-y-1">
                            {group.items.map((item)=>{
                                const isActive = pathname===item.href || (item.href!=="/dashboard"&&  pathname.startsWith(`${item.href}/`))
                                const Icon = item.icon;
                                return(
                                    <Link href={item.href} key={item.href}
                                    className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all ${isActive ? "bg-orange-500 font-semibold text-white shadow-lg shadow-orange-500/10":"text-muted-foreground hover:bg-white/5 hover:hover:text-muted-foreground"} `}>
                                    <Icon size={19}/>
                                    <span>{item.title}</span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Button Section */}
            <div className="space-y-2 border-t border-white/50 p-4">
            <Link href={'/dashboard/users'} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-muted-foreground transition hover:bg-white/5 hover:hover:text-muted-foreground">
            <ShieldCheck size={19}/>
            مدیریت کاربران
            </Link>
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-muted-foreground transition cursor-pointer hover:bg-white/5 hover:text-muted-foreground">
                <LogOut size={19}/>
                خروج از حساب
            </button>
            </div>
        </aside>
    )
}