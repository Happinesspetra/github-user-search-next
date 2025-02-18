import Link from 'next/link';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="rounded-md bg-gray-50 dark:bg-gray-900/30 p-4 my-4">
      <div className="flex flex-col">
        <div className="text-gray-700 dark:text-gray-200">
          <h3 className="text-sm font-medium">Error!!!</h3>
          <div className="mt-2 text-sm">{message}</div>
        </div>
        <br>
        <Link href="/">
          <button>
          <a className="mt-4 text-blue-600 dark:text-blue-400 hover:underline">
            Back
          </a>
          </button>
        </Link>
      </div>
    </div>
  );
}
