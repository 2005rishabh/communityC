'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import { ReportsProvider } from '@/contexts/ReportsContext';
import { SettingsProvider } from '@/contexts/SettingsContext';
import type { ReactNode } from 'react';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ReportsProvider>
        <SettingsProvider>
          {children}
        </SettingsProvider>
      </ReportsProvider>
    </AuthProvider>
  );
}
