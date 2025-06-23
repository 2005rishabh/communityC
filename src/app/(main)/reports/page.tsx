import Image from 'next/image';
import { reports } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin } from 'lucide-react';

export default function ReportsListPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">Pollution Reports</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => (
          <Card key={report.id} className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-3">
              <Avatar>
                <AvatarImage src={report.user.avatar} alt={report.user.name} data-ai-hint="person" />
                <AvatarFallback>{report.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base">{report.user.name}</CardTitle>
                <CardDescription className="text-xs">{report.timestamp}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-md">
                <Image 
                  src={report.image} 
                  alt={report.description} 
                  fill 
                  className="object-cover transition-transform hover:scale-105"
                  data-ai-hint="garbage pollution"
                />
              </div>
              <div className="space-y-2">
                <h3 className="flex items-center gap-2 font-semibold">
                  <MapPin className="h-4 w-4 text-primary" />
                  {report.location}
                </h3>
                <p className="text-sm text-muted-foreground">{report.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
