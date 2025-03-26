
import { useState } from "react";
import fetchUserData from "../services/githubService";

const Search = ({ setResults }) => {
  const [searchParams, setSearchParams] = useState({
    username: "",
    location: "",
    repos: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const users = await fetchUserData(searchParams);
      if (users.length === 0) {
        setError("Looks like we cant find the user");
      }
      setResults(users);
    } catch (err) {
      setError("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="username"
          placeholder="GitHub Username"
          value={searchParams.username}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location (e.g., Nigeria)"
          value={searchParams.location}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="repos"
          placeholder="Minimum Repositories"
          value={searchParams.repos}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500 mt-2">Loading...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* ✅ FIXED: Use `map()` to display results inside Search.jsx */}
      <div className="mt-4">
        {results.length > 0 && results.map((user) => (
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
        ))}
      </div>
    </div>
  );
};

export default Search;