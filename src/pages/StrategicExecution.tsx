import {
  BulletList,
  ImageWithText,
  StatsSection,
  TextWithSidebar,
  Timeline,
} from '../components/sections';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop';

export const StrategicExecution = () => {
  return (
    <>
      <ImageWithText
        theme="light"
        content={{
          title: 'Modelo de Ejecución Boutique',
          description: `El proyecto será ejecutado bajo un modelo de desarrollo boutique con supervisión directa del equipo desarrollador. A diferencia de modelos de volumen masivo, esta estructura permite: toma de decisiones ágil, control estricto del presupuesto, seguimiento cercano del cronograma, ajustes estratégicos en tiempo real, y reducción de desviaciones financieras. El enfoque no es escala, sino precisión.`,
          image: {
            url: PLACEHOLDER_IMAGE,
            alt: 'Modelo boutique',
          },
          imagePosition: 'right',
        }}
      />

      <Timeline
        theme="dark"
        content={{
          title: 'Plan Maestro de Desarrollo',
          duration: 'Duración estimada total: 9–12 meses',
          phases: [
            {
              phase: 1,
              title: 'Validación Final y Permisos (1–2 meses)',
              items: [
                'Revisión documental definitiva',
                'Confirmación de encaje normativo',
                'Gestión de permisos y aprobaciones',
              ],
            },
            {
              phase: 2,
              title: 'Construcción Estructural (3–4 meses)',
              items: [
                'Movimiento de tierra',
                'Cimentación',
                'Estructura principal',
                'Cerramientos',
              ],
            },
            {
              phase: 3,
              title: 'Instalaciones y Sistemas (2–3 meses)',
              items: ['Eléctrico', 'Plomería', 'HVAC', 'Inspecciones intermedias'],
            },
            {
              phase: 4,
              title: 'Acabados Finales (1–2 meses)',
              items: ['Pisos', 'Carpintería', 'Pintura', 'Instalación de fixtures'],
            },
            {
              phase: 5,
              title: 'Comercialización (paralela a fase final)',
              items: [
                'Posicionamiento digital',
                'Fotografía profesional',
                'Estrategia de pricing',
                'Activación del canal de venta',
              ],
            },
          ],
        }}
      />

      <TextWithSidebar
        theme="light"
        content={{
          title: 'Gobernanza y Control Financiero',
          mainText:
            'Se implementará una estructura interna básica de gobernanza con controles clave. El objetivo es evitar desviaciones silenciosas que erosionen el margen.',
          sidebar: {
            title: 'Controles',
            items: [
              { label: 'Presupuesto', value: 'Cerrado antes inicio' },
              { label: 'Órdenes de cambio', value: 'Control estricto' },
              { label: 'Comparativa', value: 'Costos reales vs proyectados' },
              { label: 'Revisión', value: 'Mensual del margen' },
              { label: 'Decisiones críticas', value: 'Autorización centralizada' },
            ],
          },
        }}
      />

      <StatsSection
        theme="dark"
        content={{
          title: 'Matriz de Riesgos y Estrategia de Mitigación',
          columns: 2,
          cards: [
            {
              title: '1. Aumento costos construcción',
              value: 'Mitigación',
              subtitle: 'Compras anticipadas, contratos cerrados, comparativas múltiples',
            },
            {
              title: '2. Disminución precio venta',
              value: 'Mitigación',
              subtitle: 'Estrategia dual (venta o renta), pricing estratégico',
            },
            {
              title: '3. Retrasos en permisos',
              value: 'Mitigación',
              subtitle: 'Gestión anticipada y documentación completa desde el inicio',
            },
            {
              title: '4. Absorción lenta mercado',
              value: 'Mitigación',
              subtitle: 'Activación temprana de marketing y flexibilidad de salida',
            },
          ],
        }}
      />

      <StatsSection
        theme="light"
        content={{
          title: 'Capital Humano y Roles Claves',
          description: 'El modelo boutique se apoya en participación directa del núcleo desarrollador',
          columns: 2,
          cards: [
            {
              title: 'Víctor',
              value: 'Dirección Estratégica y Financiera',
              subtitle: 'Estructura de capital, control presupuestario, decisiones clave',
            },
            {
              title: 'Ura',
              value: 'Diseño Interior y Experiencia Espacial',
              subtitle: 'Acabados, coherencia estética, valor percibido',
            },
            {
              title: 'Santiago',
              value: 'Marketing y Posicionamiento Digital',
              subtitle: 'Narrativa visual, presencia online, captación',
            },
            {
              title: 'Eduardo',
              value: 'Estrategia Comercial y Cierre',
              subtitle: 'Pricing, negociación, ejecución de la venta',
            },
          ],
        }}
      />

      <ImageWithText
        theme="dark"
        content={{
          title: 'Conclusión de Ejecución Estratégica',
          description: `El principal diferenciador del proyecto no es el diseño ni el mercado, sino la ejecución disciplinada. El modelo boutique permite: control financiero directo, reducción de riesgo especulativo, adaptabilidad ante cambios del mercado, y coherencia entre planificación y resultado. El proyecto demuestra que la precisión operativa puede ser más determinante que la escala.`,
          image: {
            url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
            alt: 'Conclusión ejecución',
          },
          imagePosition: 'left',
        }}
      />
    </>
  );
};
