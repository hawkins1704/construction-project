import { BulletList, FileGallery, ImageGrid, ImageWithText, TextWithSidebar } from '../components/sections';

const PLACEHOLDER_IMAGE = '/images/maestro-1.jpg';

export const CMA = () => {
  return (
    <>
      <ImageWithText
        theme="dark"
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
        theme="light"
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
        theme="dark"
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

      <FileGallery
        theme="light"
        content={{
          title: 'PLANITRON',
          description: '',
          columns: 3,
          items: [
            {
              url: '/files/Loan Calculator Planitron Desafio 2026.jpg',
              label: 'Loan Calculator Planitron Desafio 2026',
              type: 'image',
              alt: 'Loan Calculator Planitron Desafio 2026',
            },
            {
              url: '/files/Construction Wizard Project Timeline Desafio 2026.jpg',
              label: 'Construction Wizard Project Timeline Desafio 2026',
              type: 'image',
              alt: 'Construction Wizard Project Timeline Desafio 2026',
            },
            {
              url: '/files/Desafio 2026.docx',
              label: 'Desafio 2026',
              type: 'word',
              alt: 'Desafio 2026',
            },
            {
              url: '/files/planitron-ai-takeoff-2026-04-13-92.pdf',
              label: 'Planitron AI Takeoff',
              type: 'pdf',
              alt: 'Planitron AI Takeoff',
            },
            {
              url: '/files/planitron-ai MEP-analysis-2026-04-13.pdf',
              label: 'Planitron AI MEP Analysis',
              type: 'pdf',
              alt: 'Planitron AI MEP Analysis',
            },
            {
              url: '/files/planitron-Full -analysis-2026-04-13.pdf',
              label: 'Planitron AI Full Analysis',
              type: 'pdf',
              alt: 'Planitron AI Full Analysis',
            },

            
          ],
        }}
      />

      <ImageGrid
        theme="dark"
        content={{
          title: ' ',
          images: [
            { url: '/images/maestro-4.jpg', alt: 'Imagen 1' },
            { url: '/images/maestro-5.jpg', alt: 'Imagen 2' },
            { url: '/images/maestro-6.jpg', alt: 'Imagen 3' },
            { url: '/images/maestro-7.jpg', alt: 'Imagen 4' },
            { url: '/images/maestro-8.jpg', alt: 'Imagen 5' },
            { url: '/images/maestro-9.jpg', alt: 'Imagen 6' },
            { url: '/images/maestro-10.jpg', alt: 'Imagen 7' },
            { url: '/images/maestro-11.jpg', alt: 'Imagen 8' },
          ],
        }}
      />
    </>
  );
};
