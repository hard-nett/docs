import { docs } from 'fumadocs-mdx:collections/server';
import { multiple, type InferPageType, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { openapiPlugin } from 'fumadocs-openapi/server';
import { getOpenAPIDocsSource } from '@/lib/openapi';
import { communityDocConfig, getAllCommunityProjects } from './community-docs';

const openapiDocsSource = await getOpenAPIDocsSource();

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/docs',
  source: multiple({
    docs: docs.toFumadocsSource(),
    openapi: openapiDocsSource,
  }),
  plugins: [lucideIconsPlugin(), openapiPlugin()],
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png'];
  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  if ('getSchema' in page.data && typeof page.data.getSchema === 'function') {
    const schema = page.data.getSchema();

    return `# ${page.data.title}

${page.data.description ?? ''}

OpenAPI Schema: ${schema.id}`;
  }

  if (!('getText' in page.data) || typeof page.data.getText !== 'function') {
    return `# ${page.data.title}

${page.data.description ?? ''}`;
  }

  const processed = await page.data.getText('processed');

  return `# ${page.data.title}

${processed}`;
}

/**
 * Dedicated functions for community project docs import using config file style.
 * Leverages Fumadocs loader and source API rather than reinventing.
 * Syncs or loads MDX from external project locations into compiled docs.
 */
export function getCommunityProjects() {
  return getAllCommunityProjects();
}

export function getCommunityProjectSource(name: string) {
  const project = communityDocConfig.projects.find((p) => p.name === name);
  if (!project) throw new Error(`Unknown community project: ${name}`);
  return {
    name: project.name,
    // sourcePath: project.sourcePath,
    targetPath: project.targetPath,
    baseUrl: `/docs/${project.targetPath}`,
  };
}

export async function loadCommunityDocs() {
  // TODO: fs.copySync or git pull for MDX from sourcePath to content/docs/community
  // Then re-run fumadocs-mdx to include in collections
  console.log('Loading community docs from config for Fumadocs...');
  return getAllCommunityProjects().map((p) => getCommunityProjectSource(p.name));
}
