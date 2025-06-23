import { Wind } from "lucide-react";

export function AppLogo() {
  return (
    <div className="flex items-center gap-2">
      <Wind className="h-6 w-6 text-primary" />
      <h1 className="text-lg font-semibold text-primary-foreground">
        Pollution Spotter
      </h1>
    </div>
  );
}
