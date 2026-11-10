import { z } from "zod";

const jalaliDateSchema = z
  .string()
  .regex(/^\d{4}\/\d{2}\/\d{2}$/, "تاریخ باید به فرمت 1405/08/19 باشد");

export const athleteSchema = z.object({
  firstName: z.string().trim().min(1, "نام الزامی است"),

  lastName: z.string().trim().min(1, "نام خانوادگی الزامی است"),

  birthDate: z.string().min(1, "تاریخ تولد الزامی است"),

  sex: z.enum(["MALE", "FEMALE"], {
    error: "جنسیت را انتخاب کنید",
  }),

  mobileNumber: z.string().trim().min(1, "شماره موبایل الزامی است"),

  homeAddress: z.string().trim().min(1, "آدرس الزامی است"),

  emergencyContactName: z
    .string()
    .trim()
    .min(1, "نام شخص اضطراری الزامی است"),

  emergencyContactMobile: z
    .string()
    .trim()
    .min(1, "شماره تماس اضطراری الزامی است"),

  sportProfile: z.object({
    sportId: z.number().int().positive("رشته ورزشی را انتخاب کنید"),

    currentBeltId: z.number().int().positive().optional(),

    beltAssignedAt: jalaliDateSchema.optional(),

    beltAssignmentType: z
      .enum([
        "INITIAL_BEGINNER",
        "EXTERNAL_TRANSFER",
        "INTERNAL_PROMOTION",
        "MANUAL_CORRECTION",
      ])
      .optional(),

    previousClubName: z.string().optional(),
    certificateNumber: z.string().optional(),
    certificateDate: jalaliDateSchema.optional(),
    sportsInsuranceNumber: z.string().optional(),
    notes: z.string().optional(),
  }),

  trainingClassId: z.number().int().positive("کلاس تمرینی را انتخاب کنید"),

  nationalId: z.string().optional(),
  email: z.email("ایمیل معتبر نیست").optional(),

  notes: z.string().optional(),

  bloodGroup: z
    .enum([
      "A_POSITIVE",
      "A_NEGATIVE",
      "B_POSITIVE",
      "B_NEGATIVE",
      "AB_POSITIVE",
      "AB_NEGATIVE",
      "O_POSITIVE",
      "O_NEGATIVE",
      "UNKNOWN",
    ])
    .optional(),

  guardianName: z.string().optional(),
  guardianRelationship: z.string().optional(),
  guardianMobile: z.string().optional(),

  registeredOn: jalaliDateSchema.optional(),
  joinedOn: jalaliDateSchema.optional(),
});

export type AthleteFormValues = z.infer<typeof athleteSchema>;
