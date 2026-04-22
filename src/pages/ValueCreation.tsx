import { BulletList, ImageWithText, StatsSection } from '../components/sections';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop';

export const ValueCreation = () => {
  return (
    <>
      <ImageWithText
        theme="light"
        content={{
          title: 'THE GOLDEN STANDARD OF OCONEE LIVING',
          description:
            'Un estándar de amenidades que combina lujo orgánico, tecnología, detalles a medida y resiliencia—pensado para la vida en las Carolinas y el comprador de 2026 en adelante.',
          image: {
            url: '/images/home-image-1.PNG',
            alt: 'Residencia en Oconee',
          },
          imagePosition: 'right',
        }}
      />

      <ImageWithText
        theme="dark"
        content={{
          title: 'Lujo orgánico y funcionalidad moderna',
          description: 'Cuatro ejes que definen la propuesta de valor de la vivienda: exterior vivido, tecnología eficiente, interiores con sello propio y resiliencia para vivir o desconectar con tranquilidad.',
          image: {
            url: '/images/home-image-2.PNG',
            alt: 'Espacio de vida interior y exterior',
          },
          imagePosition: 'left',
        }}
      />

      <BulletList
        theme="light"
        content={{
          title: '1. El "Santuario Exterior" (Wellness & Entertainment)',
          description: 'En Oconee, el patio trasero es donde ocurre la vida.',
          items: [
            'Summer Kitchen de Grado Profesional: Parrilla integrada de acero inoxidable 304, mini-nevera de bebidas y encimera de piedra natural (Granito o Pizarra).',
            'The Fire Circle (Fogatero): Un área de fogata circular con piedra laja (flagstone) y asientos integrados de madera tratada, ideal para el clima de montaña.',
            'Outdoor Spa Connection: Dejar la pre-instalación (eléctrica y reforzamiento de suelo) lista para un Hot Tub de hidromasaje. Es un "must" para casas de descanso en SC.',
          ],
        }}
      />

      <BulletList
        theme="dark"
        content={{
          title: '2. Tecnología y Eficiencia (Smart & Green)',
          description: 'El comprador moderno valora el ahorro y el control desde el móvil.',
          items: [
            'Smart Home Ecosystem: Termostatos inteligentes (Nest/Ecobee), cerraduras digitales y sistema de sonido integrado en el Great Room y el porche trasero.',
            'EV Charging Station: Instalación de un cargador de Nivel 2 en el garaje para vehículos eléctricos. Esto posiciona la casa para el futuro inmediato (2026+).',
            'Iluminación Arquitectónica LED: Luces indirectas que resalten el Siding Vertical ocre y las vigas de madera por la noche.',
          ],
        }}
      />

      <BulletList
        theme="light"
        content={{
          title: '3. Interiores "Signature" (Custom Touches)',
          description: 'Detalles que hacen que la casa se sienta construida a medida.',
          items: [
            'Estación de Café/Bar Empotrada: Un pequeño mueble con estantería flotante de madera y conexión para máquina de espresso, situado entre la cocina y el área social.',
            'The Mudroom (Cuarto de Transición): Un área organizada al entrar desde el garaje con bancos de madera y ganchos artesanales, esencial para el estilo de vida activo (botas de senderismo, equipo de pesca).',
            'Chimenea de Doble Lado o de Piedra de Río: Una chimenea imponente que use piedra local de Carolina del Sur, conectando visualmente el interior con la naturaleza exterior.',
          ],
        }}
      />

      <BulletList
        theme="dark"
        content={{
          title: '4. Seguridad y Resiliencia (Peace of Mind)',
          description: 'Vital para propiedades de segunda vivienda o retiros.',
          items: [
            'Generador de Respaldo (Transfer Switch): Pre-instalación para un generador automático (Whole-house generator), muy valorado en zonas boscosas propensas a tormentas.',
            'Sistema de Filtración de Agua: Un sistema de purificación para toda la casa, garantizando agua de calidad superior.',
          ],
        }}
      />

      <StatsSection
        theme="light"
        content={{
          title: 'Impacto en el plan financiero',
          description:
            'Agregar estas amenidades suele representar un incremento del 5% al 8% en el costo de construcción, pero puede elevar el precio de venta final entre un 15% y un 20%.',
          columns: 2,
          cards: [
            { title: 'Incremento en costo de construcción', value: '5% – 8%', subtitle: 'Estimado por paquete de amenidades' },
            { title: 'Potencial de alza en precio de venta', value: '15% – 20%', subtitle: 'Según mercado y comparables' },
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
    </>
  );
};
