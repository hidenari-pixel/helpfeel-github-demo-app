'use client';

import { useCallback, useState } from 'react';
import { FetchButton } from '@/app/_components/FetchButton';
import { Issue } from '@/app/_types/issue';
import { PullRequest } from '@/app/_types/pullRequest';
import { IssueItem } from '@/app/_components/IssueItem';
import { getIssues } from '@/app/_actions/getIssues';
import { PullRequestItem } from '@/app/_components/PullRequestItem';
import { getPullRequests } from '@/app/_actions/getPullRequests';
import { useFetchTargetForm } from '@/app/_hooks/useFetchTargetForm';

type Props = {
  url: string;
};

export const Fetcher = ({ url }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [issues, setIssues] = useState<Issue[]>([]);

  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);

  const isIssueExist = issues.length > 0;

  const isPullRequestsExist = pullRequests.length > 0;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFetchTargetForm();

  const handleGetItems = useCallback(async (fetchTarget: string) => {
    try {
      setIsLoading(true);
      if (fetchTarget === 'issues') {
        const data = await getIssues(`${url}/${fetchTarget}`);
        setIssues(data);
        setPullRequests([]);
      } else if (fetchTarget === 'pulls') {
        const data = await getPullRequests(`${url}/${fetchTarget}`);
        setPullRequests(data);
        setIssues([]);
      } else {
        setIssues([]);
        setPullRequests([]);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="flex flex-col gap-y-2">
      <form
        className="flex items-center gap-x-4"
        onSubmit={handleSubmit(({ fetchTarget }) =>
          handleGetItems(fetchTarget)
        )}
      >
        <div className="flex flex-col gap-y-1">
          <input
            {...register('fetchTarget')}
            type="text"
            className="border text-sm rounded-lg block px-2 py-1 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="enter 'issues' or 'pulls'"
          />
          {errors.fetchTarget && (
            <p className="text-red-600 text-xs">{errors.fetchTarget.message}</p>
          )}
        </div>
        <FetchButton disabled={isLoading} isLoading={isLoading} />
      </form>

      <div className="flex flex-col gap-y-1">
        {isIssueExist &&
          issues.map((issue) => <IssueItem key={issue.id} issue={issue} />)}
        {isPullRequestsExist &&
          pullRequests.map((pullRequest) => (
            <PullRequestItem key={pullRequest.id} pullRequest={pullRequest} />
          ))}
        {!isIssueExist && !isPullRequestsExist && (
          <span className="text-gray-400">None</span>
        )}
      </div>
    </div>
  );
};
