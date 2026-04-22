import { BulletList, ImageWithText, StatsSection, TextWithSidebar } from '../components/sections';



export const InvestmentThesis = () => {
  return (
    <>
      <ImageWithText
        theme="light"
        content={{
          title: 'Contexto Estratégico',
          description: `En mercados secundarios validados, el retorno no proviene de especulación agresiva, sino de ejecución disciplinada y control financiero.

La tesis del proyecto se fundamenta en: compra alineada a mercado real, construcción bajo parámetros regionales prudentes, inclusión completa de costos de salida, modelación de sensibilidad, y estrategia flexible de salida.`,
          image: {
            url: '/images/contexto-2.jpg',
            alt: 'Contexto estratégico',
          },
          imagePosition: 'right',
        }}
      />

      <StatsSection
        theme="dark"
        content={{
          title: 'Oportunidad Específica',
          columns: 3,
          cards: [
            { title: 'Inversión total estimada', value: '$287,000' },
            { title: 'ARV base validado', value: '$339,000' },
            { title: 'ARV proyectado (+5%)', value: '~$356,000' },
          ],
        }}
      />

      <TextWithSidebar
        theme="light"
        content={{
          mainText:
            'La diferencia entre costo total y valor validado genera margen defendible bajo ejecución eficiente.',
          sidebar: {
            title: 'Arquitectura de Capital',
            items: [
              { label: 'Modelo', value: 'Boutique' },
              { label: 'Equity principal', value: 'Desarrollador' },
              { label: 'Capital privado', value: 'Posible' },
              { label: 'Horizonte estimado', value: '9–12 meses' },
              { label: 'Punto de equilibrio', value: '~$305,000' },
            ],
          },
          footerText: 'Se prioriza bajo apalancamiento y flexibilidad.',
        }}
      />

      <BulletList
        theme="dark"
        content={{
          title: 'Ventaja Competitiva',
          items: [
            'Validación real del mercado',
            'Inclusión completa de costos',
            'Sensibilidad modelada',
            'Control directo del equipo',
            'Estrategia dual (venta o renta)',
          ],
        }}
      />

      <ImageWithText
        theme="light"
        content={{
          title: 'Recomendación',
          description:
            'Proceder bajo disciplina estricta de ejecución. El proyecto busca retornos consistentes y defendibles, no especulación de alto riesgo.',
          image: {
            url: '/images/home-image-2.PNG',
            alt: 'Recomendación',
          },
          imagePosition: 'left',
        }}
      />
    </>
  );
};
