export interface RouteConfig {
  path: string;
  label: string;
}

export const routes: RouteConfig[] = [
  { path: '/', label: 'Overview' },
  { path: '/evaluacion-oportunidad', label: 'Opportunity Assessment' },
  { path: '/analisis-comparativo', label: 'CMA' },
  { path: '/tesis-inversion', label: 'Investment Thesis' },
  { path: '/creacion-valor', label: 'Value Creation' },
  { path: '/ejecucion-estrategica', label: 'Strategic Execution' },
];
