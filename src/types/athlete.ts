export type AthleteStatus = "ACTIVE" | "INACTIVE" | "EXPIRED";

export interface Athlete {
  id: number;
  firstName: string;
  lastName: string;
  nationalCode: string;
  phoneNumber: string;
  gender: "MALE" | "FEMALE";
  birthDate: string;
  sport: string;
  belt: string;
  membershipStart: string;
  membershipEnd: string;
  status: AthleteStatus;
  createdAt: string;
}
