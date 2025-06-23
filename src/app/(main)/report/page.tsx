import { ReportForm } from "@/components/report-form";

export default function ReportPollutionPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">Report a Pollution Incident</h1>
      <div className="mx-auto w-full max-w-2xl">
        <ReportForm />
      </div>
    </div>
  );
}
