import { useEffect, useState, useRef } from "react";
import MovieCard from "./MovieCard";
import { Movie } from "../misc/types";
import { axiosTMDBInstance } from "../misc/axiosInstances";
import { API_KEY } from "../misc/tmdbConfig";
import Arrow from "../assets/icons/Arrow";
import MovieModal from "./MovieModal"; // Import the MovieModal

const TrendingSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const trendingRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axiosTMDBInstance.get("/movie/popular", {
        params: { api_key: API_KEY },
      });
      setMovies(response.data.results.slice(0, 10));
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (trendingRef.current) {
        setCanScrollLeft(trendingRef.current.scrollLeft > 0);
        setCanScrollRight(
          trendingRef.current.scrollLeft <
            trendingRef.current.scrollWidth - trendingRef.current.clientWidth
        );
      }
    };

    checkScrollPosition();

    const currentRef = trendingRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", checkScrollPosition);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, [movies]);

  const scrollRight = () => {
    if (trendingRef.current) {
      trendingRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (trendingRef.current) {
      trendingRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedMovie(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="content bg-black flex flex-col pt-5">
      <h1 className="section-heading">Trending Now</h1>
      <div className="flex relative">
        {canScrollLeft && (
          <div className="scroll-arrow left-0">
            <button onClick={scrollLeft} className="scroll-arrow-button">
              <Arrow />
            </button>
          </div>
        )}
        <div
          ref={trendingRef}
          className="trending flex overflow-x-scroll gap-5 py-5"
        >
          {movies.map((movie, index) => (
            <div key={movie.id} onClick={() => handleMovieClick(movie)}>
              <MovieCard rank={index + 1} movie={movie} />
            </div>
          ))}
        </div>
        {canScrollRight && (
          <div className="scroll-arrow right-0">
            <button onClick={scrollRight} className="scroll-arrow-button">
              <div className="rotate-180">
                <Arrow />
              </div>
            </button>
          </div>
        )}
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </section>
  );
};

export default TrendingSection;
