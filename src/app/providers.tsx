'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import { ReportsProvider } from '@/contexts/ReportsContext';
import type { ReactNode } from 'react';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ReportsProvider>
        {children}
      </ReportsProvider>
    </AuthProvider>
  );
}
