import { useState } from 'react';
import type { ImageGridContent, BaseSectionProps } from '../../types/sections';
import { ImageViewer } from '../ui/ImageViewer';
import { ScrollReveal } from '../ui/ScrollReveal';

interface ImageGridProps extends BaseSectionProps {
  content: ImageGridContent;
}

export const ImageGrid = ({ theme = 'light', content }: ImageGridProps) => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);
  const isLight = theme === 'light';
  const columns = content.columns ?? 3;

  const bgClass = isLight ? 'bg-cream' : 'bg-forest';
  const textClass = isLight ? 'text-earth' : 'text-cream';
  const textMutedClass = isLight ? 'text-charcoal' : 'text-sage-dark';

  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <section className={`${bgClass} px-6 py-16 md:py-20`}>
      <div className="mx-auto max-w-7xl">
        {(content.title || content.description) && (
          <ScrollReveal direction="up" distance={40} duration={0.7} start="top 85%" className="mb-12 max-w-2xl">
            {content.title && (
              <h2 className={`mb-4 text-3xl font-bold md:text-4xl ${textClass}`}>
                {content.title}
              </h2>
            )}
            {content.description && (
              <p className={`text-base ${textMutedClass}`}>{content.description}</p>
            )}
          </ScrollReveal>
        )}

        <ScrollReveal
          direction="up"
          distance={50}
          duration={0.8}
          start="top 85%"
          staggerChildren
          staggerDelay={0.1}
          className={`grid gap-6 ${gridCols[columns]}`}
        >
          {content.images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setViewerIndex(i);
                setViewerOpen(true);
              }}
              className={`cursor-pointer overflow-hidden rounded-2xl bg-charcoal/5 text-left transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isLight ? 'focus:ring-forest' : 'focus:ring-sage'
              }`}
            >
              <div className="aspect-[4/3]">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              {img.caption && (
                <p className={`p-4 text-sm ${textMutedClass}`}>{img.caption}</p>
              )}
            </button>
          ))}
        </ScrollReveal>
      </div>

      {viewerOpen && (
        <ImageViewer
          images={content.images}
          currentIndex={viewerIndex}
          onClose={() => setViewerOpen(false)}
          onNavigate={setViewerIndex}
        />
      )}
    </section>
  );
};
