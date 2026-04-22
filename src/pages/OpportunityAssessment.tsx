import { ImageGrid, ImageWithText, StatsSection, TextWithSidebar } from '../components/sections';

const PLACEHOLDER_IMAGE = '/images/contexto-8.jpg';

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
            { title: 'Construcción living (1,522 sqft × $130)', value: '$197,860' },
            { title: 'Construcción garage (533 sqft × $65)', value: '$34,645' },
            { title: 'Construcción porche y exterior (206 sqft × $65)', value: '$16,900' },
            { title: 'Soft costs + permisos + contingencia', value: '$61,343' },
            { title: 'Inversión total estimada', value: '$355,000' },
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
            { title: 'Escenario Conservador ($443,863)', value: 'ROI ~10%' },
            { title: 'Escenario Objetivo ($492,109)', value: 'ROI ~13–14%' },
            { title: 'Escenario Optimista (+5% – $540,355)', value: 'ROI ~16%' },
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
          description: `El precio mínimo estimado para cubrir inversión total considerando salida es aproximadamente $318,246.

Por debajo de ese nivel, el margen se comprime significativamente. Por encima de $350,000, el proyecto entra en zona de retorno defendible.`,
          image: {
            url: '/images/contexto-2.jpg',
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
            url: '/images/contexto-6.jpg',
            alt: 'Land flipping',
          },
          imagePosition: 'right',
        }}
      />
      <ImageWithText
        theme="light"
        content={{
          title: 'Conclusión del CMA',
          description: `El mercado respalda un ARV conservador de $339,000. Con apreciación moderada del 5% en 12 meses, el rango proyectado puede situarse en $355,000–$356,000.`,
          image: {
            url: '/images/img-1-cma.png',
            alt: 'Conclusión CMA — comparable 1',
          },
          secondImage: {
            url: '/images/img-2-cma.png',
            alt: 'Conclusión CMA — comparable 2',
          },
          thirdImage: {
            url: '/images/img-3-cma.png',
            alt: 'Conclusión CMA — comparable 3',
          },
          fourthImage: {
            url: '/images/img-4-cma.png',
            alt: 'Conclusión CMA — comparable 4',
          },
          imagesLayout: 'grid2x2',
          imagePosition: 'left',
          attachments: [
            {
              url: '/files/CMA_FINAL_.xlsx',
              label: 'CMA_FINAL_.xlsx',
              type: 'excel',
            },
          ],
        }}
      />
      <ImageGrid
        theme="dark"
        content={{
          title: ' ',
          images: [
            { url: '/images/contexto-3.jpg', alt: 'Imagen 1' },
            { url: '/images/contexto-4.jpg', alt: 'Imagen 2' },
            { url: '/images/contexto-5.jpg', alt: 'Imagen 3' },
            { url: '/images/contexto-7.jpg', alt: 'Imagen 4' },
            { url: '/images/contexto-1.jpg', alt: 'Imagen 5' },
          
          ],
        }}
      />
    </>
  );
};
