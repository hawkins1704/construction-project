import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollRevealProps {
  children: ReactNode;
  /** Dirección del movimiento inicial */
  direction?: 'up' | 'down' | 'left' | 'right';
  /** Distancia del movimiento en px */
  distance?: number;
  /** Duración en segundos */
  duration?: number;
  /** Delay en segundos */
  delay?: number;
  /** Opacidad inicial */
  opacity?: number;
  /** Punto de activación (default: 'top 85%') */
  start?: string;
  /** Clase adicional para el wrapper */
  className?: string;
  /** Si true, anima cada hijo con stagger (solo los hijos directos) */
  staggerChildren?: boolean;
  /** Delay entre hijos cuando staggerChildren es true */
  staggerDelay?: number;
  /** Si true, anima al montar sin esperar scroll (para contenido above-the-fold) */
  immediate?: boolean;
}

const directionMap = {
  up: 'y',
  down: 'y',
  left: 'x',
  right: 'x',
} as const;

export const ScrollReveal = ({
  children,
  direction = 'up',
  distance = 50,
  duration = 0.8,
  delay = 0,
  opacity = 0,
  start = 'top 85%',
  className = '',
  staggerChildren = false,
  staggerDelay = 0.15,
  immediate = false,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = directionMap[direction];
    const sign = direction === 'up' || direction === 'right' ? 1 : -1;
    const fromValue = distance * sign;

    const vars: gsap.TweenVars = {
      opacity: 1,
      [axis]: 0,
      duration,
      delay,
      ease: 'power3.out',
      ...(!immediate && {
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
      }),
    };

    let animation: gsap.core.Tween | gsap.core.Tween[];

    if (staggerChildren) {
      const childEls = el.querySelectorAll(':scope > *');
      animation = gsap.fromTo(
        childEls,
        { opacity, [axis]: fromValue },
        {
          ...vars,
          duration: duration * 0.7,
          stagger: staggerDelay,
        }
      ) as gsap.core.Tween;
    } else {
      animation = gsap.fromTo(el, { opacity, [axis]: fromValue }, vars);
    }

    return () => {
      if (Array.isArray(animation)) {
        animation.forEach((t) => t.kill());
      } else {
        animation.kill();
      }
    };
  }, [direction, distance, duration, delay, opacity, start, staggerChildren, staggerDelay, immediate]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
