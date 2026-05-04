import type DataWatchedProps from "./DataWatched";

export default interface WatchedMoviesListProps {
  watched: DataWatchedProps[];
  onDeleteWatched: (id: string) => void;
}
