export interface RouteConfig {
  path: string;
  label: string;
}

export const routes: RouteConfig[] = [
  { path: '/', label: 'Inicio' },
  { path: '/evaluacion-oportunidad', label: 'Contexto y Análisis' },
  { path: '/analisis-comparativo', label: 'Plan Maestro y Financiero' },
  { path: '/tesis-inversion', label: 'Oportunidad de Inversión' },
  { path: '/creacion-valor', label: 'Propuesta de valor' },
  { path: '/ejecucion-estrategica', label: 'Estética y Funcionamiento' },
];
