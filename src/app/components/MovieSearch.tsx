"use client";

import { useState } from "react";

import { searchMovie } from "../services/movie.seach";

import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query: string) => {
    const result = await searchMovie(query);

    setMovies(result);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
        {movies && Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie: any) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              overview={movie.overview}
              posterPath={movie.poster_path}
            />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
