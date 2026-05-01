export interface CategoryScores {
  frontend: number;
  backend: number;
  infraSupport: number;
  salesBiz: number;
  marketingSEO: number;
  productAgile: number;
}

export type CategoryKey = keyof CategoryScores;

export interface CategoryDetails {
  key: CategoryKey;
  label: string;
  color: string;
  description: string;
}

export interface Choice {
  id: string;
  text: string;
  scores: Partial<CategoryScores>;
}

export interface Question {
  id: number;
  title: string;
  description?: string;
  choices: Choice[];
}

export interface Persona {
  id: string;
  title: string;
  category: CategoryKey;
  description: string;
  traits: string[];
  idealRole: string;
  skills: string[];
  shortDescription: string;
}
