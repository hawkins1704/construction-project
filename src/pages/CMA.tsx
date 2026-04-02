import { BulletList, ImageGrid, ImageWithText,  TextWithSidebar } from '../components/sections';

const PLACEHOLDER_IMAGE = '/images/maestro-1.jpg';

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
            url: '/images/maestro-2.jpg',
            alt: 'Conclusión CMA',
          },
          secondImage: {
            url: '/images/maestro-3.jpg',
            alt: 'Conclusión CMA',
          },
          imagesLayout: 'sideBySide',
          imagePosition: 'left',
        }}
      />
      <ImageGrid
        theme="light"
        content={{
          title: ' ',
          images: [
            { url: '/images/maestro-4.jpg', alt: 'Imagen 1' },
            { url: '/images/maestro-5.jpg', alt: 'Imagen 2' },
            { url: '/images/maestro-6.jpg', alt: 'Imagen 3' },
            { url: '/images/maestro-7.jpg', alt: 'Imagen 4' },
          ],
        }}
      />
    </>
  );
};
