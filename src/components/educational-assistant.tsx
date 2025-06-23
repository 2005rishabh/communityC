"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { provideEducationalContent, ProvideEducationalContentOutput } from "@/ai/flows/provide-educational-content";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Lightbulb, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  location: z.string().min(2, "Please enter a valid location."),
  reportedIncidents: z.string().min(10, "Please describe the incidents."),
});

export function AIAssistant() {
  const [aiResponse, setAiResponse] = useState<ProvideEducationalContentOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      reportedIncidents: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAiResponse(null);
    try {
      const response = await provideEducationalContent(values);
      setAiResponse(response);
    } catch (error) {
      console.error("AI Error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get suggestions from AI. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>AI Assistant</CardTitle>
          <CardDescription>
            Enter your location and observed pollution to receive personalized educational content and prevention tips.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Location</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., New Delhi, India" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="reportedIncidents"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Observed Pollution</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Air pollution, plastic waste in Yamuna river" {...field} />
                    </FormControl>
                    <FormDescription>
                      Describe the types of pollution you've seen.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Getting Suggestions..." : "Get Suggestions"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <Skeleton className="h-6 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        </div>
      )}

      {aiResponse && (
        <div className="space-y-6">
          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Educational Content</AlertTitle>
            <AlertDescription>
              {aiResponse.educationalContent}
            </AlertDescription>
          </Alert>
          
          <Alert>
            <ShieldCheck className="h-4 w-4" />
            <AlertTitle>Prevention Tips</AlertTitle>
            <AlertDescription>
              {aiResponse.preventionTips}
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
