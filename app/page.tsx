import { MainNav } from '@/components/main-nav';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Map, Wallet, Palmtree, Globe2 } from 'lucide-react';
import { BudgetCalculator } from '@/components/budget/budget-calculator';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-10">
            <Globe2 className="w-96 h-96 text-primary animate-pulse" />
          </div>
          
          <div className="space-y-8 py-4">
            <div className="flex items-center justify-center gap-4">
              <Palmtree className="h-8 w-8 text-primary animate-bounce" />
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl gradient-text">
                Planifica tu viaje de manera inteligente
              </h1>
              <Plane className="h-8 w-8 text-primary animate-bounce" />
            </div>
            
            <p className="text-xl max-w-2xl mx-auto neon-glow">
              Herramienta avanzada de presupuesto para viajeros que buscan experiencias únicas sin comprometer sus finanzas.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <BudgetCalculator />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <Plane className="h-8 w-8 mb-2" />
              <CardTitle>Modo Viajero</CardTitle>
              <CardDescription>
                Elige entre diferentes estilos de viaje según tu presupuesto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Modo económico</li>
                <li>Modo estándar</li>
                <li>Modo premium</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Map className="h-8 w-8 mb-2" />
              <CardTitle>Inteligencia de Destinos</CardTitle>
              <CardDescription>
                Información detallada sobre costos y recomendaciones locales
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Costos de vida local</li>
                <li>Mejores temporadas</li>
                <li>Consejos de seguridad</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Wallet className="h-8 w-8 mb-2" />
              <CardTitle>Gestión Financiera</CardTitle>
              <CardDescription>
                Herramientas avanzadas para el control de gastos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Conversión de moneda</li>
                <li>División de gastos</li>
                <li>Seguimiento en tiempo real</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}