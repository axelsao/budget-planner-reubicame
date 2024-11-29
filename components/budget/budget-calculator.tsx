'use client';

import { useState } from 'react';
import { BudgetForm } from './budget-form';
import { BudgetSummary } from './budget-summary';
import { calculateBudget } from '@/lib/budget-calculator';
import { cn } from '@/lib/utils';
import type { DestinationId } from '@/lib/constants/destinations';
import type { TravelStyleId } from '@/lib/constants/travel-styles';

interface BudgetFormValues {
  duration: number;
  travelers: number;
  destination: DestinationId;
  travelStyle: TravelStyleId;
}

interface BudgetResult {
  total: number;
  perPerson: number;
  breakdown: {
    accommodation: number;
    food: number;
    transportation: number;
    activities: number;
    misc: number;
  };
}

export function BudgetCalculator() {
  const [budgetResult, setBudgetResult] = useState<BudgetResult | null>(null);

  const handleSubmit = (values: BudgetFormValues) => {
    const budget = calculateBudget(values);
    setBudgetResult(budget);
  };

  return (
    <div className="container mx-auto px-4">
      <div className={cn(
        "grid gap-6 transition-all duration-300",
        budgetResult ? "lg:grid-cols-2" : "max-w-2xl mx-auto"
      )}>
        <BudgetForm onSubmit={handleSubmit} />
        {budgetResult && (
          <BudgetSummary budget={budgetResult} />
        )}
      </div>
    </div>
  );
}