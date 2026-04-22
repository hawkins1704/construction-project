import {
  BulletList,
  HeroWithSidebar,
  ImageGrid,
  ImageWithText,
  StatsSection,
  Timeline,
} from '../components/sections';

const HOME_IMAGE_1 = '/images/home-image-1.PNG';
const HOME_IMAGE_2 = '/images/home-image-2.PNG';

export const Home = () => {
  return (
    <>
      <HeroWithSidebar
        content={{
          title: 'El Proyecto en Cifras y Concepto',
          mainText: `Fundamento del Proyecto: Eficiencia Evolutiva

Nuestra propuesta se aleja del metraje excesivo para enfocarse en la densidad de valor. Con un área total de 2,955 sqft, el diseño prioriza la habitabilidad inteligente: 2,064 sqft de área climatizada (Living Area) donde cada pie cuadrado ha sido optimizado para el flujo de vida moderna, complementado con 891 sqft de espacios funcionales y de transición (Garage, Porche y Exterior) que extienden la huella térmica de la casa sin elevar los costos operativos.`,
          sidebar: {
            title: 'Programa del proyecto',
            items: [
              { label: 'Área climatizada (Living)', value: '1,522 sqft' },
              { label: 'Garage', value: '533 sqft' },
              { label: 'Porche y exterior', value: '280 sqft' },
              { label: 'Área total bajo techo', value: '2,355 sqft' },
              { label: 'Lote', value: '0.292 acres (12,707 sqft)' },
            ],
          },
      
          backgroundImage: HOME_IMAGE_1,
        }}
      />

      <StatsSection
        theme="dark"
        content={{
          title: 'Fundamento Económico: Optimización de Activos',
          description:
            'El proyecto se basa en la Tasa de Retorno por Pie Cuadrado (Yield per SQFT). Al mantener una escala eficiente, reducimos el CAPEX inicial y los tiempos de ejecución, permitiendo un precio de salida competitivo que captura al segmento de mercado con mayor capacidad de cierre financiero en Oconee.',
          columns: 3,
          useSectionLabels: true,
          cards: [
            { title: 'Lote', value: '$45,000', section: 'Capex estimado' },
            { title: 'Construcción Living (1,522 × $130)', value: '$197,860', section: 'Capex estimado' },
            { title: 'Construcción Garage (533 × $55)', value: '$34,645', section: 'Capex estimado' },
            { title: 'Construcción Porche y Exterior (280 × $65)', value: '$16,900', section: 'Capex estimado' },
            { title: 'Soft cost (8%) + contingencia (10%)', value: '$61,343', section: 'Capex estimado' },
            { title: 'Total inversión', value: '$310,346', section: 'Capex estimado' },
            { title: 'Comparables', value: '$455,000', section: 'Validación de ARV' },
            { title: 'Proyección 12 meses', value: '$464,610', section: 'Validación de ARV' },
            { title: 'Comisión + closing (estimado)', value: '6.5% ($30,199)', section: 'Costos de Salida' },
            { title: 'Conservador ($230/sf)', value: '$81,481', subtitle: '28.30% · $419,060 ARV', section: 'Rango de Retorno con Salida Incluida' },
            { title: 'Objetivo ($255/sf)', value: '$124,065', subtitle: '35.33% · $464,610 ARV', section: 'Rango de Retorno con Salida Incluida' },
            { title: 'Optimista ($280/sf)', value: '$166,653', subtitle: '41.10% · $510,160 ARV', section: 'Rango de Retorno con Salida Incluida' },
          ],
        }}
      />

      <ImageWithText
        theme="light"
        content={{
          title: 'Ubicación Estratégica y Demanda',
          description: `Situado en un lote premium de 12,707 sqft, el emplazamiento capitaliza la migración hacia entornos naturales con conectividad técnica. La demanda en este sector busca la calidez de la madera tradicional de Carolina del Sur fusionada con estándares de eficiencia energética modernos, una combinación que nuestra propuesta "Halcón de Cedro" domina por completo.

Perfiles de demanda: Familias que buscan espacio y tranquilidad, compradores relocalizándose desde mercados más costosos, usuarios de segunda vivienda, inversionistas interesados en AB&B.`,
          image: {
            url: HOME_IMAGE_2,
            alt: 'Ubicación estratégica',
          },
          imagePosition: 'right',
        }}
      />

      <ImageWithText
        theme="dark"
        content={{
          title: 'Viabilidad Técnica y Financiera: Diagnóstico de Lote',
          description: 'Con una superficie de 0.292 (12,707 sqft), el diagnóstico revela un coeficiente de ocupación ideal que permite privacidad perimetral y una integración orgánica de la estructura. La orientación de la vivienda maximiza la luz natural y el drenaje pluvial, minimizando los movimientos de tierra complejos.',
          image: {
            url: HOME_IMAGE_1,
            alt: 'Diagnóstico del lote',
          },
          imagePosition: 'left',
          lists: [
            {
              title: 'Componentes del Diagnóstico',
              items: [
                'Compatibilidad de uso y restricciones',
                'Setbacks',
                'Dimensiones',
                'Encaje del diseño',
                'Acceso e infraestructuras (vías, servicios)',
                'Factores físicos: topografía, drenaje, vegetación',
                'Revisión de riesgos ambientales y servidumbre si aplica',
              ],
            },
            {
              title: 'Anexos clave en el sitio',
              items: [
                'Deed',
                'Survey',
                'Setbacks',
                'Dimensiones',
                'Vista aérea',
                'Plan Maestro',
                'Covenants',
              ],
            },
          ],
        }}
      />

      <ImageWithText
        theme="light"
        content={{
          title: 'Arquitectura del Capital',
          description: 'Estructuramos el financiamiento mediante una matriz híbrida que asegura liquidez en cada fase de la obra. Principio rector: Minimizar costos financieros, evitar sobreapalancamiento, mantener flexibilidad en salida.',
          image: {
            url: HOME_IMAGE_2,
            alt: 'Arquitectura del capital',
          },
          imagePosition: 'right',
          lists: [
            {
              title: 'El modelo contempla',
              items: [
                'Capital Base: Recursos propios lote o terreno',
                'Línea de Crédito de Construcción: Activación escalonada según hitos de inspección',
                'Fondo de Contingencia: 10% reservado para imprevistos de mercado',
              ],
            },
          ],
        }}
      />

      <BulletList
        theme="dark"
        content={{
          title: 'Análisis de Volatilidad de Márgenes',
          description:
            'Ante la fluctuación de los precios de la madera (Lumber futures), nuestro modelo implementa Sistema de Compras Anticipadas y Contratos de Precio Fijo con proveedores locales. Se modelan escenarios para medir sensibilidad del margen ante variaciones típicas. El objetivo no es optimismo, es mostrar rangos defendibles y mitigación por gestión.',
          items: [
            'Construcción +10% (inflación de materiales)',
            'Construcción -10% (excelente control de compras)',
            'Presión de mercado o absorción lenta',
            'Venta +5% (apreciación moderada en 12 meses)',
          ],
        }}
      />

      <section className="bg-cream px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-earth md:text-4xl">
              Plan Maestro de Desarrollo (Master Schedule)
            </h2>
            <p className="mx-auto max-w-2xl text-paragraph text-charcoal">
              Fases ejecutivas del proyecto y cronograma de ejecución crítica.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Timeline
              theme="light"
              content={{
                title: 'Fases ejecutivas del proyecto',
                embedded: true,
                phases: [
                  { phase: 1, title: 'Adquisición y verificación final del lote' },
                  { phase: 2, title: 'Permisos y coordinación técnica' },
                  { phase: 3, title: 'Inicio de obra + estructura' },
                  { phase: 4, title: 'MEP + cerramientos' },
                  { phase: 5, title: 'Acabados + punch list' },
                  { phase: 6, title: 'Marketing, posicionamiento y estrategia de salida' },
                  { phase: 7, title: 'Venta y cierre o preparación para la renta' },
                ],
              }}
            />
            <Timeline
              theme="light"
              content={{
                title: 'Cronograma de ejecución crítica',
                embedded: true,
                phases: [
                  {
                    phase: 1,
                    title: 'Validación final y permisos',
                    description: '1-2 meses',
                    items: [
                      'Revisión documental definitiva',
                      'Confirmación de encaje normativo',
                      'Gestión de permisos y aprobaciones',
                    ],
                  },
                  {
                    phase: 2,
                    title: 'Construcción estructural',
                    description: '3-4 meses',
                    items: [
                      'Movimiento de tierra',
                      'Cimentación',
                      'Estructura principal',
                      'Cerramientos',
                    ],
                  },
                  {
                    phase: 3,
                    title: 'Instalaciones y sistemas',
                    description: '2-3 meses',
                    items: [
                      'Eléctrico',
                      'Plomería',
                      'HVAC',
                      'Inspecciones intermedias',
                    ],
                  },
                  {
                    phase: 4,
                    title: 'Acabados finales',
                    description: '1-2 meses',
                    items: [
                      'Pisos',
                      'Carpintería',
                      'Pintura',
                      'Instalación de fixtures',
                    ],
                  },
                  {
                    phase: 5,
                    title: 'Comercialización',
                    items: [
                      'Posicionamiento digital',
                      'Fotografía profesional',
                      'Estrategia de precios',
                      'Activación canal de venta',
                      'Nota: El marketing se inicia antes de la finalización total para reducir tiempo de absorción.'
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
      </section>

      <StatsSection
        theme="dark"
        content={{
          title: 'Capital Humano y Roles Claves',
          description: 'Modelo boutique con roles claros',
          columns: 2,
          cards: [
            {
              title: 'Víctor',
              value: 'Dirección de Proyecto',
              subtitle: 'Estrategia y cumplimiento de visión',
            },
            {
              title: 'Ura',
              value: 'Lead Architect',
              subtitle: 'Diseño de eficiencia espacial y materiales',
            },
            {
              title: 'General Contractor (GC)',
              value: 'Ejecución técnica',
              subtitle: 'Gestión de cuadrillas',
            },
            {
              title: 'Santiago',
              value: 'Project Controller',
              subtitle: 'Control de costos y análisis de desviaciones',
            },
            {
              title: 'Eduardo',
              value: 'Realtor',
              subtitle: 'Análisis de precios, estrategia comercial, negociación y cierre',
            },
          ],
        }}
      />

      <section className="bg-cream px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-earth md:text-4xl">
              Recomendación Estratégica Final: La Visión &quot;Halcón de Cedro&quot;
            </h2>
            <p className="text-paragraph text-charcoal">
              Tras el diagnóstico técnico y el análisis de viabilidad financiera, nuestra conclusión es clara: el mercado en el condado de Oconee no demanda metros cuadrados, sino calidad de vida optimizada. La ejecución del Plan 1168D es nuestra hoja de ruta recomendada.
            </p>
          </div>
          <Timeline
            theme="light"
            content={{
              embedded: true,
              phases: [
                {
                  phase: 1,
                  title: 'Arbitraje de Valor',
                  description: 'Al integrar una construcción de alta gama en un lote eficiente de 13,057 sqft, eliminamos el sobrecosto de mantenimiento operativo, garantizando una propiedad altamente líquida y atractiva tanto para el usuario final como para futuros inversionistas.',
                },
                {
                  phase: 2,
                  title: 'Mitigación de Riesgos',
                  description: 'El uso de una estructura de madera estandarizada y el bloqueo de costos de materiales en la Fase 0 nos permite navegar con seguridad frente a la volatilidad del mercado de commodities en 2026, asegurando un margen neto predecible.',
                },
                {
                  phase: 3,
                  title: 'Coherencia con el Entorno',
                  description: '"Halcón de Cedro" no compite con arquitecturas del sector, lo complementa. La arquitectura propuesta eleva la plusvalía del sector, creando un corredor de diseño moderno que consolida a esta área como el nuevo estándar de habitabilidad en Oconee.',
                },
                {
                  phase: 4,
                  title: 'Dictamen',
                  description: 'Proceder con la ejecución inmediata. Capitalizar la baja fricción de este modelo arquitectónico para posicionar esta vivienda no solo como un hogar, sino como el activo inmobiliario más sólido y coherente de la región.',
                },
              ],
            }}
          />
        </div>
      </section>
      <ImageGrid
        theme="dark"
        content={{
          title: 'Imágenes del proyecto',
          images: [
            { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', alt: 'Imagen 1' },
            { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', alt: 'Imagen 2' },
            { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', alt: 'Imagen 3' },
            { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', alt: 'Imagen 4' },
            { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', alt: 'Imagen 5' },
            { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', alt: 'Imagen 6' },
          
          ],
        }}
      />
    </>
  );
};
