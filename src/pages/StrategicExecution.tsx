import {
  BulletList,
  ImageWithText,
  StatsSection,
  TextWithSidebar,
} from '../components/sections';



export const StrategicExecution = () => {
  return (
    <>
      <TextWithSidebar
        theme="dark"
        content={{
          title: 'Halcón Dorado y el mercado Oconee (2026)',
          mainText: `Para el proyecto Halcón Dorado, el análisis de mercado en Oconee, South Carolina (2026) nos permite identificar un perfil de comprador muy específico. No estamos vendiendo solo una casa de 3 habitaciones; estamos vendiendo un "Refugio de Estatus".

Aquí tienes el desglose del Buyer Persona y los motivos detrás de esta selección:`,
          sidebar: {
            title: 'Contexto',
            items: [
              { label: 'Proyecto', value: 'Halcón Dorado' },
              { label: 'Mercado', value: 'Oconee, SC' },
              { label: 'Enfoque', value: 'Refugio de Estatus' },
            ],
          },
        }}
      />

      <BulletList
        theme="light"
        content={{
          title: 'El Perfil: "The Affluent Trailblazer" (El Pionero Afluente)',
          description: '1. Datos demográficos y psicográficos',
          columns: 1,
          items: [
            'Edad: 45 a 65 años.',
            'Perfil: Profesionales de alto nivel de Greenville o Atlanta que buscan una segunda residencia, o Baby Boomers activos en fase de pre-retiro.',
            'Ingresos: HHI (Household Income) superior a $180,000 USD anuales.',
            'Intereses: Náutica (Lago Keowee/Hartwell), senderismo en las Blue Ridge Mountains, coleccionismo de vinos y tecnología Smart Home.',
          ],
        }}
      />

      <TextWithSidebar
        theme="dark"
        content={{
          title: 'BUYER PERSON',
          mainText: `A. El Factor "Escapismo de Lujo"

Oconee se ha consolidado en 2026 como el "Hamptons del Sur". El comprador ideal ya tiene una residencia principal urbana y busca en la Halcón Dorado una desconexión total sin perder las comodidades de la ciudad. El diseño Modern Mountain Craftsman con el siding ocre le da esa sensación de "cabaña" pero con la ejecución técnica de una mansión moderna.

B. Valoración del "Turnkey" (Llave en mano)

Este perfil de comprador no tiene tiempo para gestionar obras. Valoran que el proyecto incluya:

• Logística resuelta: Un cronograma de 12 meses ya planificado.
• Curaduría de materiales: Prefieren pagar un sobreprecio por el HardiePanel y los Shingles de alta gama que nosotros ya especificamos, porque saben que significa bajo mantenimiento.

C. La Necesidad de "Socialización Privada"

Motivo por el cual nuestra Summer Kitchen y el Fire Pit son los ganchos de venta principales. Este comprador no va a bares; invita a sus amigos a su casa. El área trasera de la Halcón Dorado está diseñada precisamente para este ritual social de estatus.

D. Conciencia de Inversión (Smart Asset)

A diferencia de un comprador de primera vivienda, este perfil entiende el ARV ($526k) y el LTV. Compran la casa como un activo que se revaloriza. Saben que Oconee tiene una oferta limitada de lotes de 13,000+ sqft con este nivel de diseño arquitectónico.`,
          sidebar: {
            title: 'Ejes del perfil',
            items: [
              { label: 'A', value: 'Escapismo de lujo' },
              { label: 'B', value: 'Turnkey / logística' },
              { label: 'C', value: 'Socialización privada' },
              { label: 'D', value: 'Activo (ARV / LTV)' },
            ],
          },
        }}
      />

      <ImageWithText
        theme="light"
        content={{
          title: 'Estética y Posicionamiento',
          description: `Este diseño es un excelente ejemplo de "Mountain Modern", lo cual encaja perfectamente en Oconee, SC. La propuesta combina la calidez de la madera tradicional de Carolina del Sur con estándares de eficiencia energética modernos.`,
          image: {
            url: '/images/home-image-1.PNG',
            alt: 'Mountain Modern - Halcón de Cedro',
          },
          imagePosition: 'right',
        }}
      />

      <TextWithSidebar
        theme="dark"
        content={{
          title: 'Diagnóstico del Lote y Huella (Footprint)',
          mainText: `Aprovechamiento de Fachada: El diseño presenta una fachada frontal estrecha con un garaje de carga frontal integrado, ideal para maximizar el espacio lateral en el lote de 13,057 sqft.

Geometría: Uso de techos a dos aguas (Gables) pronunciados que facilitan el drenaje de nieve/lluvia, típicos de la arquitectura de Carolina del Sur.

Relación Exterior: El plano destaca una integración fluida con el entorno mediante un "Outdoor Living" en la parte posterior y un porche de entrada que actúa como zona de transición térmica.`,
          sidebar: {
            title: 'Resumen de huella',
            items: [
              { label: 'Lote', value: '13,057 sqft' },
              { label: 'Garaje frontal', value: 'Integrado' },
              { label: 'Techos', value: 'Gables pronunciados' },
              { label: 'Outdoor Living', value: 'Parte posterior' },
            ],
          },
        }}
      />

      <TextWithSidebar
        theme="light"
        content={{
          title: 'Plan Maestro: Distribución Funcional',
          mainText: `Planta única (One-story living), altamente demandada por su accesibilidad:

Zona Social Open-Concept: La cocina con isla central se integra con el comedor y el "Living Room", creando un eje de convivencia de casi 40 pies de profundidad.

Suite Principal Privada: Ubicada en el ala posterior derecha para máxima privacidad, con acceso directo al área de lavandería a través del clóset (un detalle de diseño premium).

Habitaciones Secundarias: Dos dormitorios adicionales (BR 2 y BR 3) situados en el ala opuesta, compartiendo un baño completo, ideal para familias o configuración de oficina/estudio.`,
          sidebar: {
            title: 'Distribución',
            items: [
              { label: 'Zona social', value: '~40 pies' },
              { label: 'Suite principal', value: 'Ala posterior' },
              { label: 'Dormitorios', value: 'BR 2 y BR 3' },
              { label: 'Estilo', value: 'One-story' },
            ],
          },
        }}
      />

      <StatsSection
        theme="dark"
        content={{
          title: 'Especificaciones de Construcción (Madera y Acabados)',
          description: 'De acuerdo a las elevaciones (Front, Rear, Left, Right side). Propuesta de Valor: "Textura y tradición en madera con estética contemporánea".',
          columns: 2,
          cards: [
            {
              title: 'Revestimiento (Siding)',
              value: 'Vertical Board & Batten',
              subtitle: 'Combinado con Lap Siding',
            },
            {
              title: 'Carpintería',
              value: 'Ventanales verticales',
              subtitle: 'Maximizan entrada de luz natural en Living Area',
            },
            {
              title: 'Garaje',
              value: '588 sqft',
              subtitle: 'Dos vehículos, profundidad para almacenamiento técnico o herramientas',
            },
            {
              title: 'Estética',
              value: 'Mountain Modern',
              subtitle: 'Textura y tradición en madera con estética contemporánea',
            },
          ],
        }}
      />

      <StatsSection
        theme="light"
        content={{
          title: 'Arquitectura de Espacios (Cifras Reales del Plano)',
          description: 'Distribución optimizada para eficiencia térmica y vida al aire libre en Oconee.',
          columns: 3,
          cards: [
            {
              title: 'Área climatizada',
              value: '2,064 sqft',
              subtitle: 'Eficiencia térmica optimizada',
            },
            {
              title: 'Espacios de transición',
              value: '303 sqft',
              subtitle: 'Porche frontal (111 sqft) + Outdoor Living posterior (192 sqft)',
            },
            {
              title: 'Almacenamiento',
              value: 'Pantry + Mudroom',
              subtitle: 'Estratégicos al entrar desde el garaje',
            },
          ],
        }}
      />

      
    </>
  );
};
