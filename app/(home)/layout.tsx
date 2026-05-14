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
          <NavbarMenuTrigger>DAO</NavbarMenuTrigger>
          <NavbarMenuContent>
            <NavbarMenuLink href="/docs/connect">Event Calendar</NavbarMenuLink>
          </NavbarMenuContent>
          <NavbarMenuTrigger>Network</NavbarMenuTrigger>
          <NavbarMenuContent>
            <NavbarMenuLink href="/docs/guides/network/connect">Connect</NavbarMenuLink>
            <NavbarMenuLink href="/docs/guides/network/connect">Tokens</NavbarMenuLink>
          </NavbarMenuContent>
          <NavbarMenuTrigger>Ecosystem</NavbarMenuTrigger>
          <NavbarMenuContent>
            <NavbarMenuLink href="/docs/guides/network/connect">Connect</NavbarMenuLink>
          </NavbarMenuContent>
        </NavbarMenu>
      ),
    },
    // other items
  ]}>{children}</HomeLayout>;
}
