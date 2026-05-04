import { useEffect, useState } from "react";
import { API_KEY } from "../utils/apiKey";
import type DataMoviesProps from "../interface/DataMovies";
import tempMovieData from "../data/DataMovie";

export function useMovies(query: string) {
  const [movies, setMovies] = useState<DataMoviesProps[]>(tempMovieData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(
    function () {
      //   callback?.();
      // Berkaitan dengan browser karena ini adalah API BROWSER
      // Tidak ada hubungan nya dengan react
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
            { signal: controller.signal },
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
        } catch (err) {
          if (
            err instanceof Error ? err.name !== "AbortError" : "Unknown error"
          ) {
            setError(err instanceof Error ? err.message : "Unknown error");
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return () => {
        controller.abort();
      };
    },
    [query],
  );

  return { movies, isLoading, error };
}
