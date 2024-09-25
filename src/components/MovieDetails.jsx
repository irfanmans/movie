import { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Loading from "./Loading";
import StarRating from "./StarRating";

const KEY = "658ea1e6";

function MovieDetails({
  selectedId,
  onCloseMovieDetail,
  onAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatch = watched.map((movie) => movie.imdbID).includes(selectedId);

  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  // Distructuring Objek
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Language: language,
    Director: director,
    Genre: genre,
  } = movie;

  // Ini akan dikirimkan ke state watched di file App.jsx
  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovieDetail();
  };

  useEffect(() => {
    const getMovieDetail = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    };
    getMovieDetail();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;

    // Clean up Function
    return () => {
      document.title = "Movie";
    };
  }, [title]);

  return (
    <>
      <div className="relative">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="bg-white shadow-lg w-8 h-8 rounded-full absolute top-1 left-1">
              <button
                className="flex items-center justify-center w-full h-full"
                onClick={onCloseMovieDetail}
              >
                <IoIosArrowRoundBack className="text-2xl text-black" />
              </button>
            </div>

            <section className="flex gap-x-3 font-poppins rounded-xl">
              <img
                src={poster}
                alt={`Poster of ${movie}`}
                className="rounded-xl w-1/2 h-1/2 lg:w-56"
              />
              <div className="flex flex-col gap-y-1 mt-4 text-white">
                <h2 className="text-xl font-bold tracking-normal">{title}</h2>
                <p className="text-xs">
                  {released} &bull; {runtime}
                </p>
                <p className="text-xs">{genre}</p>
                <p className="text-xs">
                  <span></span>
                  {imdbRating} IMDb Rating
                </p>
              </div>
            </section>
            <div className="py-3 px-2 bg-slate-500 mt-5 rounded-lg">
              {!isWatch ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    color="#fcc419"
                    onSetRating={setUserRating} // Akan memperbarui state userRating
                  />
                  {userRating > 0 && (
                    <button
                      className="p-3 bg-violet-700 mt-3 w-full rounded-full text-white font-poppins font-semibold"
                      onClick={handleAdd}
                    >
                      + Add To List
                    </button>
                  )}
                </>
              ) : (
                <p className="text-white font-poppins text-center">
                  You rated with movie {watchedUserRating}
                </p>
              )}
            </div>
            <div className="text-white mt-5">
              <p className="text-justify px-5">
                <em>{plot}</em>
              </p>
              <p className="mt-5 px-5">
                <span className="font-semibold text-lime-500">Language</span> :{" "}
                {language}
              </p>
              <p className="px-5">
                <span className="font-semibold text-lime-500">Directed</span> :{" "}
                {director}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default MovieDetails;
