import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StarRating from "./components/StarRating.jsx";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <StarRating color="#fcc419" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was reted {movieRating} stars</p>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

{
  /* <StarRating
  maxRating={5}
  size={48}
  color="#fcc419"
  defaultRating={2}
  className=""
  messages={["Irfan", "Aldo", "Imron", "Muktar", "Naufal"]}
/>
<Test /> */
}
