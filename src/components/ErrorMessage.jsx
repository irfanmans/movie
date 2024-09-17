function ErrorMessage({ message }) {
  return (
    <div className="py-2 px-2 bg-red-600 rounded mt-10 w-40 mx-auto text-center text-white font-poppins">
      <p className="font-poppins">Error : </p>
      <span>{message}</span>
    </div>
  );
}

export default ErrorMessage;
