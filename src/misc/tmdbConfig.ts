export const baseURL: string = "https://api.themoviedb.org/3";
export const API_KEY: string = import.meta.env.VITE_TMDB_API_KEY;

// Function to construct image url
const baseImageURL: string = "https://image.tmdb.org/t/p/";
const IMAGE_SIZES = {
  SMALL: "w300",
  MEDIUM: "w500",
  LARGE: "w780",
  ORIGINAL: "original",
};
export const constructImageUrl = (
  size: "SMALL" | "MEDIUM" | "LARGE" | "ORIGINAL" = "MEDIUM",
  path: string
): string => `${baseImageURL}${IMAGE_SIZES[size]}/${path}`;
