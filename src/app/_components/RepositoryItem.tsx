import Link from 'next/link';
import { Repository } from '@/app/_types/repository';
import { Fetcher } from '@/app/_components/Fetcher';

type Props = {
  repository: Repository;
};

export const RepositoryItem = ({ repository }: Props) => {
  return (
    <div className="w-full flex flex-col gap-y-4 border rounded-md shadow-lg p-8">
      <div className="w-full flex items-center justify-between">
        <Link
          className="text-2xl font-semibold underline decoration-blue-500 text-blue-500 hover:text-blue-400 hover:decoration-blue-400"
          href={{ pathname: repository.html_url }}
          target="_blank"
        >
          {repository.full_name}
        </Link>
      </div>
      <div className="flex flex-col gap-y-4">
        <Fetcher url={repository.url} />
      </div>
    </div>
  );
};
