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

export type ImageWithTextImagesLayout = 'stack' | 'sideBySide';

export type DocumentAttachmentType = 'pdf' | 'excel' | 'word' | 'image';

export interface FileGalleryItem {
  url: string;
  /** Nombre mostrado (archivo o título corto) */
  label: string;
  type: DocumentAttachmentType;
  /** Accesibilidad cuando `type` es `image` */
  alt?: string;
  caption?: string;
}

export interface FileGalleryContent {
  title?: string;
  description?: string;
  items: FileGalleryItem[];
  columns?: 2 | 3 | 4;
}

export interface ImageWithTextContent {
  title: string;
  description?: string;
  image: {
    url: string;
    alt: string;
  };
  /** Segunda imagen; se agrupa con la principal, siempre del mismo lado que el texto opuesto. */
  secondImage?: {
    url: string;
    alt: string;
  };
  /**
   * Con dos imágenes: apiladas o una al lado de la otra.
   * En pantallas pequeñas, `sideBySide` pasa a columna hasta `sm` para legibilidad.
   */
  imagesLayout?: ImageWithTextImagesLayout;
  imagePosition?: 'left' | 'right';
  button?: {
    label: string;
    href?: string;
  };
  /** Listas con título para mostrar debajo de la descripción */
  lists?: { title: string; items: string[] }[];
  /** Archivos con miniatura (icono + nombre); al hacer clic se abre un visor en modal */
  attachments?: {
    url: string;
    label: string;
    type: DocumentAttachmentType;
  }[];
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
  /** Etiqueta de la subsección a la que pertenece el card (ej: "Capex estimado") */
  section?: string;
}

export interface StatsSectionContent {
  title?: string;
  description?: string;
  cards: StatsCard[];
  columns?: 2 | 3 | 4;
  /** Si se usa, agrupa los cards por section y muestra el título de cada grupo */
  useSectionLabels?: boolean;
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
  /** Si true, renderiza como div sin wrapper de sección (para usar en grid) */
  embedded?: boolean;
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
