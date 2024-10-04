import { useEffect, useState } from "react";

const KEY = "658ea1e6";

function useMovie(query, callback) {
  const [movies, setMovies] = useState([]); // State untuk pencarian film
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // callback?.();

    // Inisialisasi untuk cleanup function
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        // ini akan mengatur ulang keadaan state menjadi string kosong,
        // kalau tidak ada ini maka akan tampil terus pesan error nya yaitu "Movie not found"
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movie");

        const data = await res.json();
        // console.log("Fetched data:", data);

        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        // console.log("Movies state updated:", data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    // Ketika user mencari judul "tes" dan pilih movie nya, kemudian ketika user mencari judul lain "spider",
    // maka otomatis akan menutup komponen MovieDetail yang "tes" nya
    // handleCloseMovieDetail();
    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}

export default useMovie;
