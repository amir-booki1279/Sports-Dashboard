import { Bell, ChevronDown, Menu, Search } from "lucide-react"
import ThemeToggle from "../shared/ThemeToggle"

interface DashboardHeaderProps{
    onMenuClick:()=>void;
}

function DashboardHeader({onMenuClick}:DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-xl md:px-8">
      {/* right section */}
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="flex size-10 items-center justify-center rounded-xl border border-border lg:hidden">
            <Menu size={19}/>
        </button>
        <div>
            <h2 className="text-lg font-bold">پنل مدیریت</h2>
            <p className="hidden mt-2 text-xs text-muted-foreground sm:block">
                به پنل مدیریت خوش آمدید
            </p>
        </div>
      </div>

      {/* left section */}
      <div className="flex items-center gap-3">
        {/* search */}
        <div className="hidden h-10 w-64 items-center gap-2 rounded-xl border border-border bg-card px-3 md:flex ">
        <Search size={18} className="text-muted-foreground"/>
        <input type="text"
        placeholder="جست و جو"
        className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
        </div>
        {/* Theme */}
        <ThemeToggle/>

        {/* Notification */}
        <button className="relative flex size-10 items-center justify-center rounded-xl border border-border bg-card transition-colors hover:bg-accent">
            <Bell size={19}/>
            <span className="absolute right-2 top-2 size-2 rounded-full bg-orange-500 ring-2 ring-background"></span>
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2  rounded-xl border border-border p-1.5 transition-colors hover:bg-accent ">
            <div className="flex size-9 items-center justify-center rounded-lg bg-orange-500/10 font-bold text-orange-500"> |
             </div>
             <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold">
                    مدیر باشگاه
                </p>
                <p className="text-xs text-muted-foreground">
                    مدیر سیستم
                </p>
             </div>
             <ChevronDown size={19}
             className="hidden  text-muted-foreground sm:block"
             />
        </button>
      </div>
    </header>
  )
}

export default DashboardHeader
