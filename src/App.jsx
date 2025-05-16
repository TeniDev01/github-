
import React, { useState, useEffect } from 'react';
import SearchBar from '../src/Component/SearchBar.jsx';
import ProfileCard from '../src/Component/ProfileCard.jsx';
import RepoList from '../src/Component/RepoList.jsx';
import "tailwindcss";

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setUsername(username);
    setLoading(true);
    setError(null);
    setUserData(null);
    setRepos([]);

    try {
      const profileRes = await fetch(`https://api.github.com/users/${username}`);
      if (!profileRes.ok) throw new Error('User not found');
      const profileData = await profileRes.json();

      const reposRes = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await reposRes.json();

      setUserData(profileData);
      setRepos(reposData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">GitHub Profile Viewer</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      {userData && <ProfileCard user={userData} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
}

export default App;
