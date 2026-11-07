"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const registrationData = [
  { month: "فروردین", athletes: 85 },
  { month: "اردیبهشت", athletes: 120 },
  { month: "خرداد", athletes: 105 },
  { month: "تیر", athletes: 160 },
  { month: "مرداد", athletes: 145 },
  { month: "شهریور", athletes: 190 },
  { month: "مهر", athletes: 230 },
  { month: "آبان", athletes: 210 },
  { month: "آذر", athletes: 280 },
];

const revenueData = [
  { month: "فروردین", revenue: 120 },
  { month: "اردیبهشت", revenue: 155 },
  { month: "خرداد", revenue: 140 },
  { month: "تیر", revenue: 190 },
  { month: "مرداد", revenue: 175 },
  { month: "شهریور", revenue: 220 },
  { month: "مهر", revenue: 260 },
  { month: "آبان", revenue: 240 },
  { month: "آذر", revenue: 310 },
];

export default function DashboardCharts() {
  return (
    <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {/* Registration Chart */}
      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="mb-6">
          <h3 className="text-base font-bold">
            روند ثبت‌نام ورزشکاران
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            آمار ثبت‌نام در ۹ ماه اخیر
          </p>
        </div>

        <div className="h-75 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={registrationData}>
              <defs>
                <linearGradient
                  id="athletesGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#f97316"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor="#f97316"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="var(--border)"
              />

              <XAxis
                dataKey="month"
                tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                orientation="right"
                tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="athletes"
                stroke="#f97316"
                strokeWidth={3}
                fill="url(#athletesGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="mb-6">
          <h3 className="text-base font-bold">
            درآمد باشگاه
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            درآمد ماهانه (میلیون تومان)
          </p>
        </div>

        <div className="h-75 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient
                  id="revenueGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#10b981"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor="#10b981"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="var(--border)"
              />

              <XAxis
                dataKey="month"
                tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                orientation="right"
                tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                strokeWidth={3}
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
