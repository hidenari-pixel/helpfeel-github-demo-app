import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormValues = z.infer<typeof schema>;

const schema = z.object({
  fetchTarget: z
    .string()
    .refine((value) => value === 'issues' || value === 'pulls', {
      message: "Please enter 'issues' or 'pulls'",
    }),
});

export const useFetchTargetForm = () => {
  return useForm<FormValues>({
    defaultValues: {
      fetchTarget: '',
    },
    resolver: zodResolver(schema),
  });
};
