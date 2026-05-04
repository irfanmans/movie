import type DataWatchedProps from "./DataWatched";

export default interface WatchedMovieProps {
  movie: DataWatchedProps;
  onDeleteWatched: (id: string) => void;
}
