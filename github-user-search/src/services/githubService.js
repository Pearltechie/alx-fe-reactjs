import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users?q=";

const fetchUserData = async ({ username, location, repos }) => {
  try {
    let query = `${username ? `${username}+` : ""}`;
    if (location) query += `location:${location}+`;
    if (repos) query += `minRepos:>${repos}`;

    const response = await axios.get(`${GITHUB_API_URL}${query}`);
    return response.data.items || [];
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    return [];
  }
};

export default fetchUserData;
