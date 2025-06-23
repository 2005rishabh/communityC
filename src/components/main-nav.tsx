'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { Map, List, Trophy, Lightbulb, Mail, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const menuItems = [
  { href: '/', label: 'Pollution Map', icon: Map },
  { href: '/reports', label: 'Reports List', icon: List },
  { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { href: '/learn', label: 'Learn & Prevent', icon: Lightbulb },
  { href: '/feedback', label: 'Feedback', icon: Mail },
];

export function MainNav() {
  const pathname = usePathname();

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
            Report Pollution
          </Link>
        </Button>
      </div>
    </div>
  );
}
