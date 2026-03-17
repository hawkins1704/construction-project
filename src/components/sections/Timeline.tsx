import type { TimelineContent, BaseSectionProps } from '../../types/sections';
import { ScrollReveal } from '../ui/ScrollReveal';

interface TimelineProps extends BaseSectionProps {
  content: TimelineContent;
}

export const Timeline = ({ theme = 'light', content }: TimelineProps) => {
  const isLight = theme === 'light';
  const embedded = content.embedded ?? false;

  const bgClass = isLight ? 'bg-cream' : 'bg-forest';
  const textClass = isLight ? 'text-earth' : 'text-cream';
  const textMutedClass = isLight ? 'text-charcoal' : 'text-sage-dark';
  const lineClass = isLight ? 'bg-charcoal/20' : 'bg-cream/30';
  const dotClass = isLight ? 'bg-earth text-cream' : 'bg-cream text-earth';

  const Wrapper = embedded ? 'div' : 'section';
  const wrapperClass = embedded ? '' : `${bgClass} px-6 py-16 md:py-20`;

  return (
    <Wrapper className={wrapperClass || undefined}>
      <div className={embedded ? 'max-w-full' : 'mx-auto max-w-4xl'}>
        {(content.title || content.description) && (
          <ScrollReveal direction="up" distance={40} duration={0.8} className="mb-12">
            {content.title && (
              <h2 className={`mb-4 text-3xl font-bold md:text-4xl ${textClass}`}>
                {content.title}
              </h2>
            )}
            {content.description && (
              <p className={`text-base ${textMutedClass}`}>{content.description}</p>
            )}
            {content.duration && (
              <p className={`mt-2 text-sm font-medium ${textMutedClass}`}>{content.duration}</p>
            )}
          </ScrollReveal>
        )}
        <div className="relative">
          {/* Vertical line - centered */}
          <div
            className={`absolute left-4 top-0 bottom-0 w-0.5 md:left-1/2 md:-translate-x-px ${lineClass}`}
          />
          {content.phases.map((phase, i) => {
            const isRight = i % 2 === 0;
            return (
              <ScrollReveal
                key={i}
                direction={isRight ? 'right' : 'left'}
                distance={40}
                duration={0.7}
                delay={i * 0.06}
                className="relative flex items-start pb-10 last:pb-0"
              >
                {/* Circle - on line: left-4 on mobile, center on desktop */}
                <div
                  className={`absolute left-4 top-0 z-10 flex h-8 w-8 shrink-0 -translate-x-1/2 items-center justify-center rounded-full md:left-1/2 ${dotClass} text-sm font-bold`}
                >
                  {phase.phase}
                </div>
                {/* Content - alternating: right of line (even) or left of line (odd) */}
                <div
                  className={`min-w-0 pl-12 md:max-w-[calc(50%-1.5rem)] md:pl-4 ${
                    isRight
                      ? 'md:ml-[calc(50%+1.5rem)] md:w-[calc(50%-1.5rem)]'
                      : 'md:ml-0 md:pl-0 md:pr-4 md:text-right'
                  }`}
                >
                  <h3 className={`font-bold ${textClass}`}>{phase.title}</h3>
                  {phase.description && (
                    <p className={`mt-1 text-sm ${textMutedClass}`}>{phase.description}</p>
                  )}
                  {phase.items && phase.items.length > 0 && (
                    <ul className={`mt-3 space-y-1.5 text-sm ${textMutedClass}`}>
                      {phase.items.map((item, j) => (
                        <li key={j} className={`flex items-start gap-2 ${!isRight ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
