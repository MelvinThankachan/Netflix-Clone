import axios from "axios";
import { baseURL } from "./tmdbConfig";

// Axios Instance for TMDB
export const axiosTMDBInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
