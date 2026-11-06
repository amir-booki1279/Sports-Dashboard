import type { Metadata } from "next";

import "./globals.css";
import React from "react";
import ThemeProvider from "@/components/providers/theme-provider";




export const metadata: Metadata = {
  title: "  مدیریت باشگاه",
  description: "سامانه مدیریت هوشمند باشگاه ورزشی",
};

export default function RootLayout({ children }:Readonly<{children:React.ReactNode}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={``}
    >
      <body className="font-sans antialiased">
          <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
         
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
