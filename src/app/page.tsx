import SearchBar from './components/SearchBar';
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <FaGithub className="mx-auto h-16 w-16 text-github-gray dark:text-white transition-colors duration-300" />
          <h1 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
            GitHub Profile Search
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Enter a GitHub username to view their profile and repositories
          </p>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}