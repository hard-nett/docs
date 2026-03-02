import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      containerProps={{
        className: '[--fd-layout-width:100%]',
      }}
      sidebar={
        {
          tabs: [
            {
              title: 'Build',
              description: 'Build on Terp Network',
              // active for `/docs/components` and sub routes like `/docs/components/button`
              url: '/docs/components',
              // optionally, you can specify a set of urls which activates the item
              // urls: new Set(['/docs/test', '/docs/components']),
            },
          ]
        }
      }
      tree={source.getPageTree()} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
