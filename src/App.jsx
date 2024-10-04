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
import useMovie from "./CustomHook/useMovie";
import { useLocalStorageState } from "./CustomHook/useLocalStorageState";

function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  // watched dan setWatched mempresentasikan return [value, setValue] pada custom hook
  const [watched, setWatched] = useLocalStorageState([], "watched"); // Custom Hook, [watched, setWatched] merupakan distructuring array
  const { movies, isLoading, error } = useMovie(query); // Custom Hook

  // Jika keadaan state id sama dengan id yang di pilih makan ubah menjadi null
  const handleMovieById = (pilihanId) => {
    setSelectedId((id) => (id === pilihanId ? null : pilihanId));
  };

  function handleCloseMovieDetail() {
    setSelectedId(null);
  }

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((movie) => movie.filter((movie) => movie.imdbID !== id));
  };

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
