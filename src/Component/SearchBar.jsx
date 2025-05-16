import React, { useState } from 'react';
function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 justify-center">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border rounded px-7 py-2 w-64"
      />
      <button type="submit" className="bg-brand text-white px-4 py-2 rounded hover:bg-brand-dark">
        Search
      </button>
    </form>
  );
}

export default SearchBar;


