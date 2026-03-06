import {
  BulletList,
  HeroWithSidebar,
  ImageGrid,
  ImageWithText,
  StatsSection,
  Timeline,
} from '../components/sections';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop';
const HERO_BG_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop';

export const Home = () => {
  return (
    <>
      <HeroWithSidebar
        content={{
          title: 'Fundamento del Proyecto',
          mainText: `Este proyecto desarrolla una vivienda unifamiliar de escala eficiente, diseñada para maximizar funcionalidad, estética neutra de alta reventa y control estricto de costos. La estrategia se basa en diferenciación inteligente (sin sobrecostos) y ejecución directa tipo desarrollador boutique familiar.`,
          sidebar: {
            title: 'Programa del proyecto',
            items: [
              { label: 'Área bajo aire (Living)', value: '1,522 sqft' },
              { label: 'Garage', value: '533 sqft' },
              { label: 'Área total bajo techo', value: '2,055 sqft' },
              { label: 'Lote', value: '13,075 sqft' },
            ],
          },
          footerText:
            'El enfoque no es lujo innecesario, sino una vivienda "correcta", bien resuelta, con bajo mantenimiento y adaptable a dos usos: venta retail o renta de corto plazo.',
          backgroundImage: HERO_BG_IMAGE,
        }}
      />

      <StatsSection
        theme="dark"
        content={{
          title: 'Fundamento Económico del Proyecto',
          description:
            'La economía del proyecto se sustenta en comparables idénticos validados y costos de construcción prudentes.',
          columns: 3,
          cards: [
            { title: 'Lote', value: '$45,000' },
            { title: 'Construcción living (1,522 × $115)', value: '$175,030' },
            { title: 'Construcción garage (533 × $55)', value: '$29,315' },
            { title: 'Soft costs + contingencia', value: '$36,000' },
            { title: 'Total inversión estimada', value: '$287,000', subtitle: 'CAPEX base' },
            { title: 'Comparable vendido', value: '$339,000', subtitle: 'Validación ARV' },
            { title: 'Comparable listado', value: '$339,000' },
            { title: 'Proyección 12 meses (+5%)', value: '~$356,000', subtitle: 'Prudente' },
            { title: 'Comisión + closing', value: '6.5%', subtitle: 'Costos de salida' },
            { title: 'Conservador', value: '~10%', subtitle: 'Rango de retorno' },
            { title: 'Base', value: '~13–14%' },
            { title: 'Optimista', value: '~16%' },
          ],
        }}
      />

      <ImageWithText
        theme="light"
        content={{
          title: 'Ubicación Estratégica y Demanda',
          description: `La ubicación presenta un equilibrio atractivo entre precio y estilo de vida: entorno natural, baja densidad y demanda consistente para vivienda principal y/o escapadas. El mercado muestra absorción real en el rango de $339k para el mismo modelo, reforzando la tesis de salida.

Perfiles de demanda principales: Familias que buscan espacio y tranquilidad, compradores relocando desde mercados más caros, usuarios de segunda vivienda, e inversionistas interesados en Airbnb (si regulación lo permite).`,
          image: {
            url: PLACEHOLDER_IMAGE,
            alt: 'Ubicación estratégica',
          },
          imagePosition: 'right',
        }}
      />

      <ImageWithText
        theme="dark"
        content={{
          title: 'Diagnóstico del Lote',
          description: `El lote (13,075 sqft) presenta condiciones aptas para desarrollo residencial estándar, con verificación documental y técnica respaldada por anexos.

Componentes del diagnóstico: Compatibilidad de uso y restricciones (covenants/HOA si aplica), setbacks, dimensiones y encaje del diseño, acceso e infraestructura (vías, servicios), factores físicos (topografía, drenaje, vegetación), y revisión de riesgos ambientales y de servidumbres.

Anexos clave: Deed, Survey, Setbacks y dimensiones, vista aérea, plan maestro, covenants.`,
          image: {
            url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
            alt: 'Diagnóstico del lote',
          },
          imagePosition: 'left',
        }}
      />

      <ImageWithText
        theme="light"
        content={{
          title: 'Arquitectura del Capital',
          description: `El proyecto se plantea con arquitectura de capital simple y eficiente, coherente con desarrollo boutique: capital de desarrollo (equity) aportado por el equipo, alternativa de capital privado a corto plazo si se desea escalar o reducir exposición, horizonte de inversión estimado: 9–12 meses (con margen a 14 por contingencias).

Principio rector: minimizar costos financieros, evitar sobreapalancamiento y mantener flexibilidad en salida.`,
          image: {
            url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
            alt: 'Arquitectura del capital',
          },
          imagePosition: 'right',
        }}
      />

      <BulletList
        theme="dark"
        content={{
          title: 'Análisis de Volatilidad de Márgenes',
          description:
            'Se modelan escenarios para medir sensibilidad del margen ante variaciones típicas. El objetivo no es "optimismo", sino mostrar rangos defendibles y mitigación por gestión.',
          items: [
            'Construcción +10% (inflación/materiales)',
            'Construcción -10% (excelente control de compras)',
            'Venta -10% (presión de mercado o absorción lenta)',
            'Venta +5% (apreciación moderada 12 meses)',
          ],
        }}
      />

      <Timeline
        theme="light"
        content={{
          title: 'Plan Maestro de Desarrollo',
          description: 'Fases ejecutivas del proyecto',
          duration: 'Duración objetivo: 9–12 meses.',
          phases: [
            { phase: 1, title: 'Adquisición y verificación final del lote' },
            { phase: 2, title: 'Permisos y coordinación técnica' },
            { phase: 3, title: 'Inicio de obra + estructura' },
            { phase: 4, title: 'MEP + cerramientos' },
            { phase: 5, title: 'Acabados + punch list' },
            {
              phase: 6,
              title: 'Marketing, posicionamiento y estrategia de salida',
            },
            {
              phase: 7,
              title: 'Venta y cierre / o preparación para renta (Plan B)',
            },
          ],
        }}
      />

      <StatsSection
        theme="dark"
        content={{
          title: 'Capital Humano y Roles Claves',
          description: 'Modelo boutique con roles claros',
          columns: 2,
          cards: [
            {
              title: 'Víctor',
              value: 'Dirección estratégica',
              subtitle: 'Presupuesto, control de costos, decisiones clave',
            },
            {
              title: 'Ura',
              value: 'Diseño interior',
              subtitle: 'Experiencia del espacio, valor percibido sin subir CAPEX',
            },
            {
              title: 'Santiago',
              value: 'Marketing digital',
              subtitle: 'Narrativa visual, posicionamiento',
            },
            {
              title: 'Eduardo (Realtor)',
              value: 'Estrategia comercial',
              subtitle: 'Análisis de pricing, negociación y cierre',
            },
          ],
        }}
      />

      <ImageWithText
        theme="light"
        content={{
          title: 'Recomendación Estratégica Final',
          description: `El proyecto es coherente y defendible porque: el ARV está validado con comparables idénticos; los costos están modelados con criterio prudente e incluyen salida; la estrategia contempla sensibilidad, control de riesgo y plan alterno.

Recomendación: proceder bajo disciplina de compras, cronograma estricto y estrategia de salida flexible (venta o renta), priorizando consistencia y calidad ejecutiva por encima de especulación.`,
          image: {
            url: PLACEHOLDER_IMAGE,
            alt: 'Recomendación estratégica',
          },
          imagePosition: 'left',
        }}
      />
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
