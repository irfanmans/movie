import { IoClose } from "react-icons/io5";

function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li className="flex items-center gap-x-5 text-white relative">
      <img
        src={movie.poster}
        alt={`${movie.title} poster`}
        width={90}
        className="rounded-lg"
      />
      <div className="font-poppins">
        <h3 className="font-bold text-base">{movie.title}</h3>
        <div className="flex gap-x-4 mt-3">
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>

          <button
            onClick={() => onDeleteWatched(movie.imdbID)}
            className="absolute right-0 top-0 p-1 bg-red-600 rounded-full"
          >
            <IoClose />
          </button>
        </div>
      </div>
    </li>
  );
}

export default WatchedMovie;
