import type DataMovieProps from "./DataMovies";

export default interface MovieProps {
  movie: DataMovieProps;
  onSelectMovie: (id: string | number) => void;
}
