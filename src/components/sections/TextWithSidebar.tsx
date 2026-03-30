import type { TextWithSidebarContent, BaseSectionProps } from '../../types/sections';
import { ScrollReveal } from '../ui/ScrollReveal';

interface TextWithSidebarProps extends BaseSectionProps {
  content: TextWithSidebarContent;
}

export const TextWithSidebar = ({ theme = 'light', content }: TextWithSidebarProps) => {
  const isLight = theme === 'light';

  const bgClass = isLight ? 'bg-cream' : 'bg-forest';
  const textClass = isLight ? 'text-earth' : 'text-cream';
  const textMutedClass = isLight ? 'text-charcoal' : 'text-sage-dark';
  const sidebarBgClass = isLight ? 'bg-white border-charcoal/10' : 'bg-forest-light/50 border-cream/20';

  return (
    <section className={`${bgClass} px-6 py-16 md:py-20`}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <ScrollReveal
            direction="left"
            distance={50}
            duration={0.8}
            className="flex flex-col justify-center"
          >
            {content.title && (
              <h2 className={`mb-4 text-3xl font-bold md:text-4xl ${textClass}`}>
                {content.title}
              </h2>
            )}
            <p className={`whitespace-pre-line text-paragraph leading-relaxed ${textMutedClass}`}>
              {content.mainText}
            </p>
          </ScrollReveal>
          <ScrollReveal
            direction="right"
            distance={50}
            duration={0.8}
            className={`rounded-2xl border p-6 shadow-sm lg:sticky lg:top-24 ${sidebarBgClass}`}
          >
            <h3 className={`mb-4 text-xl font-bold ${textClass}`}>{content.sidebar.title}</h3>
            <ul className="space-y-3">
              {content.sidebar.items.map((item, i) => (
                <li key={i} className="flex justify-between gap-4">
                  <span className={`text-sm ${textMutedClass}`}>{item.label}</span>
                  <span className={`shrink-0 font-semibold ${textClass}`}>{item.value}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
        {content.footerText && (
          <ScrollReveal
            direction="up"
            distance={30}
            duration={0.7}
            className="mt-10 border-t border-charcoal/10 pt-10 lg:border-t-2"
          >
            <p className={`text-paragraph leading-relaxed ${textMutedClass}`}>
              {content.footerText}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};
