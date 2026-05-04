import type NumResultsProps from "../interface/NumResults";

export default function NumResults({ movies }: NumResultsProps) {
  return (
    <>
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </>
  );
}
