import { useState } from "react";
import { fetchGitHubUser } from "./services/githubService";

function App() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        setError("");
        const data = await fetchGitHubUser(username);
        if (data) {
            setUserData(data);
        } else {
            setError("User not found");
            setUserData(null);
        }
    };

    return (
        <div className="container">
            <h1>GitHub User Search</h1>
            <input 
                type="text" 
                placeholder="Enter GitHub username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>

            {error && <p className="error">{error}</p>}

            {userData && (
                <div className="user-card">
                    <img src={userData.avatar_url} alt="Profile" />
                    <h2>{userData.name}</h2>
                    <p>{userData.bio}</p>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        Visit GitHub Profile
                    </a>
                </div>
            )}
        </div>
    );
}

export default App;
