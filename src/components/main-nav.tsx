'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { Map, List, Lightbulb, Mail, PlusCircle, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/hooks/use-translations';

export function MainNav() {
  const pathname = usePathname();
  const t = useTranslations();

  const menuItems = [
    { href: '/', label: t('pollutionMap'), icon: Map },
    { href: '/reports', label: t('reportsList'), icon: List },
    { href: '/learn', label: t('aiAssistant'), icon: Lightbulb },
    { href: '/feedback', label: t('feedback'), icon: Mail },
    { href: '/settings', label: t('settings'), icon: Settings },
  ];

  return (
    <div className="flex h-full flex-col justify-between">
      <SidebarMenu>
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton
              asChild
              isActive={pathname === item.href}
              className="justify-start"
              tooltip={item.label}
            >
              <Link href={item.href}>
                <item.icon />
                <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      <div className="p-4">
        <Button asChild className="w-full">
          <Link href="/report">
            <PlusCircle className="mr-2 h-4 w-4" />
            {t('reportPollution')}
          </Link>
        </Button>
      </div>
    </div>
  );
}
