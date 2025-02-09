import { z } from 'zod';

export const addressSuggestionSchema = z.object({
  id: z.string(),
  description: z.string(),
});

export type AddressSuggestion = z.infer<typeof addressSuggestionSchema>;
