import DashbordLayout from "@/components/layout/DashbordLayout";




export default function Home() {
  return (
   <DashbordLayout>
    <div>
      <h1 className="text-2xl font-black">
              داشبورد مدیریت
      </h1>

      <p className="mt-2 text-sm text-muted-foreground">
              نمای کلی عملکرد باشگاه ورزشی
      </p>
    </div>
   </DashbordLayout>
  );
}
