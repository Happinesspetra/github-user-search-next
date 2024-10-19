'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchGitHubUser, fetchUserRepos } from '../../lib/github';
import type { GitHubUser, GitHubRepo } from '../../types';
import UserProfile from '../../components/UserProfile';
import RepositoryList from '../../components/RepositoryList';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

export default function UserProfilePage() {
  const { username } = useParams();
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        
        const userData = await fetchGitHubUser(username as string);
        setUser(userData);
        
        const reposData = await fetchUserRepos(username as string);
        setRepos(reposData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    }

    if (username) {
      fetchData();
    }
  }, [username]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!user) return <ErrorMessage message="User not found" />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <UserProfile user={user} />
      <RepositoryList repositories={repos} />
    </div>
  );
}