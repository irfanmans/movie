import WatchedMovie from "./WatchedMovie";

function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="flex flex-col px-4 py-4 gap-y-5">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

export default WatchedMoviesList;
