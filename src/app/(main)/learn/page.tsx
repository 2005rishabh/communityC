import { EducationalAssistant } from "@/components/educational-assistant";

export default function LearnPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">Learn & Prevent</h1>
      <div className="mx-auto w-full max-w-3xl">
        <EducationalAssistant />
      </div>
    </div>
  );
}
