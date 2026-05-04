import type DataMovieProps from "./DataMovies";

export default interface MovieListProps {
  movies: DataMovieProps[];
  onSelectMovie: (id: string | number) => void;
}
