import type { BannerContent, BaseSectionProps } from '../../types/sections';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';

interface BannerProps extends BaseSectionProps {
  content: BannerContent;
}

export const Banner = ({ theme = 'light', content }: BannerProps) => {
  const isLight = theme === 'light';

  const bgClass = isLight ? 'bg-cream' : 'bg-forest';
  const textClass = isLight ? 'text-earth' : 'text-cream';
  const textMutedClass = isLight ? 'text-charcoal' : 'text-sage-dark';

  return (
    <section className={`${bgClass} px-6 py-16 md:py-24`}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal
            direction="up"
            distance={40}
            duration={0.9}
            delay={0}
            immediate
            className="flex flex-col justify-center"
          >
            <h1 className={`mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl ${textClass}`}>
              {content.title}
            </h1>
            {content.description && (
              <p className={`mb-8 max-w-lg text-base md:text-lg ${textMutedClass}`}>
                {content.description}
              </p>
            )}
          </ScrollReveal>

          <ScrollReveal
            direction="up"
            distance={50}
            duration={0.9}
            delay={0.15}
            immediate
            staggerChildren={!!content.images?.length}
            staggerDelay={0.12}
            className="flex flex-col gap-8 lg:justify-end"
          >
            {content.images && content.images.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {content.images.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-2xl aspect-[4/3] bg-charcoal/5"
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-6">
              {content.primaryButton && (
                <Button
                  variant="primary"
                  theme={theme}
                  href={content.primaryButton.href}
                  onClick={content.primaryButton.onClick}
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M17 7H7V17" />
                    </svg>
                  }
                >
                  {content.primaryButton.label}
                </Button>
              )}
              {content.secondaryButton && (
                <button
                  type="button"
                  onClick={content.secondaryButton.onClick}
                  className={`inline-flex items-center gap-2 ${textMutedClass} transition-opacity hover:opacity-80`}
                >
                  {content.secondaryButton.icon === 'play' && (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-current">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-0.5"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  )}
                  <span className="font-medium">{content.secondaryButton.label}</span>
                </button>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
