import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PollutionMapPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Pollution Map</h1>
        <Button asChild>
          <Link href="/report">
            <PlusCircle className="mr-2 h-4 w-4" />
            Report Pollution
          </Link>
        </Button>
      </div>

      <div className="relative h-[60vh] w-full overflow-hidden rounded-lg shadow-lg">
        <Image
          src="https://placehold.co/1200x800"
          alt="Pollution map of India"
          layout="fill"
          objectFit="cover"
          data-ai-hint="India map"
        />
        <Card className="absolute bottom-4 left-4 max-w-sm animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-destructive" />
              <span>Juhu Beach, Mumbai</span>
            </CardTitle>
            <CardDescription>Reported by Priya Sharma</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Large amount of plastic bottles and bags dumped near the shore.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Badge variant="destructive">High Priority</Badge>
            <span className="text-xs text-muted-foreground">2 hours ago</span>
          </CardFooter>
        </Card>
      </div>
       <p className="text-center text-sm text-muted-foreground">Click on map markers to view report details.</p>
    </div>
  );
}
