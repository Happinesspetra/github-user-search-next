const GITHUB_API_BASE = 'https://api.github.com';

export async function fetchGitHubUser(username: string) {
  const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
  if (!response.ok) {
    throw new Error('User not found');
  }
  return response.json();
}

export async function fetchUserRepos(username: string, page = 1, per_page = 30) {
  const response = await fetch(
    `${GITHUB_API_BASE}/users/${username}/repos?page=${page}&per_page=${per_page}&sort=updated`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  return response.json();
}