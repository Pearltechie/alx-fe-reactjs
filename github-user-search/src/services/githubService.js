import axios from "axios";

const fetchUserData = async ({ username, location, repos }) => {
  try {
    let query = `q=${username}`;

    if (location) {
      query += `+location:${location}`;
    }
    if (repos) {
      query += `+repos:>${repos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
};

export default fetchUserData;
