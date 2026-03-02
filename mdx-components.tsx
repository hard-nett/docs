import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import type { ComponentProps, ReactNode } from 'react';
import { Card as FumaCard } from 'fumadocs-ui/components/card';
import * as TabsComponents from 'fumadocs-ui/components/tabs';

type CardProps = ComponentProps<typeof FumaCard> & {
  svgFile?: string;
};

function Card({ svgFile, icon, ...props }: CardProps) {
  const resolvedIcon: ReactNode = icon || (svgFile ? <img src={svgFile} alt="" aria-hidden className="size-4" /> : undefined);

  return <FumaCard {...props} icon={resolvedIcon} />;
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    Card,
    ...components,
  };
}
