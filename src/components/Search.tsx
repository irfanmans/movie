import { useRef } from "react";
import type SearchProps from "../interface/Search";
import { useKey } from "../hooks/useKey";

export default function Search({ query, setQuery }: SearchProps) {
  const inputEl = useRef<HTMLInputElement>(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;

    inputEl.current?.focus();
    setQuery("");
  });

  // useEffect(
  //   function () {
  //     function callback(e: KeyboardEvent) {
  //       if (document.activeElement === inputEl.current) return;

  //       if (e.code === "Enter") {
  //         inputEl.current?.focus();
  //         setQuery("");
  //       }
  //     }

  //     document.addEventListener("keydown", callback);

  //     return () => document.removeEventListener("keydown", callback);
  //   },
  //   [setQuery],
  // );

  return (
    <>
      <input
        type="text"
        className="search"
        placeholder="Search Movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
    </>
  );
}
