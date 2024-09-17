function Search({ query, setQuery }) {
  return (
    <>
      <input
        className="rounded w-full focus:outline-none bg-violet-500 placeholder-white text-white px-2 py-2"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
}

export default Search;
