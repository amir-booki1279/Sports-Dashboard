import type { LucideIcon } from "lucide-react";
import { ArrowDownLeft, ArrowUpLeft } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  trend: number;
  color: "orange" | "blue" | "green" | "purple";
}

const colorStyles = {
  orange: "bg-orange-500/10 text-orange-500",
  blue: "bg-blue-500/10 text-blue-500",
  green: "bg-emerald-500/10 text-emerald-500",
  purple: "bg-purple-500/10 text-purple-500",
};

export default function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  color,
}: StatCardProps) {
  const isPositive = trend >= 0;

  return (
    <div className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div
          className={`flex size-12 items-center justify-center rounded-xl ${colorStyles[color]}`}
        >
          <Icon size={23} />
        </div>

        <span
          className={`flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold ${
            isPositive
              ? "bg-emerald-500/10 text-emerald-500"
              : "bg-red-500/10 text-red-500"
          }`}
        >
          {isPositive ? (
            <ArrowUpLeft size={14} />
          ) : (
            <ArrowDownLeft size={14} />
          )}

          {Math.abs(trend)}٪
        </span>
      </div>

      <div className="mt-5">
        <p className="text-sm text-muted-foreground">{title}</p>

        <h3 className="mt-2 text-2xl font-black tracking-tight">
          {value}
        </h3>

        <p className="mt-2 text-xs text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
