'use client'

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    router.push(`/user/${username}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white dark:bg-gray-800 dark:border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
            placeholder="Search GitHub username"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md flex items-center justify-center space-x-2"
        >
          <FaSearch className="h-4 w-4" />
          <span>Search</span>
        </button>
      </div>
    </form>
  );
}