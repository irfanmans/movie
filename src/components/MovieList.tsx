import type MovieListProps from "../interface/MovieList";
import Movie from "./Movie";

export default function MovieList({ movies, onSelectMovie }: MovieListProps) {
  return (
    <>
      <ul className="list list-movies">
        {movies.map((movie) => (
          <Movie
            movie={movie}
            key={movie.imdbID}
            onSelectMovie={onSelectMovie}
          />
        ))}
      </ul>
    </>
  );
}
