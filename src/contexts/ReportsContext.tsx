'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { reports as initialReports, Report } from '@/lib/data';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthContext';

type ReportsContextType = {
  reports: Report[];
  addReport: (report: Omit<Report, 'id' | 'user' | 'timestamp' | 'image'> & { photo: FileList }) => void;
};

const ReportsContext = createContext<ReportsContextType | undefined>(undefined);

export function ReportsProvider({ children }: { children: ReactNode }) {
  const [reports, setReports] = useState<Report[]>(initialReports);
  const router = useRouter();
  const { user } = useAuth();

  const addReport = (newReportData: Omit<Report, 'id' | 'user' | 'timestamp' | 'image'> & { photo: FileList }) => {
    const newReport: Report = {
      id: String(Date.now()),
      user: {
        name: user?.name || "Anonymous",
        avatar: "https://placehold.co/100x100"
      },
      image: newReportData.photo.length > 0 ? URL.createObjectURL(newReportData.photo[0]) : "https://placehold.co/600x400",
      location: newReportData.location,
      description: newReportData.description,
      timestamp: "Just now",
    };
    setReports(prevReports => [newReport, ...prevReports]);
    router.push('/reports');
  };

  return (
    <ReportsContext.Provider value={{ reports, addReport }}>
      {children}
    </ReportsContext.Provider>
  );
}

export function useReports() {
  const context = useContext(ReportsContext);
  if (context === undefined) {
    throw new Error('useReports must be used within a ReportsProvider');
  }
  return context;
}
