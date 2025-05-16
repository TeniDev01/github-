import React from 'react';

function ProfileCard({ user }) {
  return (
    <div className="bg-white shadow-md rounded p-4 mt-6 text-center">
      <img
        src={user.avatar_url}
        alt={user.name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-semibold">{user.name}</h2>
      <p className="text-gray-600">{user.bio}</p>
      <p className="text-sm text-gray-500">{user.location}</p>
      <p className="mt-2 font-bold">Followers: {user.followers}</p>
    </div>
  );
}

export default ProfileCard;