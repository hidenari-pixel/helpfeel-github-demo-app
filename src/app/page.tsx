import { Repositories } from '@/app/_components/Repositories';
import { Suspense } from 'react';
import { RepositoriesLoading } from '@/app/_components/_loading/RepositoriesLoading';

export default function Home() {
  return (
    <main className="min-h-screen w-screen flex flex-col gap-y-8 items-center p-8">
      <h1 className="text-3xl font-bold">GitHub Repository List</h1>
      <Suspense fallback={<RepositoriesLoading />}>
        <Repositories />
      </Suspense>
    </main>
  );
}
