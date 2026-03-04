import { createOpenAPI, openapiSource } from 'fumadocs-openapi/server';
import { createAPIPage } from 'fumadocs-openapi/ui';
import { multiple, type Source } from 'fumadocs-core/source';

const OPENAPI_INPUT = {
  OPENAPI: './static/api/openapi.yaml',
  RPC: './static/api/RPC.yaml',
  LCD: './static/api/LCD.yaml',
  DATA: './static/api/DATA.yaml',
  IBCGO: './static/api/IBCGO.yaml',
} as const;

export type OpenAPIDocumentId = keyof typeof OPENAPI_INPUT;

export const OPENAPI_SPECS = [
  { id: 'OPENAPI', slug: 'openapi', title: 'OpenAPI Reference' },
  { id: 'RPC', slug: 'rpc', title: 'RPC Reference' },
  { id: 'IBCGO', slug: 'ibcgo', title: 'IBC-GO Reference' },
  { id: 'LCD', slug: 'lcd', title: 'LCD Reference' },
  { id: 'DATA', slug: 'data', title: 'Historical Data Reference' },
] as const satisfies ReadonlyArray<{
  id: OpenAPIDocumentId;
  slug: string;
  title: string;
}>;

const openapiServer = createOpenAPI({
  input: () => OPENAPI_INPUT,
});

export const APIPage = createAPIPage(openapiServer);

export function resolveOpenAPIDocument(raw?: string): OpenAPIDocumentId {
  if (!raw) return 'OPENAPI';

  const id = raw.toUpperCase() as OpenAPIDocumentId;
  if (id in OPENAPI_INPUT) return id;

  return 'OPENAPI';
}

export function getOpenAPISlug(id: OpenAPIDocumentId): string {
  const spec = OPENAPI_SPECS.find((entry) => entry.id === id);
  return spec?.slug ?? 'openapi';
}

function getOpenAPIBySlug(slug: string) {
  return OPENAPI_SPECS.find((entry) => entry.slug === slug);
}

export async function getOpenAPIDocument(id: OpenAPIDocumentId) {
  return openapiServer.getSchema(id);
}

export async function getOpenAPIDocsSource(): Promise<Source> {
  const sources: Record<string, Source> = {};

  for (const spec of OPENAPI_SPECS) {
    const server = createOpenAPI({
      input: () => ({ [spec.id]: OPENAPI_INPUT[spec.id] }),
    });

    sources[`openapi-${spec.slug}-index`] = await openapiSource(server, {
      per: 'file',
      baseDir: 'api',
      name: () => `${spec.slug}/index`,
    });

    const operationsSource = await openapiSource(server, {
      per: 'operation',
      groupBy: 'tag',
      baseDir: `api/${spec.slug}`,
    });

    sources[`openapi-${spec.slug}-operations`] = {
      files: operationsSource.files.map((file) => {
        if (file.type !== 'page') return file;

        if (file.path.endsWith('/index.mdx')) return file;

        return {
          ...file,
          data: {
            ...file.data,
            description: undefined,
          },
        };
      }),
    };
  }

  return multiple(sources);
}

export function resolveOpenAPISlug(raw?: string): string {
  if (!raw) return 'openapi';

  const normalized = raw.toLowerCase();
  if (getOpenAPIBySlug(normalized)) return normalized;

  return getOpenAPISlug(resolveOpenAPIDocument(raw));
}
