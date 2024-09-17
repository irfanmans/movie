function Movie({ movie, onSelectMovie }) {
  return (
    <li
      className="bg-slate-800 p-5 rounded-lg cursor-pointer group hover:bg-violet-700 hover:transition-all"
      onClick={() => onSelectMovie(movie.imdbID)}
    >
      <div className="relative flex gap-x-5">
        <img
          src={movie.Poster}
          alt={`${movie.Title} poster`}
          width={90}
          className="rounded"
        />
        <div className=" flex flex-col gap-y-[0.2px]">
          <h3 className="text-white font-bold font-poppins">{movie.Title}</h3>
          <p className="flex gap-x-1">
            <span>🗓</span>
            <span className="text-white">{movie.Year}</span>
          </p>
          <div className="absolute bottom-0  border rounded text-center flex items-center py-1 hover:border-green-600 group-hover:bg-yellow-500 group-hover:border-yellow-500">
            <span className="font-poppins text-white text-xs px-3 ">
              {movie.Type}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Movie;
