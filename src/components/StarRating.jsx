import { useState } from "react";
import PropTypes from "prop-types";
import Star from "./Star";

function StarRating({
  maxRating,
  color,
  size,
  defaultRating = 0,
  messages = [],
  onSetRating = () => {},
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
    onSetRating(newRating);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            size={size}
            color={color}
          />
        ))}
      </div>
      <p
        className={`leading-[1px] m-0`}
        style={{ fontSize: size, color: color }}
      >
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  defaultRating: PropTypes.number,
  messages: PropTypes.array,
  onSetRating: PropTypes.func,
  className: PropTypes.string,
};

export default StarRating;
