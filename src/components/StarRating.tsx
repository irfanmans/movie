import { useState } from "react";
import type { StarRatingProps } from "../interface/StarRating";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};
export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}: StarRatingProps) {
  // Untuk yang di pilih star nya
  const [rating, setRating] = useState<number>(defaultRating);
  // Untuk yang di sorot star nya
  const [tempRating, setTempRating] = useState<number>(0);

  function handleRating(rating: number) {
    setRating(rating);
    onSetRating?.(rating);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <>
      <div style={containerStyle} className={className}>
        <div style={starContainerStyle}>
          {Array.from({ length: maxRating }, (_, i) => (
            <Star
              key={i}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              onRate={() => handleRating(i + 1)}
              onHoverIn={() => setTempRating(i + 1)}
              onHoverOut={() => setTempRating(0)}
              color={color}
              size={size}
            />
          ))}
        </div>
        <p style={textStyle}>
          {messages.length === maxRating
            ? messages[tempRating ? tempRating - 1 : rating - 1]
            : tempRating || rating || ""}
        </p>
      </div>
    </>
  );
}
