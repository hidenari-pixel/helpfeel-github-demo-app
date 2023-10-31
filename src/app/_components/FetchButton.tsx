import { ButtonHTMLAttributes } from 'react';

type Props = { isLoading?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>;

export const FetchButton = ({ isLoading = false, ...rest }: Props) => {
  return (
    <button
      className="px-3 py-1 rounded-full border text-sm hover:bg-gray-600 flex items-center gap-x-2 disabled:bg-gray-600"
      type="submit"
      {...rest}
    >
      <span>取得</span>
      {isLoading && (
        <div className="flex justify-center" aria-label="読み込み中">
          <div className="animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      )}
    </button>
  );
};
