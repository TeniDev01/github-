import React from 'react'

export default function Repos({ repos }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Public Repositories:</h3>
      <ul className="space-y-2">
        {repos.map(repo => (
          <li key={repo.id} className="border p-2 rounded hover:bg-gray-50">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium" 
            >
              {repo.name}
            </a>
            <p className="text-sm text-gray-600">{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
