function NumResults({ movies }) {
  // Cek jika movies undefined atau bukan array
  const resultsCount = Array.isArray(movies) ? movies.length : 0;

  return (
    <p className="text-white text-center font-poppins">
      Found <strong>{resultsCount}</strong> results
    </p>
  );
}

export default NumResults;
