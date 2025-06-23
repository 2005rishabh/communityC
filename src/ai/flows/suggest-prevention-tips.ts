// src/ai/flows/suggest-prevention-tips.ts
'use server';

/**
 * @fileOverview Provides personalized pollution prevention tips based on user location and reported incidents.
 *
 * - suggestPreventionTips - A function that suggests pollution prevention tips.
 * - SuggestPreventionTipsInput - The input type for the suggestPreventionTips function.
 * - SuggestPreventionTipsOutput - The return type for the suggestPreventionTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPreventionTipsInputSchema = z.object({
  location: z
    .string()
    .describe('The user\u2019s location (e.g., city, state).'),
  nearbyPollutionTypes: z
    .string()
    .describe(
      'A comma-separated list of pollution types reported nearby (e.g., air pollution, water pollution).'
    ),
});
export type SuggestPreventionTipsInput = z.infer<
  typeof SuggestPreventionTipsInputSchema
>;

const SuggestPreventionTipsOutputSchema = z.object({
  preventionTips: z
    .string()
    .describe(
      'Personalized pollution prevention tips based on the user\u2019s location and nearby pollution types.'
    ),
  educationalContent: z
    .string()
    .describe(
      'Relevant educational content related to the reported pollution types and prevention strategies.'
    ),
});
export type SuggestPreventionTipsOutput = z.infer<
  typeof SuggestPreventionTipsOutputSchema
>;

export async function suggestPreventionTips(
  input: SuggestPreventionTipsInput
): Promise<SuggestPreventionTipsOutput> {
  return suggestPreventionTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPreventionTipsPrompt',
  input: {schema: SuggestPreventionTipsInputSchema},
  output: {schema: SuggestPreventionTipsOutputSchema},
  prompt: `You are an AI assistant providing personalized pollution prevention tips and educational content.

  Based on the user's location: {{{location}}}
  And the types of pollution reported nearby: {{{nearbyPollutionTypes}}}

  Provide specific and actionable prevention tips that the user can implement in their daily life.
  Also, include relevant educational content to help the user understand the issues and solutions better.
  Prevention tips should be specific to location and reported pollution types.
  Example: For location 'Los Angeles' and pollution types 'air pollution, traffic pollution', a good prevention tip would be 'Use public transportation when possible to reduce traffic pollution, which contributes to air pollution.'
  `,
});

const suggestPreventionTipsFlow = ai.defineFlow(
  {
    name: 'suggestPreventionTipsFlow',
    inputSchema: SuggestPreventionTipsInputSchema,
    outputSchema: SuggestPreventionTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
