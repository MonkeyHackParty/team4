export interface JobType {
  jobId: string;
  corporationId: number;
  startDate: string;
  updatedDate: string;
  endDate: string;
  status: number;
  title: string;
  postalCode: number;
  localGovernmentCode: number;
  workLocationPrefecture: string;
  workLocationCity: string;
  workLocationTown: string;
  workLocationBlock: string;
  workLocationBuilding: string;
  accessRoute: string;
  industryCode: string;
  officeAtmosphere: string;
  employmentTypeCode: number;
  employmentTypeNote: string;
  employmentPeriodCode: number;
  employmentPeriodStart: string;
  employmentPeriodEnd: string;
  employmentPeriodNote: string;
  occupationCode: string;
  occupationName: string;
  description: string;
  imgUrlPc: string;
  imgUrlSp: string;
  offerNumber: string;
  workingDayCode: number;
  workingDayNote: string;
  workingTimeStart: string;
  workingTimeEnd: string;
  workingTimeNote: string;
  breakTimeStart: string;
  breakTimeEnd: string;
  breakTimeNote: string;
  flexTime: number;
  flexTimeNote: string;
  holidayCode: number;
  holidayNote: string;
  overTime: number;
  overTimeAverage: string;
  salaryTypeCode: number;
  workingHours: string;
  salaryMax: number;
  salaryMin: number;
  salaryMaxTraining: number;
  salaryMinTraining: number;
  salaryNote: string;
  payRise: number;
  payRiseNote: string;
  bonus: number;
  bonusNote: string;
  transportationFee: number;
  transportationFeeNote: string;
  allowance: number;
  allowanceNote: string;
  insuranceNote: string;
  retirementAllowance: number;
  retirementAllowanceNote: string;
  retirement: number;
  retirementAge: number;
  retirementAgeNote: string;
  carCommuting: number;
  carCommutingNote: string;
  welfare: string;
  subsidy: number;
  subsidyImmigration: number;
  subsidyNote: string;
  subsidyMax: number;
  subsidyMin: number;
  requiredAcademicBackground: string;
  requiredExperience: string;
  requiredLicense: string;
  requiredPersonality: string;
  requiredWelcome: string;
  ageLimit: number;
  ageLimitDivision: number;
  ageLimitDetail: string;
  ageLimitReason: string;
  trialPeriod: number;
  trialPeriodNote: string;
  employmentDisabled: number;
  employmentDisabledNote: string;
  receptionMethod: string;
  receptionTel: string;
  receptionMail: string;
  receptionUrl: string;
  receptionForm: string;
  recruitmentDepartment: string;
  recruitmentOfficer: string;
  recruitmentOfficerTel: string;
  recruitmentOfficerMail: string;
  cpName: string;
  preventsmoke: string;
  yJobId: string;
}

export interface JobResponse {
  total: number;
  start: number;
  count: number;
  results: JobType[];
}
