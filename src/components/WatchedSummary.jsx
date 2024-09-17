function WatchedSummary({ watched }) {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="bg-slate-500 rounded px-6 py-3 w-full mx-auto">
      <h2 className="uppercase text-white font-bold text-xs text-center">
        Movies you watched
      </h2>
      <div className="flex justify-between mt-1 font-semibold">
        <p className="flex items-center gap-x-2">
          <span>👨‍💼</span>
          <span className="text-white font-light">{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span className="text-white font-light">{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span className="text-white font-light">{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span className="text-white font-light">{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

export default WatchedSummary;
