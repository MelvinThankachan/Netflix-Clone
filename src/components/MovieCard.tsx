import { constructImageUrl } from "../misc/tmdbConfig";
import { Movie } from "../misc/types";

type MovieCardProps = {
  movie: Movie;
  rank: number;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie, rank }) => {
  return (
    <div className="relative overflow-visible flex transition-all duration-200 hover:scale-105 cursor-pointer">
      <div className="pl-3 xl:pl-5"></div>
      <img
        className="min-w-36 md:min-w-44 xl:min-w-52 rounded-lg"
        src={constructImageUrl("SMALL", movie.poster_path)}
        alt=""
      />
      <div className="text-6xl xl:text-8xl font-bold text-black text-outline absolute bottom-5 left-0">
        {rank}
      </div>
    </div>
  );
};

export default MovieCard;
