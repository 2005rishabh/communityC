// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview Provides educational content related to pollution incidents based on location and reported incidents.
 *
 * - provideEducationalContent - A function that provides educational content.
 * - ProvideEducationalContentInput - The input type for the provideEducationalContent function.
 * - ProvideEducationalContentOutput - The return type for the provideEducationalContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProvideEducationalContentInputSchema = z.object({
  location: z.string().describe('The user location to provide relevant content for.'),
  reportedIncidents: z.string().describe('The description of reported incidents in the area.'),
});
export type ProvideEducationalContentInput = z.infer<
  typeof ProvideEducationalContentInputSchema
>;

const ProvideEducationalContentOutputSchema = z.object({
  educationalContent: z.string().describe('Relevant educational content about the reported incidents and location.'),
  preventionTips: z.string().describe('Pollution prevention tips related to the reported incidents and location.'),
});
export type ProvideEducationalContentOutput = z.infer<
  typeof ProvideEducationalContentOutputSchema
>;

export async function provideEducationalContent(
  input: ProvideEducationalContentInput
): Promise<ProvideEducationalContentOutput> {
  return provideEducationalContentFlow(input);
}

const provideEducationalContentPrompt = ai.definePrompt({
  name: 'provideEducationalContentPrompt',
  input: {schema: ProvideEducationalContentInputSchema},
  output: {schema: ProvideEducationalContentOutputSchema},
  prompt: `You are an AI assistant designed to provide educational content and prevention tips related to pollution.

  Based on the user's location and reported incidents in the area, provide relevant educational content and practical prevention tips.

  Location: {{{location}}}
  Reported Incidents: {{{reportedIncidents}}}

  Educational Content:
  Prevention Tips:
  `,
});

const provideEducationalContentFlow = ai.defineFlow(
  {
    name: 'provideEducationalContentFlow',
    inputSchema: ProvideEducationalContentInputSchema,
    outputSchema: ProvideEducationalContentOutputSchema,
  },
  async input => {
    const {output} = await provideEducationalContentPrompt(input);
    return output!;
  }
);
