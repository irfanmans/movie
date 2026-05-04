import type DataWatchedProps from "./DataWatched";

export default interface SelectedMovieProps {
  selectedId: string;
  onCloseMovie: VoidFunction;
  onAddWatched: (movie: DataWatchedProps) => void;
  watched: DataWatchedProps[];
}
