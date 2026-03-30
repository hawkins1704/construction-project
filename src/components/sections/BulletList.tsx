import type { BulletListContent, BaseSectionProps } from '../../types/sections';
import { ScrollReveal } from '../ui/ScrollReveal';

interface BulletListProps extends BaseSectionProps {
  content: BulletListContent;
}

export const BulletList = ({ theme = 'light', content }: BulletListProps) => {
  const isLight = theme === 'light';
  const cols = content.columns ?? 1;

  const bgClass = isLight ? 'bg-cream' : 'bg-forest';
  const textClass = isLight ? 'text-earth' : 'text-cream';
  const textMutedClass = isLight ? 'text-charcoal' : 'text-sage-dark';

  return (
    <section className={`${bgClass} px-6 py-16 md:py-20`}>
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" distance={40} duration={0.8}>
          {content.title && (
            <h2 className={`mb-4 text-3xl font-bold md:text-4xl ${textClass}`}>
              {content.title}
            </h2>
          )}
          {content.description && (
            <p className={`mb-8 text-paragraph ${textMutedClass}`}>{content.description}</p>
          )}
          <ul
            className={`grid gap-4 ${
              cols === 2 ? 'md:grid-cols-2 md:gap-x-12' : ''
            } space-y-3`}
          >
            {content.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${isLight ? 'bg-forest' : 'bg-sage'}`} />
                <span className={`text-base ${textMutedClass}`}>{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
};
