import {
  Clock,
  MapPin,
  Users,
  UserPlus,
  CreditCard,
  CalendarCheck,
  Dumbbell,
} from "lucide-react";

const todayClasses = [
  {
    id: 1,
    title: "کاراته",
    coach: "محمد رضایی",
    time: "09:00 - 10:30",
    location: "سالن شماره ۱",
    athletes: 18,
    color: "bg-orange-500",
  },
  {
    id: 2,
    title: "تکواندو",
    coach: "علی محمدی",
    time: "11:00 - 12:30",
    location: "سالن شماره ۲",
    athletes: 15,
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "بدنسازی",
    coach: "رضا کریمی",
    time: "16:00 - 17:30",
    location: "سالن بدنسازی",
    athletes: 22,
    color: "bg-emerald-500",
  },
  {
    id: 4,
    title: "کیک‌بوکسینگ",
    coach: "امیر احمدی",
    time: "18:00 - 19:30",
    location: "سالن شماره ۱",
    athletes: 12,
    color: "bg-purple-500",
  },
];

const activities = [
  {
    id: 1,
    title: "ثبت‌نام ورزشکار جدید",
    description: "آرمان حسینی در رشته کاراته ثبت‌نام کرد.",
    time: "۱۰ دقیقه پیش",
    icon: UserPlus,
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    id: 2,
    title: "پرداخت شهریه",
    description: "شهریه ماهانه توسط سارا محمدی پرداخت شد.",
    time: "۳۰ دقیقه پیش",
    icon: CreditCard,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    id: 3,
    title: "ایجاد کلاس جدید",
    description: "کلاس تکواندو به برنامه باشگاه اضافه شد.",
    time: "۱ ساعت پیش",
    icon: CalendarCheck,
    color: "text-orange-500 bg-orange-500/10",
  },
];

export default function DashboardActivity() {
  return (
    <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">

      {/* Today's Classes */}
      <div className="rounded-2xl border border-border bg-card p-5 xl:col-span-2">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="font-bold">کلاس‌های امروز</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              برنامه برگزاری کلاس‌های باشگاه
            </p>
          </div>

          <span className="rounded-lg bg-orange-500/10 px-3 py-1.5 text-xs font-semibold text-orange-500">
            ۴ کلاس
          </span>
        </div>

        <div className="space-y-3">
          {todayClasses.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-xl border border-border p-4 transition-colors hover:bg-accent/50 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${item.color} text-white`}
                >
                  <Dumbbell size={21} />
                </div>

                <div>
                  <h4 className="text-sm font-bold">{item.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    مربی: {item.coach}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock size={15} />
                  {item.time}
                </span>

                <span className="flex items-center gap-1.5">
                  <MapPin size={15} />
                  {item.location}
                </span>

                <span className="flex items-center gap-1.5">
                  <Users size={15} />
                  {item.athletes} نفر
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activities */}
      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="mb-6">
          <h3 className="font-bold">آخرین فعالیت‌ها</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            رویدادهای اخیر باشگاه
          </p>
        </div>

        <div className="space-y-6">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div key={activity.id} className="flex gap-3">
                <div
                  className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${activity.color}`}
                >
                  <Icon size={19} />
                </div>

                <div className="min-w-0">
                  <h4 className="text-sm font-semibold">
                    {activity.title}
                  </h4>

                  <p className="mt-1 text-xs leading-6 text-muted-foreground">
                    {activity.description}
                  </p>

                  <span className="mt-1 block text-[11px] text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
