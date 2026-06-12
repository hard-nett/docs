import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/flux';

import { baseOptions } from '@/lib/layout.shared';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';

export default function Layout({ children }: LayoutProps<'/'>) {
  return <DocsLayout {...baseOptions()} tree={source.getPageTree()} links={[
    {
      type: 'custom',
      // only displayed on navbar, not mobile menu
      on: 'nav',
      children: (
        <NavbarMenu>
          {/* <NavbarMenuTrigger>Learn
            <NavbarMenuContent>
              <NavbarMenuLink href="/docs/overview">Introduction & Getting Started</NavbarMenuLink>
            </NavbarMenuContent>
          </NavbarMenuTrigger>
          <NavbarMenuTrigger>Use
            <NavbarMenuContent>
              <NavbarMenuLink href="/docs/resources">Re</NavbarMenuLink>
            </NavbarMenuContent>
          </NavbarMenuTrigger> */}
          {/* <NavbarMenuTrigger>Network</NavbarMenuTrigger>
          <NavbarMenuContent>
            <NavbarMenuLink href="/docs/guides/network/connect">Connect</NavbarMenuLink>
            <NavbarMenuLink href="/docs/guides/network/connect">Tokens</NavbarMenuLink>
          </NavbarMenuContent>
          <NavbarMenuTrigger>Ecosystem</NavbarMenuTrigger>
          <NavbarMenuContent>
            <NavbarMenuLink href="/docs/guides/network/connect">Connect</NavbarMenuLink>
          </NavbarMenuContent> */}
        </NavbarMenu>
      ),
    },
    // other items
  ]}>{children}</DocsLayout>;
}
