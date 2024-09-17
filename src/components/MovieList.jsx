import Movie from "./Movie";

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="flex flex-col gap-y-5 py-4 px-2">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

export default MovieList;
