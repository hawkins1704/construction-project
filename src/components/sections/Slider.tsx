import { useState, useEffect, useCallback } from 'react';
import type { SliderContent, BaseSectionProps } from '../../types/sections';
import { ScrollReveal } from '../ui/ScrollReveal';

interface SliderProps extends BaseSectionProps {
  content: SliderContent;
}

export const Slider = ({ theme = 'light', content }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLight = theme === 'light';
  const slides = content.slides ?? [];
  const autoplay = content.autoplay ?? true;
  const delay = content.autoplayDelay ?? 5000;

  const goToNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!autoplay || slides.length <= 1) return;
    const id = setInterval(goToNext, delay);
    return () => clearInterval(id);
  }, [autoplay, delay, goToNext, slides.length]);

  const bgClass = isLight ? 'bg-cream' : 'bg-forest';
  const textClass = isLight ? 'text-earth' : 'text-cream';
  const btnClass = isLight
    ? 'text-earth hover:bg-earth/10'
    : 'text-cream hover:bg-cream/10';

  if (slides.length === 0) return null;

  return (
    <section className={`${bgClass} px-6 py-16 md:py-20`}>
      <ScrollReveal direction="up" distance={60} duration={0.9} start="top 85%" className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`transition-opacity duration-500 ${
                i === currentIndex ? 'opacity-100' : 'absolute inset-0 opacity-0'
              }`}
            >
              <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-charcoal/10">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              {slide.caption && (
                <p className={`mt-4 text-center text-sm ${textClass}`}>
                  {slide.caption}
                </p>
              )}
            </div>
          ))}

          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={goToPrev}
                className={`absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 transition-colors ${btnClass}`}
                aria-label="Anterior"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goToNext}
                className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 transition-colors ${btnClass}`}
                aria-label="Siguiente"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}
        </div>

        {slides.length > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex
                    ? isLight
                      ? 'w-6 bg-earth'
                      : 'w-6 bg-sage'
                    : isLight
                      ? 'w-2 bg-charcoal/30 hover:bg-charcoal/50'
                      : 'w-2 bg-cream/30 hover:bg-cream/50'
                }`}
                aria-label={`Ir a diapositiva ${i + 1}`}
              />
            ))}
          </div>
        )}
      </ScrollReveal>
    </section>
  );
};
