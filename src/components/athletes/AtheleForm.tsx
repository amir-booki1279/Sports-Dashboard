"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  athleteSchema,
  type AthleteFormValues,
} from "@/lib/validations/athlete-schema";
import FormField from "../layout/FormField";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { sports } from "@/data/sports";
import { trainingClasses } from "@/data/training-classes";
import { belts } from "@/data/belts";
import { Textarea } from "../ui/textarea";

export default function AthleteForm() {
  const form = useForm<AthleteFormValues>({
    resolver: zodResolver(athleteSchema),

    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      sex: "MALE",
      mobileNumber: "",
      homeAddress: "",
      emergencyContactName: "",
      emergencyContactMobile: "",

      sportProfile: {
        sportId: 0,
      },

      trainingClassId: 0,
    },
  });

  const onSubmit = (values: AthleteFormValues) => {
    console.log("Athlete data:", values);
  };

return (
  <form
    onSubmit={form.handleSubmit(onSubmit)}
    className="space-y-6"
  >
    {/* اطلاعات شخصی */}
    <section className="space-y-4">
      <h3 className="font-semibold">اطلاعات شخصی</h3>

      <div className="grid gap-4 md:grid-cols-2">
        <FormField<AthleteFormValues>
          label="نام"
          name="firstName"
          register={form.register}
          error={form.formState.errors.firstName?.message}
          placeholder="نام ورزشکار"
        />

        <FormField<AthleteFormValues>
          label="نام خانوادگی"
          name="lastName"
          register={form.register}
          error={form.formState.errors.lastName?.message}
          placeholder="نام خانوادگی"
        />

        <FormField<AthleteFormValues>
          label="تاریخ تولد"
          name="birthDate"
          register={form.register}
          error={form.formState.errors.birthDate?.message}
          placeholder="مثلاً 1385/05/20"
        />
        <div className="space-y-2">
            <Label>جنسیت</Label>
            <Controller
                control={form.control}
                name="sex"
                render={({field})=>(
                    <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="انتخاب جنسیت"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="MALE">مرد</SelectItem>
                            <SelectItem value="FEMELE">زن</SelectItem>

                        </SelectContent>
                    </Select>
                )}
            />

            {form.formState.errors.sex?.message && (
                <p className="text-sm text-destructive">
                    {form.formState.errors.sex.message}
                </p>
            )}

        </div>
        <div className="space-y-2">
  <Label>رشته ورزشی</Label>

  <Controller
    control={form.control}
    name="sportProfile.sportId"
    render={({ field }) => (
      <Select
        value={field.value ? String(field.value) : ""}
        onValueChange={(value) => {
          field.onChange(Number(value));
          form.setValue("trainingClassId", 0);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="انتخاب رشته ورزشی" />
        </SelectTrigger>

        <SelectContent>
          {sports.map((sport) => (
            <SelectItem key={sport.id} value={String(sport.id)}>
              {sport.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )}
  />

  <p className="text-sm text-destructive">
    {form.formState.errors.sportProfile?.sportId?.message}
  </p>
</div>

<div className="space-y-2">
  <Label>کلاس تمرینی</Label>

  <Controller
    control={form.control}
    name="trainingClassId"
    render={({ field }) => (
      <Select
        value={field.value ? String(field.value) : ""}
        onValueChange={(value) => field.onChange(Number(value))}
        disabled={!form.watch("sportProfile.sportId")}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="انتخاب کلاس" />
        </SelectTrigger>

        <SelectContent>
          {trainingClasses
            .filter(
              // eslint-disable-next-line react-hooks/incompatible-library
              (item) => item.sportId === form.watch("sportProfile.sportId")
            )
            .map((item) => (
              <SelectItem key={item.id} value={String(item.id)}>
                {item.name}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    )}
  />

  <p className="text-sm text-destructive">
    {form.formState.errors.trainingClassId?.message}
  </p>
</div>
        <FormField<AthleteFormValues>
          label="شماره موبایل"
          name="mobileNumber"
          register={form.register}
          error={form.formState.errors.mobileNumber?.message}
          placeholder="09123456789"
        />

        <FormField<AthleteFormValues>
          label="کد ملی"
          name="nationalId"
          register={form.register}
          error={form.formState.errors.nationalId?.message}
          placeholder="کد ملی"
        />
        <FormField<AthleteFormValues>
  label="نام شخص اضطراری"
  name="emergencyContactName"
  register={form.register}
  error={form.formState.errors.emergencyContactName?.message}
  placeholder="نام و نام خانوادگی"
/>

<FormField<AthleteFormValues>
  label="شماره تماس اضطراری"
  name="emergencyContactMobile"
  register={form.register}
  error={form.formState.errors.emergencyContactMobile?.message}
  placeholder="09123456789"
/>

      </div>
    </section>
    <section className="space-y-4">
  <h3 className="font-semibold">اطلاعات تکمیلی</h3>

  <div className="grid gap-4 md:grid-cols-2">
    {/* کمربند */}
    <div className="space-y-2">
      <Label>کمربند فعلی</Label>

      <Controller
        control={form.control}
        name="sportProfile.currentBeltId"
        render={({ field }) => (
          <Select
            value={field.value ? String(field.value) : ""}
            onValueChange={(value) => field.onChange(Number(value))}
            disabled={!form.watch("sportProfile.sportId")}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="انتخاب کمربند" />
            </SelectTrigger>

            <SelectContent>
              {belts
                .filter(
                  (belt) =>
                    belt.sportId === form.watch("sportProfile.sportId")
                )
                .map((belt) => (
                  <SelectItem key={belt.id} value={String(belt.id)}>
                    {belt.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>

    {/* گروه خونی */}
    <div className="space-y-2">
      <Label>گروه خونی</Label>

      <Controller
        control={form.control}
        name="bloodGroup"
        render={({ field }) => (
          <Select
            value={field.value ?? ""}
            onValueChange={field.onChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="انتخاب گروه خونی" />
            </SelectTrigger>

            <SelectContent>
              {[
                "A_POSITIVE",
                "A_NEGATIVE",
                "B_POSITIVE",
                "B_NEGATIVE",
                "AB_POSITIVE",
                "AB_NEGATIVE",
                "O_POSITIVE",
                "O_NEGATIVE",
                "UNKNOWN",
              ].map((group) => (
                <SelectItem key={group} value={group}>
                  {group.replace("_", " ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>

    <FormField<AthleteFormValues>
      label="نام سرپرست"
      name="guardianName"
      register={form.register}
      placeholder="نام و نام خانوادگی"
    />

    <FormField<AthleteFormValues>
      label="نسبت با ورزشکار"
      name="guardianRelationship"
      register={form.register}
      placeholder="مثلاً پدر یا مادر"
    />

    <FormField<AthleteFormValues>
      label="موبایل سرپرست"
      name="guardianMobile"
      register={form.register}
      placeholder="09123456789"
    />

    <FormField<AthleteFormValues>
      label="شماره بیمه ورزشی"
      name="sportProfile.sportsInsuranceNumber"
      register={form.register}
      placeholder="شماره بیمه ورزشی"
    />

    <FormField<AthleteFormValues>
      label="نام باشگاه قبلی"
      name="sportProfile.previousClubName"
      register={form.register}
      placeholder="نام باشگاه"
    />

    <FormField<AthleteFormValues>
      label="شماره گواهینامه"
      name="sportProfile.certificateNumber"
      register={form.register}
      placeholder="شماره گواهینامه"
    />
  </div>
</section>
<section className="space-y-4">
  <h3 className="font-semibold">اطلاعات عضویت</h3>

  <div className="grid gap-4 md:grid-cols-2">
    <FormField<AthleteFormValues>
      label="تاریخ ثبت‌نام"
      name="registeredOn"
      register={form.register}
      error={form.formState.errors.registeredOn?.message}
      placeholder="1405/08/19"
    />

    <FormField<AthleteFormValues>
      label="تاریخ شروع عضویت"
      name="joinedOn"
      register={form.register}
      error={form.formState.errors.joinedOn?.message}
      placeholder="1405/08/19"
    />

    <FormField<AthleteFormValues>
      label="تاریخ تخصیص کمربند"
      name="sportProfile.beltAssignedAt"
      register={form.register}
      error={form.formState.errors.sportProfile?.beltAssignedAt?.message}
      placeholder="1405/08/19"
    />

    <FormField<AthleteFormValues>
      label="تاریخ دریافت گواهینامه"
      name="sportProfile.certificateDate"
      register={form.register}
      error={form.formState.errors.sportProfile?.certificateDate?.message}
      placeholder="1405/08/19"
    />
  </div>

  <div className="space-y-2">
    <Label>توضیحات</Label>

    <Textarea
      {...form.register("notes")}
      placeholder="توضیحات مربوط به ورزشکار..."
      className="min-h-24"
    />
  </div>
</section>



    <Button type="submit" className="w-full">
      بررسی اطلاعات
    </Button>
  </form>
);
return (
  <form
    onSubmit={form.handleSubmit(onSubmit)}
    className="space-y-6"
  >
    {/* اطلاعات شخصی */}
    <section className="space-y-4">
      <h3 className="font-semibold">اطلاعات شخصی</h3>

      <div className="grid gap-4 md:grid-cols-2">
        <FormField<AthleteFormValues>
          label="نام"
          name="firstName"
          register={form.register}
          error={form.formState.errors.firstName?.message}
          placeholder="نام ورزشکار"
        />

        <FormField<AthleteFormValues>
          label="نام خانوادگی"
          name="lastName"
          register={form.register}
          error={form.formState.errors.lastName?.message}
          placeholder="نام خانوادگی"
        />

        <FormField<AthleteFormValues>
          label="تاریخ تولد"
          name="birthDate"
          register={form.register}
          error={form.formState.errors.birthDate?.message}
          placeholder="مثلاً 1385/05/20"
        />

        <FormField<AthleteFormValues>
          label="شماره موبایل"
          name="mobileNumber"
          register={form.register}
          error={form.formState.errors.mobileNumber?.message}
          placeholder="09123456789"
        />

        <FormField<AthleteFormValues>
          label="کد ملی"
          name="nationalId"
          register={form.register}
          error={form.formState.errors.nationalId?.message}
          placeholder="کد ملی"
        />
      </div>
    </section>

    <Button type="submit" className="w-full">
      بررسی اطلاعات
    </Button>
  </form>
);


}
