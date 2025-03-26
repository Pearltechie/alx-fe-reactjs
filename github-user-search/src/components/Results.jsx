const Results = ({ results }) => {
    return (
      <div className="mt-4">
        {results.length === 0 ? (
          <p className="text-gray-500">No users found</p>
        ) : (
          results.map((user) => (
            <div key={user.id} className="flex items-center space-x-4 p-2 border-b">
              <img src={user.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full" />
              <div>
                <h2 className="text-lg font-bold">{user.login}</h2>
                <p className="text-sm">Location: {user.location || "N/A"}</p>
                <p className="text-sm">Repos: {user.public_repos || "N/A"}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View Profile
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default Results;
  