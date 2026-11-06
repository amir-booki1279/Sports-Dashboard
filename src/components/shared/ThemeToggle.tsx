"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";


function ThemeToggle() {
    const{theme,setTheme}=useTheme();
    const[mounted,setMounted]=useState(false);

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    },[])

    if(!mounted) return <div className="size-10"/>

    const isDark = theme ==="dark";

  return (
    <button 
    type="button"
    onClick={()=>{
        console.log("click");
        console.log(theme);

        
        setTheme(isDark?"light":"dark")}}

    className="flex size-10 items-center justify-center rounded-xl border border-border bg-card transition-colors hover:bg-accent "
    aria-label="تغییر  تم"
    >
      {isDark ? (<Sun size={19}/>):(<Moon size={19}/>)}
    </button>
  )
}

export default ThemeToggle
