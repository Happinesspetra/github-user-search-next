import { useState } from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
import type { GitHubUser } from '../types';

interface UserProfileProps {
  user: GitHubUser;
}

export default function UserProfile({ user }: UserProfileProps) {
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
    <div className={`bg-white dark:bg-dark-blue shadow rounded-lg p-6 ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        >
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex-shrink-0 mb-4 sm:mb-0">
          <div className="relative w-32 h-32">
            <Image
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="sm:ml-6 text-center sm:text-left flex-1">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {user.name || user.login}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">@{user.login}</p>
          {user.bio && (
            <p className="mt-2 text-gray-700 dark:text-gray-300">{user.bio}</p>
          )}
          <div className="mt-4 flex flex-wrap gap-4 justify-center sm:justify-start">
            {user.location && (
              <span className="flex items-center text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt className="mr-2" />
                {user.location}
              </span>
            )}
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400"
            >
              <FaGithub className="mr-2" />
              GitHub Profile
            </a>
          </div>
          <div className="mt-4 flex gap-4 justify-center sm:justify-start text-sm">
            <div className="text-gray-600 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">{user.public_repos}</span> repositories
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">{user.followers}</span> followers
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">{user.following}</span> following
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
