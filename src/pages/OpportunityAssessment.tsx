import { ImageWithText, StatsSection, TextWithSidebar } from '../components/sections';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop';

export const OpportunityAssessment = () => {
  return (
    <>
      <ImageWithText
        theme="light"
        content={{
          title: 'Análisis Integral de la Oportunidad',
          description:
            'El proyecto parte de una evaluación financiera estructurada bajo supuestos prudentes y validación de mercado real.',
          image: {
            url: PLACEHOLDER_IMAGE,
            alt: 'Análisis de oportunidad',
          },
          imagePosition: 'right',
        }}
      />

      <StatsSection
        theme="dark"
        content={{
          title: 'Modelo Financiero Base',
          columns: 3,
          cards: [
            { title: 'Adquisición del lote', value: '$45,000' },
            { title: 'Construcción living (1,522 sqft × $115)', value: '$175,030' },
            { title: 'Construcción garage (533 sqft × $55)', value: '$29,315' },
            { title: 'Soft costs + permisos + contingencia', value: '$36,000' },
            { title: 'Inversión total estimada', value: '$287,000' },
          ],
        }}
      />

      <TextWithSidebar
        theme="light"
        content={{
          mainText:
            'El análisis incluye costos completos de salida (6.5%), incorporando comisión y gastos de cierre.',
          sidebar: {
            title: 'Validación del ARV',
            items: [
              { label: 'Comparable idéntico vendido', value: '$339,000' },
              { label: 'Comparable idéntico listado', value: '$339,000' },
              { label: 'Proyección prudente 12 meses (+5%)', value: '~$356,000' },
            ],
          },
        }}
      />

      <StatsSection
        theme="light"
        content={{
          title: 'Escenarios de Sensibilidad',
          columns: 3,
          cards: [
            { title: 'Escenario Conservador ($339,000)', value: 'ROI ~10%' },
            { title: 'Escenario Base ($349,000)', value: 'ROI ~13–14%' },
            { title: 'Escenario Optimista (+5% – $356,000)', value: 'ROI ~16%' },
          ],
        }}
      />

      <StatsSection
        theme="dark"
        content={{
          title: 'Sensibilidad a Costos de Construcción',
          columns: 3,
          cards: [
            { title: 'Construcción -10%', value: 'ROI ~17–18%' },
            { title: 'Construcción Base', value: 'ROI ~10%' },
            { title: 'Construcción +10%', value: 'ROI ~3–5%' },
          ],
        }}
      />

      <ImageWithText
        theme="light"
        content={{
          title: 'Punto de Equilibrio',
          description: `El precio mínimo estimado para cubrir inversión total considerando salida es aproximadamente $305,000.

Por debajo de ese nivel, el margen se comprime significativamente. Por encima de $339,000, el proyecto entra en zona de retorno defendible.`,
          image: {
            url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
            alt: 'Punto de equilibrio',
          },
          imagePosition: 'left',
        }}
      />

      <ImageWithText
        theme="dark"
        content={{
          title: 'Evaluación Tipo Land Flipping',
          description: `Analizando el lote de forma independiente: precio por sqft ≈ $3.48, validado por transacción real reciente. Sin desarrollo, el potencial especulativo del lote es limitado.

Conclusión: la creación de valor no proviene del terreno por sí solo, sino del desarrollo estratégico y eficiente.`,
          image: {
            url: PLACEHOLDER_IMAGE,
            alt: 'Land flipping',
          },
          imagePosition: 'right',
        }}
      />
    </>
  );
};
