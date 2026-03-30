import type { ImageWithTextContent, BaseSectionProps } from '../../types/sections';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';

interface ImageWithTextProps extends BaseSectionProps {
  content: ImageWithTextContent;
}

export const ImageWithText = ({ theme = 'light', content }: ImageWithTextProps) => {
  const isLight = theme === 'light';
  const imageFirst = content.imagePosition === 'right';

  const bgClass = isLight ? 'bg-cream' : 'bg-forest';
  const textClass = isLight ? 'text-earth' : 'text-cream';
  const textMutedClass = isLight ? 'text-charcoal' : 'text-sage-dark';

  const imageBlock = (
    <ScrollReveal
      direction={imageFirst ? 'left' : 'right'}
      distance={50}
      duration={0.8}
      start="top 85%"
      className="overflow-hidden rounded-2xl aspect-[4/3] bg-charcoal/5 lg:aspect-auto lg:min-h-[400px]"
    >
      <img
        src={content.image.url}
        alt={content.image.alt}
        className="h-full w-full object-cover"
      />
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
    </section>
  );
};
