export interface TrainingClassOption {
  id: number;
  name: string;
  sportId: number;
}

export const trainingClasses: TrainingClassOption[] = [
  { id: 1, name: "کاراته مبتدی", sportId: 1 },
  { id: 2, name: "کاراته پیشرفته", sportId: 1 },
  { id: 3, name: "تکواندو مبتدی", sportId: 2 },
  { id: 4, name: "تکواندو پیشرفته", sportId: 2 },
  { id: 5, name: "کونگ‌فو عمومی", sportId: 3 },
  { id: 6, name: "کیک‌بوکسینگ عمومی", sportId: 4 },
];
