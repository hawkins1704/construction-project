export interface RouteConfig {
  path: string;
  label: string;
}

export const routes: RouteConfig[] = [
  { path: '/', label: 'Inicio' },
  { path: '/contexto-y-analisis', label: 'Contexto y Análisis' },
  { path: '/plan-maestro-y-financiero', label: 'Plan Maestro y Financiero' },
  { path: '/oportunidad-de-inversion', label: 'Oportunidad de Inversión' },
  { path: '/propuesta-valor', label: 'Propuesta de valor' },
  { path: '/estetica-y-posicionamiento', label: 'Estética y Posicionamiento' },
];
