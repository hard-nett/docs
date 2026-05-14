import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout {...baseOptions()} links={[
    {
      type: 'custom',
      // only displayed on navbar, not mobile menu
      on: 'nav',
      children: (
        <NavbarMenu>
          <NavbarMenuTrigger>Documentation</NavbarMenuTrigger>
          <NavbarMenuContent>
            <NavbarMenuLink href="/docs">Hello World</NavbarMenuLink>
          </NavbarMenuContent>
        </NavbarMenu>
      ),
    },
    // other items
  ]}>{children}</HomeLayout>;
}
