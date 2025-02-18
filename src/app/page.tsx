// src/app/page.tsx
import { FaGithub } from 'react-icons/fa';
import SearchBar from './components/SearchBar';
import { ThemeProvider, useTheme } from './themeContext';

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}

function HomeContent() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`min-h-[80vh] flex flex-col items-center justify-center p-4 ${isDarkMode ? 'dark' : ''}`}>
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
        <button
          onClick={toggleTheme}
          className="px-4 py-2 mt-4 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        >
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  );
}
