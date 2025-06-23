import { FeedbackForm } from "@/components/feedback-form";

export default function FeedbackPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">Submit Feedback</h1>
      <div className="mx-auto w-full max-w-3xl">
        <FeedbackForm />
      </div>
    </div>
  );
}
