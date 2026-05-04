export interface StarRatingProps {
  maxRating?: number;
  defaultRating?: number;
  color?: string;
  size?: number;
  messages?: string[];
  className?: string;
  onSetRating?: (rating: number) => void;
}

export interface StarProps {
  onRate?: () => void;
  full: boolean;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  color?: string;
  size?: number;
}
