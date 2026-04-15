import { useState } from 'react';
import type { FileGalleryContent, BaseSectionProps } from '../../types/sections';
import { DocumentViewerModal, FileTypeIcon } from '../ui/DocumentAttachment';
import { ScrollReveal } from '../ui/ScrollReveal';

interface FileGalleryProps extends BaseSectionProps {
  content: FileGalleryContent;
}

export const FileGallery = ({ theme = 'light', content }: FileGalleryProps) => {
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

  const items = content.items;
  const active = items[viewerIndex];

  return (
    <section className={`${bgClass} px-6 py-16 md:py-20`}>
      <div className="mx-auto max-w-7xl">
        {(content.title || content.description) && (
          <ScrollReveal direction="up" distance={40} duration={0.7} start="top 85%" className="mb-12 max-w-2xl">
            {content.title && (
              <h2 className={`mb-4 text-3xl font-bold md:text-4xl ${textClass}`}>{content.title}</h2>
            )}
            {content.description && (
              <p className={`text-paragraph ${textMutedClass}`}>{content.description}</p>
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
          {items.map((item, i) => (
            <button
              key={`${item.url}-${i}`}
              type="button"
              onClick={() => {
                setViewerIndex(i);
                setViewerOpen(true);
              }}
              className={`cursor-pointer overflow-hidden rounded-2xl text-left transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isLight
                  ? 'border border-charcoal/15 bg-white/80 shadow-sm focus:ring-forest'
                  : 'border border-cream/15 bg-cream/5 focus:ring-sage'
              }`}
            >
              {item.type === 'image' ? (
                <>
                  <div className="relative aspect-[4/3] bg-charcoal/10">
                    <img
                      src={item.url}
                      alt={item.alt ?? item.label}
                      className="h-full w-full object-cover"
                    />
                    <span
                      className={`absolute right-2 top-2 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                        isLight ? 'bg-black/55 text-cream' : 'bg-cream/90 text-earth'
                      }`}
                    >
                      IMG
                    </span>
                  </div>
                  <div className="p-4">
                    <p className={`text-sm font-medium ${textClass}`}>{item.label}</p>
                    {item.caption && <p className={`mt-1 text-xs ${textMutedClass}`}>{item.caption}</p>}
                  </div>
                </>
              ) : (
                <div className="flex min-h-[200px] flex-col items-center justify-center gap-3 p-6 sm:min-h-[220px]">
                  <FileTypeIcon kind={item.type} />
                  <p className={`w-full text-center text-sm font-medium ${textClass}`}>{item.label}</p>
                  <span className={`text-xs font-semibold uppercase tracking-wide ${textMutedClass}`}>Ver</span>
                </div>
              )}
            </button>
          ))}
        </ScrollReveal>
      </div>

      {viewerOpen && active && (
        <DocumentViewerModal
          open={viewerOpen}
          onClose={() => setViewerOpen(false)}
          fileUrl={active.url}
          fileName={active.label}
          kind={active.type}
        />
      )}
    </section>
  );
};
