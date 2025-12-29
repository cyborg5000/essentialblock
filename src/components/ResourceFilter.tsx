'use client';

import { useState, useEffect } from 'react';
import { ResourceCategory, Resource } from '@/lib/resources';

interface ResourceFilterProps {
  counts: Record<string, number>;
  allResources: Resource[];
  onFilteredResourcesChange: (resources: Resource[]) => void;
}

const categories: Array<{ key: ResourceCategory | 'all'; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'guides', label: 'Guides' },
  { key: 'downloads', label: 'Downloads' },
  { key: 'external', label: 'External' },
];

export default function ResourceFilter({ counts, allResources, onFilteredResourcesChange }: ResourceFilterProps) {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | 'all'>('all');

  useEffect(() => {
    // Filter resources based on active category
    if (activeCategory === 'all') {
      onFilteredResourcesChange(allResources);
    } else {
      const filtered = allResources.filter(resource => resource.frontmatter.category === activeCategory);
      onFilteredResourcesChange(filtered);
    }
  }, [activeCategory, allResources, onFilteredResourcesChange]);

  const handleFilterClick = (category: ResourceCategory | 'all') => {
    setActiveCategory(category);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => {
        const isActive = activeCategory === category.key;
        const count = counts[category.key] || 0;

        return (
          <button
            key={category.key}
            onClick={() => handleFilterClick(category.key)}
            disabled={count === 0}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
              isActive
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            } ${count === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} hover:shadow-sm`}
            aria-pressed={isActive}
          >
            {category.label}
            <span
              className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-sm ${
                isActive ? 'bg-white/20' : 'bg-gray-100'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
