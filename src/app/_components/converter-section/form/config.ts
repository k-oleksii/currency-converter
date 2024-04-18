import { z } from 'zod';

export const CurrencySchema = z.object({
  from: z.object({
    curr: z
      .string()
      .regex(/^\d+(\.\d+)?$/, 'Повинно містити число')
      .min(1, 'Число має бути більшим за 0')
      .refine(value => parseFloat(value) > 0, {
        message: 'Число має бути більшим за 0',
      })
      .nullable(),
    curr_code: z.string(),
  }),
  to: z.object({
    curr: z
      .string()
      .regex(/^\d+(\.\d+)?$/, 'Повинно містити число')
      .min(1, 'Число має бути більшим за 0')
      .refine(value => parseFloat(value) > 0, {
        message: 'Число має бути більшим за 0',
      })
      .nullable(),
    curr_code: z.string(),
  }),
  date: z.date(),
});
