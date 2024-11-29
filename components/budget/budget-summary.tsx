'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Bed, UtensilsCrossed, Bus, Ticket, Package } from 'lucide-react';

interface BudgetSummaryProps {
  budget: {
    total: number;
    perPerson: number;
    breakdown: {
      accommodation: number;
      food: number;
      transportation: number;
      activities: number;
      misc: number;
    };
  };
}

const CATEGORY_LABELS = {
  accommodation: {
    title: 'Hospedaje',
    description: 'Incluye hoteles, hostales o apartamentos según el estilo de viaje seleccionado',
    icon: Bed
  },
  food: {
    title: 'Alimentación',
    description: 'Contempla desayuno, almuerzo y cena, combinando opciones locales y restaurantes',
    icon: UtensilsCrossed
  },
  transportation: {
    title: 'Transporte',
    description: 'Incluye transporte local, taxis y traslados dentro del destino',
    icon: Bus
  },
  activities: {
    title: 'Actividades',
    description: 'Tours, entradas a atracciones y experiencias culturales',
    icon: Ticket
  },
  misc: {
    title: 'Otros Gastos',
    description: 'Gastos imprevistos, compras pequeñas y emergencias',
    icon: Package
  }
};

export function BudgetSummary({ budget }: BudgetSummaryProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(amount);
  };

  return (
    <div className="space-y-6 w-full">
      <div>
        <h2 className="text-2xl font-bold mb-2 gradient-text">
          Resumen del Presupuesto
        </h2>
        <p className="text-muted-foreground">
          Desglose estimado de gastos para tu viaje
        </p>
      </div>

      <Card className="bg-black/30">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl gradient-text">Total Estimado</CardTitle>
          <CardDescription>Presupuesto total del viaje</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold neon-glow">{formatCurrency(budget.total)}</p>
          <p className="text-lg text-primary mt-2">
            {formatCurrency(budget.perPerson)} por persona
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {Object.entries(budget.breakdown).map(([category, amount]) => {
          const CategoryIcon = CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS].icon;
          return (
            <Card key={category} className="bg-black/30">
              <CardHeader className="py-2">
                <div className="flex items-center gap-2">
                  <CategoryIcon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">
                    {CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS].title}
                  </CardTitle>
                </div>
                <CardDescription className="text-sm">
                  {CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS].description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-primary">
                  {formatCurrency(amount)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {Math.round((amount / budget.total) * 100)}% del total
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}