import { BulletList, ImageWithText, StatsSection, TextWithSidebar } from '../components/sections';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop';

export const ValueCreation = () => {
  return (
    <>
      <ImageWithText
        theme="light"
        content={{
          title: 'Principios de Creación de Valor',
          description:
            'El valor del proyecto se construye mediante optimización inteligente y percepción estratégica, no mediante lujo costoso.',
          image: {
            url: PLACEHOLDER_IMAGE,
            alt: 'Creación de valor',
          },
          imagePosition: 'right',
        }}
      />

      <BulletList
        theme="dark"
        content={{
          title: 'Pilares Fundamentales',
          columns: 2,
          items: [
            'Eficiencia espacial',
            'Percepción de amplitud',
            'Adaptabilidad funcional',
            'Bajo mantenimiento',
            'Control presupuestario',
          ],
        }}
      />

      <BulletList
        theme="light"
        content={{
          title: 'Diferenciadores de Diseño',
          columns: 2,
          items: [
            'Planta abierta optimizada',
            'Espacio flexible (oficina / habitación adicional)',
            'Integración visual con área exterior',
            'Cocina funcional con isla',
            'Iluminación LED integral',
            'Preparación smart básica',
            'Acabados neutros de alta liquidez',
          ],
        }}
      />

      <StatsSection
        theme="dark"
        content={{
          title: 'Posicionamiento de Mercado',
          description: 'Segmentos objetivo',
          columns: 2,
          cards: [
            { title: 'Familia joven profesional', value: 'Segmento principal' },
            { title: 'Comprador relocating', value: 'Mercado objetivo' },
            { title: 'Usuario de segunda vivienda', value: 'Escapadas' },
            { title: 'Inversionista renta corta duración', value: 'Plan B' },
          ],
        }}
      />

      <TextWithSidebar
        theme="light"
        content={{
          mainText:
            'El enfoque enfatiza estilo de vida, naturaleza y equilibrio precio–calidad.',
          sidebar: {
            title: 'Estrategia Dual de Salida',
            items: [
              { label: 'Opción 1', value: 'Venta retail' },
              { label: 'Validación', value: 'Comparables' },
              { label: 'Opción 2', value: 'Renta corto plazo' },
              { label: 'Objetivo', value: 'Mitigación riesgo' },
            ],
          },
          footerText:
            'Esta flexibilidad reduce exposición a variaciones de absorción.',
        }}
      />

      <ImageWithText
        theme="dark"
        content={{
          title: 'Conclusión Estratégica',
          description: `La diferenciación del proyecto no reside en lujo extremo, sino en coherencia, precisión y eficiencia. La creación de valor es el resultado de diseño inteligente, disciplina financiera y validación real del mercado.`,
          image: {
            url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
            alt: 'Conclusión estratégica',
          },
          imagePosition: 'left',
        }}
      />
    </>
  );
};
