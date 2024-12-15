export interface BudgetCategory {
  name: string;
  allocated: number;
  spent: number;
}

export interface Budget {
  total: number;
  spent: number;
  remaining: number;
  categories: BudgetCategory[];
}