import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

export interface ImageViewerImage {
  url: string;
  alt: string;
  caption?: string;
}

interface ImageViewerProps {
  images: ImageViewerImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const ImageViewer = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: ImageViewerProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const directionRef = useRef<'left' | 'right' | null>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;

    if (!overlay || !content) return;

    gsap.fromTo(
      overlay,
      { opacity: 0, backdropFilter: 'blur(0px)' },
      {
        opacity: 1,
        backdropFilter: 'blur(12px)',
        duration: 0.4,
        ease: 'power2.out',
      }
    );

    gsap.fromTo(
      content,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        delay: 0.05,
        ease: 'power2.out',
      }
    );

    return () => {
      gsap.killTweensOf([overlay, content]);
    };
  }, []);

  const handleClose = useCallback(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;

    if (!overlay || !content) {
      onClose();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => onClose(),
    });

    tl.to(content, {
      opacity: 0,
      scale: 0.95,
      duration: 0.2,
      ease: 'power2.in',
    }).to(
      overlay,
      {
        opacity: 0,
        backdropFilter: 'blur(0px)',
        duration: 0.25,
        ease: 'power2.in',
      },
      '-=0.1'
    );
  }, [onClose]);

  const goToPrev = useCallback(() => {
    if (images.length <= 1) return;
    directionRef.current = 'left';
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    onNavigate(newIndex);
  }, [images.length, currentIndex, onNavigate]);

  const goToNext = useCallback(() => {
    if (images.length <= 1) return;
    directionRef.current = 'right';
    const newIndex = (currentIndex + 1) % images.length;
    onNavigate(newIndex);
  }, [images.length, currentIndex, onNavigate]);

  useEffect(() => {
    const img = imageRef.current;
    const direction = directionRef.current;
    if (!img || !direction) return;

    directionRef.current = null;
    const fromX = direction === 'right' ? 80 : -80;
    gsap.fromTo(
      img,
      { opacity: 0, x: fromX },
      {
        opacity: 1,
        x: 0,
        duration: 0.35,
        ease: 'power2.out',
      }
    );
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose, goToPrev, goToNext]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const currentImage = images[currentIndex];
  if (!currentImage) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-earth/80 backdrop-blur-xl"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imagen"
    >
      <div
        ref={contentRef}
        className="relative flex h-full w-full flex-col items-center justify-center gap-4 p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-earth/90 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-earth"
        >
          CERRAR
        </button>

        {/* Image container */}
        <div className="relative flex h-[75vh] w-[85vw] max-w-6xl items-center justify-center">
          {images.length > 1 && (
            <button
              type="button"
              onClick={goToPrev}
              className="absolute left-2 z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-earth/80 text-cream transition-colors hover:bg-earth md:left-4"
              aria-label="Imagen anterior"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          <div className="flex h-full w-full items-center justify-center overflow-hidden">
            <img
              ref={imageRef}
              key={currentIndex}
              src={currentImage.url}
              alt={currentImage.alt}
              className="h-full w-full object-contain"
            />
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-2 z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-earth/80 text-cream transition-colors hover:bg-earth md:right-4"
              aria-label="Siguiente imagen"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>

        {(currentImage.caption || images.length > 1) && (
          <div className="flex flex-col items-center gap-1 py-2">
            {currentImage.caption && (
              <p className="text-center text-sm text-cream/90">{currentImage.caption}</p>
            )}
            {images.length > 1 && (
              <p className="text-sm text-cream/70">
                {currentIndex + 1} / {images.length}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
