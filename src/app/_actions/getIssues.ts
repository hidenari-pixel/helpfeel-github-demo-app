'use server';

import { Issue } from '@/app/_types/issue';
import { ghGet } from '@/app/_utils/ghFetch';

export const getIssues = async (url: string): Promise<Issue[]> => {
  return (
    (await ghGet<Issue[]>(url, {
      revalidate: 0,
    })) || []
  );
};
