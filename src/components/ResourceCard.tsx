import Link from 'next/link';
import { Resource, ResourceType } from '@/lib/resources';

interface ResourceCardProps {
  resource: Resource;
}

const typeConfig: Record<ResourceType, { label: string; colorClass: string; bgClass: string; icon: string }> = {
  guide: {
    label: 'Guide',
    colorClass: 'text-primary',
    bgClass: 'bg-primary/10',
    icon: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>',
  },
  download: {
    label: 'Download',
    colorClass: 'text-secondary',
    bgClass: 'bg-secondary/10',
    icon: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>',
  },
  external: {
    label: 'External Link',
    colorClass: 'text-blue-600',
    bgClass: 'bg-blue-100',
    icon: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>',
  },
};

export default function ResourceCard({ resource }: ResourceCardProps) {
  const { slug, frontmatter } = resource;
  const config = typeConfig[frontmatter.type];

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Determine button text and behavior based on type
  const getButtonContent = () => {
    switch (frontmatter.type) {
      case 'guide':
        return { text: 'Read More', icon: '→' };
      case 'download':
        return { text: 'Download', icon: '⬇' };
      case 'external':
        return { text: 'Visit', icon: '↗' };
    }
  };

  const buttonContent = getButtonContent();

  return (
    <article className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col h-full">
      {/* Type Badge and Date */}
      <div className="flex items-center justify-between mb-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${config.colorClass} ${config.bgClass}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path dangerouslySetInnerHTML={{ __html: config.icon }} />
          </svg>
          {config.label}
        </span>
        <time className="text-sm text-gray-500">{formatDate(frontmatter.date)}</time>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-gray-900">
        {frontmatter.title}
      </h3>

      {/* Excerpt */}
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
        {frontmatter.excerpt}
      </p>

      {/* Action Button */}
      <Link
        href={frontmatter.type === 'external' && frontmatter.externalUrl ? frontmatter.externalUrl : `/resources/${slug}`}
        target={frontmatter.type === 'external' ? '_blank' : undefined}
        rel={frontmatter.type === 'external' ? 'noopener noreferrer' : undefined}
        className={`inline-flex items-center gap-2 font-medium transition-all duration-300 group px-5 py-2.5 rounded-full ${
          frontmatter.type === 'guide'
            ? 'text-primary bg-primary/5 hover:bg-primary/10'
            : frontmatter.type === 'download'
            ? 'text-secondary bg-secondary/5 hover:bg-secondary/10'
            : 'text-blue-600 bg-blue-50 hover:bg-blue-100'
        }`}
      >
        {buttonContent.text}
        <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">
          {buttonContent.icon}
        </span>
      </Link>
    </article>
  );
}
