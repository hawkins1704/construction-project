import {
  ImageWithText,
  StatsSection,
  TextWithSidebar,
} from '../components/sections';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop';

export const StrategicExecution = () => {
  return (
    <>
      <ImageWithText
        theme="light"
        content={{
          title: 'Estética y Posicionamiento',
          description: `Este diseño es un excelente ejemplo de "Mountain Modern", lo cual encaja perfectamente en Oconee, SC. La propuesta combina la calidez de la madera tradicional de Carolina del Sur con estándares de eficiencia energética modernos.`,
          image: {
            url: PLACEHOLDER_IMAGE,
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
