'use server';

import { ghGet } from '@/app/_utils/ghFetch';
import { PullRequest } from '@/app/_types/pullRequest';

export const getPullRequests = async (url: string): Promise<PullRequest[]> => {
  return (
    (await ghGet<PullRequest[]>(url, {
      revalidate: 0,
    })) || []
  );
};
