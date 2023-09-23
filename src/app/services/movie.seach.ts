import axios from "axios";

const API_KEY = "0edcb55da40f8f65f8ee494d59b40aea";

const API_BASE_URL = "https://api.themoviedb.org/3";

const client = axios.create({
  baseURL: API_BASE_URL,
  params: { api_key: API_KEY },
});

export const searchMovie = async (query: string) => {
  try {
    const response = await client.get("/search/movie", {
      params: { query },
    });
    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      console.log("Could not get movie");
    }
  } catch (err) {
    console.log(`Could not get movie ${err}`);
    return [];
  }
};
