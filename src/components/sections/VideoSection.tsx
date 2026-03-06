import type { VideoContent, BaseSectionProps } from '../../types/sections';
import { ScrollReveal } from '../ui/ScrollReveal';

interface VideoSectionProps extends BaseSectionProps {
  content: VideoContent;
}

const getEmbedUrl = (url: string): string | null => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtube.com') || parsed.hostname.includes('youtu.be')) {
      const videoId =
        parsed.hostname === 'youtu.be'
          ? parsed.pathname.slice(1)
          : parsed.searchParams.get('v');
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }
    if (parsed.hostname.includes('vimeo.com')) {
      const match = url.match(/vimeo\.com\/(\d+)/);
      return match ? `https://player.vimeo.com/video/${match[1]}` : null;
    }
    return url;
  } catch {
    return null;
  }
};

export const VideoSection = ({ theme = 'light', content }: VideoSectionProps) => {
  const isLight = theme === 'light';
  const embedUrl = getEmbedUrl(content.videoUrl);

  const bgClass = isLight ? 'bg-cream' : 'bg-forest';
  const textClass = isLight ? 'text-earth' : 'text-cream';
  const textMutedClass = isLight ? 'text-charcoal' : 'text-sage-dark';

  return (
    <section className={`${bgClass} px-6 py-16 md:py-20`}>
      <div className="mx-auto max-w-5xl">
        {(content.title || content.description) && (
          <ScrollReveal direction="up" distance={40} duration={0.7} start="top 85%" className="mb-12 max-w-2xl">
            {content.title && (
              <h2 className={`mb-4 text-3xl font-bold md:text-4xl ${textClass}`}>
                {content.title}
              </h2>
            )}
            {content.description && (
              <p className={`text-base ${textMutedClass}`}>{content.description}</p>
            )}
          </ScrollReveal>
        )}

        <ScrollReveal direction="up" distance={60} duration={0.9} start="top 85%">
          {embedUrl ? (
            <div className="overflow-hidden rounded-2xl bg-charcoal/10">
              <div className="aspect-video">
                <iframe
                  src={embedUrl}
                  title={content.title ?? 'Video'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          ) : (
            <div className="flex aspect-video items-center justify-center rounded-2xl bg-charcoal/10 text-charcoal">
              URL de video no válida
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};
