import { Repository } from '@/app/_types/repository';
import { RepositoryItem } from '@/app/_components/RepositoryItem';
import { ghGet } from '@/app/_utils/ghFetch';
import { REPO_URL } from '@/app/_consts/repoUrl';

export const Repositories = async () => {
  const repositories = await getRepositories();

  return (
    <div className="w-full flex flex-col gap-y-6">
      {repositories.map((repo) => (
        <RepositoryItem key={repo.id} repository={repo} />
      ))}
    </div>
  );
};

const getRepositories = async (): Promise<Repository[]> => {
  return (
    (await ghGet<Repository[]>(REPO_URL, {
      revalidate: 0,
    })) || []
  );
};
