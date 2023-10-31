import { Issue } from '@/app/_types/issue';
import Link from 'next/link';

type Props = {
  issue: Issue;
};

export const IssueItem = ({ issue }: Props) => {
  return (
    <Link
      className="w-fit px-2 underline decoration-blue-500 text-blue-500 hover:text-blue-400 hover:decoration-blue-400"
      href={{ pathname: issue.html_url }}
      target="_blank"
    >
      {issue.title}
    </Link>
  );
};
