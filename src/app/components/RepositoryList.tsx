'use client'

import { useState } from 'react';
import { FaStar, FaCodeBranch } from 'react-icons/fa';
import type { GitHubRepo } from '../types';

interface RepositoryListProps {
  repositories: GitHubRepo[];
}

export default function RepositoryList({ repositories }: RepositoryListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const reposPerPage = 6;
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repositories.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = Math.ceil(repositories.length / reposPerPage);

  return (
    <div className={`mt-8 ${isDarkMode ? 'dark' : ''}`}>
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Repositories</h2>
      <button
        onClick={toggleTheme}
        className="mb-4 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
      >
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <div className="grid gap-4 md:grid-cols-2">
        {currentRepos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col h-full">
              <div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium text-lg"
                >
                  {repo.name}
                </a>
                {repo.description && (
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {repo.description}
                  </p>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                {repo.language && (
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {repo.language}
                  </span>
                )}
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center">
                    <FaStar className="mr-1" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center">
                    <FaCodeBranch className="mr-1" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center space-x-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
