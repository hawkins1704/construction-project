import { useState } from 'react';
import type { ImageWithTextContent, BaseSectionProps } from '../../types/sections';
import { Button } from '../ui/Button';
import { DocumentAttachment } from '../ui/DocumentAttachment';
import { ImageViewer } from '../ui/ImageViewer';
import { ScrollReveal } from '../ui/ScrollReveal';

interface ImageWithTextProps extends BaseSectionProps {
  content: ImageWithTextContent;
}

export const ImageWithText = ({ theme = 'light', content }: ImageWithTextProps) => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);
  const isLight = theme === 'light';
  const imageFirst = content.imagePosition === 'right';
  const imagesLayout = content.imagesLayout ?? 'stack';
  const isGridLayout = imagesLayout === 'grid2x2';
  const gridImages = isGridLayout
    ? ([content.image, content.secondImage, content.thirdImage, content.fourthImage].filter(Boolean) as {
        url: string;
        alt: string;
      }[])
    : [];
  const hasTwoImages = Boolean(content.secondImage) && !isGridLayout;
  const viewerImages = isGridLayout ? gridImages : hasTwoImages ? [content.image, content.secondImage!] : [content.image];

  const bgClass = isLight ? 'bg-cream' : 'bg-forest';
  const textClass = isLight ? 'text-earth' : 'text-cream';
  const textMutedClass = isLight ? 'text-charcoal' : 'text-sage-dark';

  const imageFrameClass =
    'overflow-hidden rounded-2xl aspect-[4/3] bg-charcoal/5 lg:aspect-auto lg:min-h-[280px]';

  const imageButtonClass =
    'cursor-pointer overflow-hidden text-left transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 ' +
    (isLight ? 'focus:ring-forest' : 'focus:ring-sage');

  const pairContainerClass = hasTwoImages
    ? imagesLayout === 'sideBySide'
      ? 'flex flex-col gap-4 sm:flex-row sm:items-stretch'
      : 'flex flex-col gap-4'
    : '';

  const singleImageWrapperClass = `${imageFrameClass} lg:min-h-[400px]`;

  const imageBlock = (
    <ScrollReveal
      direction={imageFirst ? 'left' : 'right'}
      distance={50}
      duration={0.8}
      start="top 85%"
      className={
        isGridLayout
          ? 'grid grid-cols-2 gap-4'
          : hasTwoImages
            ? pairContainerClass
            : singleImageWrapperClass
      }
    >
      {isGridLayout ? (
        gridImages.map((img, i) => (
          <button
            key={`${img.url}-${i}`}
            type="button"
            onClick={() => {
              setViewerIndex(i);
              setViewerOpen(true);
            }}
            className={`${imageButtonClass} ${imageFrameClass} min-h-[140px] sm:min-h-[180px] lg:min-h-[220px]`}
          >
            <img src={img.url} alt={img.alt} className="h-full w-full object-cover" />
          </button>
        ))
      ) : hasTwoImages ? (
        <>
          <button
            type="button"
            onClick={() => {
              setViewerIndex(0);
              setViewerOpen(true);
            }}
            className={`${imageButtonClass} ${imageFrameClass} min-h-0 flex-1 sm:min-h-[240px] lg:min-h-[320px]`}
          >
            <img
              src={content.image.url}
              alt={content.image.alt}
              className="h-full w-full object-cover"
            />
          </button>
          <button
            type="button"
            onClick={() => {
              setViewerIndex(1);
              setViewerOpen(true);
            }}
            className={`${imageButtonClass} ${imageFrameClass} min-h-0 flex-1 sm:min-h-[240px] lg:min-h-[320px]`}
          >
            <img
              src={content.secondImage!.url}
              alt={content.secondImage!.alt}
              className="h-full w-full object-cover"
            />
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => {
            setViewerIndex(0);
            setViewerOpen(true);
          }}
          className={`${imageButtonClass} ${singleImageWrapperClass}`}
        >
          <img
            src={content.image.url}
            alt={content.image.alt}
            className="h-full w-full object-cover"
          />
        </button>
      )}
    </ScrollReveal>
  );

  const textBlock = (
    <ScrollReveal
      direction={imageFirst ? 'right' : 'left'}
      distance={50}
      duration={0.8}
      start="top 85%"
      className="flex flex-col justify-center"
    >
      <h2 className={`mb-4 text-3xl font-bold md:text-4xl ${textClass}`}>
        {content.title}
      </h2>
      {content.description && (
        <p className={`mb-6 text-paragraph leading-relaxed ${textMutedClass}`}>{content.description}</p>
      )}
      {content.attachments && content.attachments.length > 0 && (
        <div className="mb-6 flex flex-col gap-3">
          {content.attachments.map((file, i) => (
            <DocumentAttachment
              key={`${file.url}-${i}`}
              fileUrl={file.url}
              fileName={file.label}
              kind={file.type}
              theme={theme}
            />
          ))}
        </div>
      )}
      {content.lists?.map((list, i) => (
        <div key={i} className="mb-6 last:mb-0">
          <h4 className={`mb-3 text-sm font-semibold uppercase tracking-wider ${textClass}`}>
            {list.title}
          </h4>
          <ul className={`space-y-2 ${textMutedClass}`}>
            {list.items.map((item, j) => (
              <li key={j} className="flex items-start gap-2">
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${isLight ? 'bg-forest' : 'bg-sage'}`} />
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {content.button && (
        <Button
          variant="primary"
          theme={theme}
          href={content.button.href}
        >
          {content.button.label}
        </Button>
      )}
    </ScrollReveal>
  );

  return (
    <section className={`${bgClass} px-6 py-16 md:py-20`}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {imageFirst ? textBlock : imageBlock}
          {imageFirst ? imageBlock : textBlock}
        </div>
      </div>

      {viewerOpen && (
        <ImageViewer
          images={viewerImages}
          currentIndex={viewerIndex}
          onClose={() => setViewerOpen(false)}
          onNavigate={setViewerIndex}
        />
      )}
    </section>
  );
};
