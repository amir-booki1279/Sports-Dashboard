export type AthleteSex = "MALE" | "FEMALE";

export type AthleteApiStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "ARCHIVED";

export type AthleteSportProfileStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "ARCHIVED";

export type BloodGroup =
  | "A_POSITIVE"
  | "A_NEGATIVE"
  | "B_POSITIVE"
  | "B_NEGATIVE"
  | "AB_POSITIVE"
  | "AB_NEGATIVE"
  | "O_POSITIVE"
  | "O_NEGATIVE"
  | "UNKNOWN";

export type BeltAssignmentType =
  | "INITIAL_BEGINNER"
  | "EXTERNAL_TRANSFER"
  | "INTERNAL_PROMOTION"
  | "MANUAL_CORRECTION";

export interface CreateAthleteSportProfileRequest {
  sportId: number;
  currentBeltId?: number;
  beltAssignedAt?: string;
  beltAssignmentType?: BeltAssignmentType;
  previousClubName?: string;
  certificateNumber?: string;
  certificateDate?: string;
  sportsInsuranceNumber?: string;
  notes?: string;
}

export interface AthleteRegistrationRequest {
  firstName: string;
  lastName: string;
  birthDate: string;
  sex: AthleteSex;
  mobileNumber: string;
  homeAddress: string;
  emergencyContactName: string;
  emergencyContactMobile: string;
  sportProfile: CreateAthleteSportProfileRequest;
  trainingClassId: number;

  nationalId?: string;
  email?: string;
  notes?: string;
  bloodGroup?: BloodGroup;
  guardianName?: string;
  guardianRelationship?: string;
  guardianMobile?: string;
  registeredOn?: string;
  joinedOn?: string;
}

export interface AthleteSportProfile {
  id: number;
  athleteId: number;
  sportId: number;
  sportName: string;
  currentBeltId?: number;
  currentBeltName?: string;
  beltAssignedAt?: string;
  beltAssignmentType?: BeltAssignmentType;
  previousClubName?: string;
  certificateNumber?: string;
  certificateDate?: string;
  sportsInsuranceNumber?: string;
  notes?: string;
  status: AthleteSportProfileStatus;
}

export interface AthleteApi {
  id: number;
  firstName: string;
  lastName: string;
  nationalId?: string;
  birthDate: string;
  sex: AthleteSex;
  mobileNumber: string;
  homeAddress: string;
  emergencyContactName: string;
  emergencyContactMobile: string;
  email?: string;
  bloodGroup?: BloodGroup;
  notes?: string;
  guardianName?: string;
  guardianRelationship?: string;
  guardianMobile?: string;
  registeredOn: string;
  status: AthleteApiStatus;
  sportProfiles: AthleteSportProfile[];
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface AthleteListQuery{
    name?:string,
    nationalId?:string,
    mobileNumber?:string,
    status?:AthleteApiStatus,
    sportId?:number,

    page?:number,
    size?:number,
    sortBy:string,
    direction?:"asc"|"desc",

    parameters:Record<string,string>
}

export type EnrollmentStatus = "ACTIVE" |"ARCHIVED";

export interface EnrollmentApi {
    id:number,
    athleteId:number,
    trainingClassId:number,
    status:EnrollmentStatus,
    joinedOn:string,
    leftOn?:string|null,
    rowVersion:number
}

export interface AthleteRegisterionResponse{
    athlete:AthleteApi,
    enrollment:EnrollmentApi
}