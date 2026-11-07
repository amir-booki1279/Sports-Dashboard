import DashboardActivity from '@/components/dashboard/DashboardActivity'
import DashboardCharts from '@/components/dashboard/DashboardCharts'
import StatsOverview from '@/components/dashboard/StatsOverView'



function DashboardPage() {
  return (
   
    <div className='space-y-8'>
      <h1 className="text-2xl font-black">
              داشبورد مدیریت
      </h1>

      <p className="mt-2 text-sm text-muted-foreground">
              نمای کلی عملکرد باشگاه ورزشی
      </p>
      <StatsOverview/>
      <DashboardCharts/>
      <DashboardActivity/>
    </div>
   
  )
}

export default DashboardPage
