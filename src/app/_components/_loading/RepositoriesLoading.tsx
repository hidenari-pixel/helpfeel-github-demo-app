export const RepositoriesLoading = () => {
  return (
    <div className="w-full flex flex-col gap-y-6">
      <RepositoryLoading />
      <RepositoryLoading />
      <RepositoryLoading />
    </div>
  );
};

const RepositoryLoading = () => {
  return (
    <div className="w-full flex flex-col gap-y-4 border rounded-md shadow-lg p-8">
      <div className="w-full flex items-center justify-between">
        <div className="h-8 w-56 bg-gray-700 animate-pulse rounded-md" />
        <button className="rounded-full py-2 px-4 border hover:bg-blue-400">
          Update
        </button>
      </div>
      <div className="flex flex-col gap-y-4">
        {/* Issues */}
        {/* Pulls */}
      </div>
    </div>
  );
};
