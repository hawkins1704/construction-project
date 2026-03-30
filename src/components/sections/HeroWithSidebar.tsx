import type { HeroWithSidebarContent } from '../../types/sections';
import { ScrollReveal } from '../ui/ScrollReveal';

interface HeroWithSidebarProps {
  content: HeroWithSidebarContent;
}

export const HeroWithSidebar = ({ content }: HeroWithSidebarProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${content.backgroundImage})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-earth/75" />
      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <ScrollReveal
            direction="left"
            distance={50}
            duration={0.8}
            immediate
            className="flex flex-col justify-center"
          >
            {content.title && (
              <h1 className="mb-4 text-4xl font-bold text-cream md:text-5xl">
                {content.title}
              </h1>
            )}
            <p className="whitespace-pre-line text-paragraph leading-relaxed text-cream/95">
              {content.mainText}
            </p>
          </ScrollReveal>
          <ScrollReveal
            direction="right"
            distance={50}
            duration={0.8}
            immediate
            className="rounded-2xl border border-cream/30 bg-cream/10 p-6 backdrop-blur-sm lg:sticky lg:top-24"
          >
            <h3 className="mb-4 text-xl font-bold text-cream">{content.sidebar.title}</h3>
            <ul className="space-y-3">
              {content.sidebar.items.map((item, i) => (
                <li key={i} className="flex justify-between gap-4">
                  <span className="text-sm text-cream/90">{item.label}</span>
                  <span className="shrink-0 font-semibold text-cream">{item.value}</span>
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
            className="mt-10 border-t border-cream/30 pt-10"
          >
            <p className="text-paragraph leading-relaxed text-cream/95">{content.footerText}</p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};
