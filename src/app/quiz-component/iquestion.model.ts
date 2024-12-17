export interface IQuestion {
  question: string;
  answer: string;
  choices: string[];
  category: string; // Required property
  level?: string | null;
  }