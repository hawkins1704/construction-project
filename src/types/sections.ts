export type SectionTheme = 'light' | 'dark';

export interface BaseSectionProps {
  theme?: SectionTheme;
}

export interface BannerContent {
  title: string;
  description?: string;
  primaryButton?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: 'play';
  };
  images?: {
    url: string;
    alt: string;
  }[];
}

export interface SliderContent {
  slides: {
    image: string;
    alt: string;
    caption?: string;
  }[];
  autoplay?: boolean;
  autoplayDelay?: number;
}

export interface ImageGridContent {
  title?: string;
  description?: string;
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  columns?: 2 | 3 | 4;
}

export interface ImageWithTextContent {
  title: string;
  description?: string;
  image: {
    url: string;
    alt: string;
  };
  imagePosition?: 'left' | 'right';
  button?: {
    label: string;
    href?: string;
  };
}

export interface VideoContent {
  title?: string;
  description?: string;
  videoUrl: string;
  posterUrl?: string;
}

export interface StatsCard {
  title: string;
  value: string;
  subtitle?: string;
}

export interface StatsSectionContent {
  title?: string;
  description?: string;
  cards: StatsCard[];
  columns?: 2 | 3 | 4;
}

export interface TimelinePhase {
  phase: number;
  title: string;
  description?: string;
  items?: string[];
}

export interface TimelineContent {
  title?: string;
  description?: string;
  phases: TimelinePhase[];
  duration?: string;
}

export interface TextWithSidebarContent {
  title?: string;
  mainText: string;
  sidebar: {
    title: string;
    items: { label: string; value: string }[];
  };
  footerText?: string;
}

export interface HeroWithSidebarContent extends TextWithSidebarContent {
  backgroundImage: string;
}

export interface BulletListContent {
  title?: string;
  description?: string;
  items: string[];
  columns?: 1 | 2;
}
