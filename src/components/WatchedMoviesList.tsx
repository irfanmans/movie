import type WatchedMoviesListProps from "../interface/WatchedMoviesList";
import WatchedMovie from "./WatchedMovie";

export default function WatchedMoviesList({
  watched,
  onDeleteWatched,
}: WatchedMoviesListProps) {
  return (
    <>
      <ul className="list">
        {watched.map((movie) => (
          <WatchedMovie
            movie={movie}
            key={movie.imdbID}
            onDeleteWatched={onDeleteWatched}
          />
        ))}
      </ul>
    </>
  );
}
