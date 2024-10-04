import { useRef } from "react";
import { useKeyListener } from "../CustomHook/useKeyListener";

function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  // Custom Hook
  useKeyListener("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <>
      <input
        className="rounded w-full focus:outline-none bg-violet-500 placeholder-white text-white px-2 py-2"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl} // Ini akan menghasilkan objek current dengan hasil dari elemen input ini sendiri
      />
    </>
  );
}

export default Search;
