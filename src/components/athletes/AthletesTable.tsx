"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  Users,
} from "lucide-react";

import { athletes } from "@/data/athletes";
import type { Athlete, AthleteStatus } from "@/types/athlete";

const statusConfig: Record<
  AthleteStatus,
  { label: string; className: string }
> = {
  ACTIVE: {
    label: "فعال",
    className: "bg-green-500/10 text-green-600",
  },
  INACTIVE: {
    label: "غیرفعال",
    className: "bg-gray-500/10 text-muted-foreground",
  },
  EXPIRED: {
    label: "منقضی شده",
    className: "bg-red-500/10 text-red-500",
  },
};

export default function AthletesTable() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");

  const filteredAthletes = useMemo(() => {
    return athletes.filter((athlete: Athlete) => {
      const fullName = `${athlete.firstName} ${athlete.lastName}`;

      const matchesSearch =
        fullName.includes(search) ||
        athlete.phoneNumber.includes(search) ||
        athlete.nationalCode.includes(search);

      const matchesStatus =
        status === "ALL" || athlete.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold">لیست ورزشکاران</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            مدیریت اطلاعات و عضویت ورزشکاران باشگاه
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600"
        >
          <Plus size={18} />
          افزودن ورزشکار
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 sm:flex-row">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جست‌وجو نام، شماره تماس یا کد ملی..."
            className="h-11 w-full rounded-xl border border-border bg-background pr-10 pl-4 text-sm outline-none transition-colors focus:border-orange-500"
          />
        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-orange-500"
        >
          <option value="ALL">همه وضعیت‌ها</option>
          <option value="ACTIVE">فعال</option>
          <option value="INACTIVE">غیرفعال</option>
          <option value="EXPIRED">منقضی شده</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border p-4">
          <div className="flex items-center gap-2">
            <Users size={18} className="text-orange-500" />
            <span className="font-semibold">ورزشکاران</span>
          </div>

          <span className="text-sm text-muted-foreground">
            {filteredAthletes.length} ورزشکار
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-right text-sm">
            <thead className="bg-muted/50 text-muted-foreground">
              <tr>
                <th className="px-5 py-4 font-medium">ورزشکار</th>
                <th className="px-5 py-4 font-medium">شماره تماس</th>
                <th className="px-5 py-4 font-medium">رشته ورزشی</th>
                <th className="px-5 py-4 font-medium">کمربند</th>
                <th className="px-5 py-4 font-medium">پایان عضویت</th>
                <th className="px-5 py-4 font-medium">وضعیت</th>
                <th className="px-5 py-4 font-medium">عملیات</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border">
              {filteredAthletes.map((athlete) => {
                const athleteStatus = statusConfig[athlete.status];

                return (
                  <tr
                    key={athlete.id}
                    className="transition-colors hover:bg-muted/30"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-full bg-orange-500/10 font-bold text-orange-500">
                          {athlete.firstName.charAt(0)}
                        </div>

                        <div>
                          <p className="font-semibold">
                            {athlete.firstName} {athlete.lastName}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {athlete.nationalCode}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4" dir="ltr">
                      {athlete.phoneNumber}
                    </td>

                    <td className="px-5 py-4">
                      {athlete.sport}
                    </td>

                    <td className="px-5 py-4">
                      {athlete.belt}
                    </td>

                    <td className="px-5 py-4">
                      {athlete.membershipEnd}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-lg px-3 py-1.5 text-xs font-medium ${athleteStatus.className}`}
                      >
                        {athleteStatus.label}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          title="مشاهده"
                          className="rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
                        >
                          <Eye size={17} />
                        </button>

                        <button
                          type="button"
                          title="ویرایش"
                          className="rounded-lg p-2 text-blue-500 hover:bg-blue-500/10"
                        >
                          <Pencil size={17} />
                        </button>

                        <button
                          type="button"
                          title="حذف"
                          className="rounded-lg p-2 text-red-500 hover:bg-red-500/10"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {filteredAthletes.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-12 text-center">
                    <Users
                      size={32}
                      className="mx-auto mb-3 text-muted-foreground"
                    />
                    <p className="font-medium">ورزشکاری پیدا نشد</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      عبارت جست‌وجو یا فیلتر وضعیت را تغییر بده.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
