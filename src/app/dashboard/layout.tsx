import DashbordLayout from "@/components/layout/DashbordLayout"


interface LayoutProps {
    children : React.ReactNode
}

export default function Layout({children}:LayoutProps){
 
    return <DashbordLayout>{children}</DashbordLayout>
}