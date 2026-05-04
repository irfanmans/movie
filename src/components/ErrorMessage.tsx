import type ErrorMessageProps from "../interface/ErrorMessage";

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <p className="error">
      <span>⛔️</span> {message}
    </p>
  );
}
