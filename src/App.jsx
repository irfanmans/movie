import { useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Main from "./components/Main";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMoviesList from "./components/WatchedMoviesList";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";

const KEY = "658ea1e6";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]); // State untuk pencarian film
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // Jika keadaan state id sama dengan id yang di pilih makan ubah menjadi null
  const handleMovieById = (pilihanId) => {
    setSelectedId((id) => (id === pilihanId ? null : pilihanId));
  };

  const handleCloseMovieDetail = () => {
    setSelectedId(null);
  };

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((movie) => movie.filter((movie) => movie.imdbID !== id));
  };

  useEffect(() => {
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
    handleCloseMovieDetail();
    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <div className="p-5">
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loading />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleMovieById} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {/* // Jika state selectedId ada isinya */}
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovieDetail={handleCloseMovieDetail}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
