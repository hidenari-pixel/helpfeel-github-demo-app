import { PullRequest } from '@/app/_types/pullRequest';
import Link from 'next/link';

type Props = {
  pullRequest: PullRequest;
};

export const PullRequestItem = ({ pullRequest }: Props) => {
  return (
    <Link
      className="w-fit px-2 underline decoration-blue-500 text-blue-500 hover:text-blue-400 hover:decoration-blue-400"
      href={{ pathname: pullRequest.html_url }}
      target="_blank"
    >
      {pullRequest.title}
    </Link>
  );
};
