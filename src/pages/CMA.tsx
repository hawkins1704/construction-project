import { BulletList, ImageWithText,  TextWithSidebar } from '../components/sections';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop';

export const CMA = () => {
  return (
    <>
      <ImageWithText
        theme="light"
        content={{
          title: 'Validación Técnica del Valor de Mercado',
          description:
            'Se analizaron cinco propiedades comparables con características equivalentes: 1,400–1,600 sqft, construcción nueva, diseño similar, ubicación dentro del mismo entorno residencial. Dos comparables idénticos validan un precio actual de $339,000.',
          image: {
            url: PLACEHOLDER_IMAGE,
            alt: 'Análisis comparativo',
          },
          imagePosition: 'right',
        }}
      />

      <TextWithSidebar
        theme="dark"
        content={{
          title: 'Precio por Pie Cuadrado',
          mainText:
            'Promedio estimado: $221–$222 por sqft. Aplicando este rango a 1,522 sqft: 1,522 × $222 ≈ $338,000. Lo anterior confirma consistencia con el comparable vendido en $339,000.',
          sidebar: {
            title: 'Resumen',
            items: [
              { label: 'Promedio $/sqft', value: '$221–$222' },
              { label: 'Área living', value: '1,522 sqft' },
              { label: 'ARV calculado', value: '~$338,000' },
              { label: 'Comparable vendido', value: '$339,000' },
            ],
          },
        }}
      />

      <BulletList
        theme="light"
        content={{
          title: 'Ajustes Técnicos Considerados',
          description: 'No se identificaron ajustes materiales que alteren el ARV base.',
          items: [
            'Año de construcción (nuevo)',
            'Tamaño equivalente',
            'Calidad estándar comparable',
            'Garage similar',
            'Misma zona residencial',
          ],
        }}
      />

      <ImageWithText
        theme="dark"
        content={{
          title: 'Conclusión del CMA',
          description: `El mercado respalda un ARV conservador de $339,000. Con apreciación moderada del 5% en 12 meses, el rango proyectado puede situarse en $355,000–$356,000.`,
          image: {
            url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
            alt: 'Conclusión CMA',
          },
          imagePosition: 'left',
        }}
      />
    </>
  );
};
