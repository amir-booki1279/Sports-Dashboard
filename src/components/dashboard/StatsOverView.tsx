import {
  Users,
  UserRound,
  CalendarCheck,
  Wallet,
} from "lucide-react";
import StatCard from "./StatCard";



const stats = [
  {
    title: "کل ورزشکاران",
    value: "۱,۲۸۴",
    description: "تعداد ورزشکاران ثبت‌شده",
    icon: Users,
    trend: 12.5,
    color: "orange" as const,
  },
  {
    title: "مربیان فعال",
    value: "۳۲",
    description: "مربیان مشغول به فعالیت",
    icon: UserRound,
    trend: 8.2,
    color: "blue" as const,
  },
  {
    title: "کلاس‌های فعال",
    value: "۱۸",
    description: "کلاس‌های در حال برگزاری",
    icon: CalendarCheck,
    trend: 4.5,
    color: "green" as const,
  },
  {
    title: "درآمد این ماه",
    value: "۲۸۵ میلیون",
    description: "درآمد ثبت‌شده در ماه جاری",
    icon: Wallet,
    trend: 15.3,
    color: "purple" as const,
  },
];

export default function StatsOverview() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </section>
  );
}
