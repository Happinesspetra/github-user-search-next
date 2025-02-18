import { useState } from 'react';
import Link from 'next/link';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`rounded-md bg-gray-50 dark:bg-gray-900/30 p-4 my-4 ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex justify-end mb-4">
        <button onClick={toggleTheme} className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
      <div className="flex flex-col">
        <div className="text-gray-700 dark:text-gray-200">
          <h3 className="text-sm font-medium">Error!!!</h3>
          <div className="mt-2 text-sm">{message}</div>
          <br />
        </div>
        <Link href="/">
          <a className="mt-4">
            <button className="px-4 py-2 rounded bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-200 hover:bg-blue-700 dark:hover:bg-blue-500">
              Back
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
