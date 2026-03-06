import type { StatsSectionContent, BaseSectionProps } from '../../types/sections';
import { ScrollReveal } from '../ui/ScrollReveal';

interface StatsSectionProps extends BaseSectionProps {
  content: StatsSectionContent;
}

export const StatsSection = ({ theme = 'light', content }: StatsSectionProps) => {
  const isLight = theme === 'light';
  const cols = content.columns ?? 3;

  const bgClass = isLight ? 'bg-cream' : 'bg-forest';
  const textClass = isLight ? 'text-earth' : 'text-cream';
  const textMutedClass = isLight ? 'text-charcoal' : 'text-sage-dark';
  const cardBgClass = isLight ? 'bg-white border-charcoal/10' : 'bg-forest-light/50 border-cream/20';

  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[cols];

  return (
    <section className={`${bgClass} px-6 py-16 md:py-20`}>
      <div className="mx-auto max-w-7xl">
        {(content.title || content.description) && (
          <ScrollReveal direction="up" distance={40} duration={0.8} className="mb-12 text-center">
            {content.title && (
              <h2 className={`mb-4 text-3xl font-bold md:text-4xl ${textClass}`}>
                {content.title}
              </h2>
            )}
            {content.description && (
              <p className={`mx-auto max-w-2xl text-base ${textMutedClass}`}>
                {content.description}
              </p>
            )}
          </ScrollReveal>
        )}
        <div className={`grid gap-6 ${gridCols}`}>
          {content.cards.map((card, i) => (
            <ScrollReveal
              key={i}
              direction="up"
              distance={30}
              duration={0.7}
              delay={i * 0.05}
              className={`rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md ${cardBgClass}`}
            >
              <p className={`mb-1 text-sm font-medium ${textMutedClass}`}>{card.title}</p>
              <p className={`text-2xl font-bold ${textClass}`}>{card.value}</p>
              {card.subtitle && (
                <p className={`mt-2 text-sm ${textMutedClass}`}>{card.subtitle}</p>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
